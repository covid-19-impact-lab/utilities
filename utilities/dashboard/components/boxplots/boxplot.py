import sys
import io
import textwrap
import numpy as np
import pandas as pd
from bokeh.models import ColumnDataSource, FactorRange
from bokeh.transform import factor_cmap
from bokeh.palettes import Spectral6
from utilities.colors import get_colors, plot_colors
from bokeh.models import Legend, LegendItem
from bokeh.models import DatetimeTickFormatter
from bokeh.models.ranges import Range1d, DataRange1d
from bokeh.models import ColumnDataSource, HoverTool, GlyphRenderer, Line
import itertools
from bokeh.models import Span

from pandas.api.types import is_datetime64_any_dtype as is_datetime
from pandas.core.common import flatten
from bokeh.plotting import figure, output_notebook, show


def _preprocess_data(data, bg_vars_1, bg_var_2, outcomes, sample_var):
    """Pre-process data.

     Args:
        data (pandas.DataFrame): Raw dataset.
        bg_vars_1 (list): List of main background variables.
        bg_var_2 (str): Secondary background variable.
        outcomes (list): Outcome variables.
        sample_var (str): Variable that divides the dataset into samples

    Returns
        pd.DataFrame: Formatted dataset.
    """

    data.reset_index(level=["month", "child_id"], inplace=True)

    data = data[(data["single_parent"] == 0)]

    data["covid"] = np.select(
            condlist=[data["month"] <= "2020-02-29", data["month"] > "2020-02-29"],
            choicelist=["pre", "post"],
             default=np.nan
             )

    data["work_perc_home_cat"] = np.select(
        condlist=[data["gender"] == "female", data["gender"] == "male"],
        choicelist=[data["work_perc_home_cat_mother"], data["work_perc_home_cat_father"]],
        default=np.nan,
    )

    data["work_status_family"] = np.select(
        condlist=[
        (np.logical_or(data["labor_force_coarse_father"] == "full-time", data["labor_force_coarse_father"] == "part-time") &
        np.logical_or(data["labor_force_coarse_mother"] == "full-time", data["labor_force_coarse_mother"] == "part-time")),
        (np.logical_or(data["labor_force_coarse_father"] == "full-time", data["labor_force_coarse_father"] == "part-time") &
        (data["labor_force_coarse_mother"] == "not working"))],
        choicelist=["both work", "father works"],
        default=np.nan,
    )

    data["essential_worker_w2"] = data['essential_worker_w2'].replace({1.0: 'yes', 0.0: 'no'})
    data["net_income_2y_equiv_q3"] = data['net_income_2y_equiv_q3'].replace({1.0: 'first', 2.0: 'second', 3.0: 'third'})


    data["relative_cc_gap"] = data["cc_gap"] / (data["hours_cc_female"] + data["hours_cc_male"])

    data = data[bg_vars_1 + [bg_var_2] + outcomes + [sample_var] + ["youngest_child"]]

    return data


def compute_quantities(data, bg_var_1, bg_var_2, outcome):
    """Compute data for boxplot, for one main background variable.

    Args:
        data (pd.DataFrame): Dataset.
        bg_var_1 (str): Main background variable.
        bg_var_2 (str): Secondary background variable.
        outcome (str): Outcome variable.

    Returns:
        dict

    """
    # create temporary dict of quantiles
    temp_dict = {"q25": 0.25, "q50": 0.5, "q75": 0.75}

    # empty list where to store data
    data_res = []

    for key, val in temp_dict.items():

        if bg_var_1 == "child_id":

            # compute quantiles for (grouped) data
            groups = data.groupby([bg_var_1, bg_var_2])
            out = pd.Series.to_frame(groups[outcome].quantile(q=val).rename(key))

        else:

            data = data[(data["youngest_child"] == 1)]
            # compute quantiles for (grouped) data
            groups = data.groupby([bg_var_1, bg_var_2])
            out = pd.Series.to_frame(groups[outcome].quantile(q=val).rename(key))

        # store data
        data_res.append(out)

    # compute "upper" and "lower" extreme for boxplot stems
    upper = data_res[2]["q75"] + 1.5*(data_res[2]["q75"] - data_res[0]["q25"])
    lower = data_res[0]["q25"] - 1.5*(data_res[2]["q75"] - data_res[0]["q25"])

    # add "upper" and "lower" to data. The result is a list of pd.DataFrames
    data_res.append(upper)
    data_res.append(lower)

    # concatenate pd.DataFrames
    data_res_fin = pd.concat(data_res, axis=1).rename(columns={0:"upper", 1:"lower"})

    # delete the raws that contains nan values
    if data_res_fin.isnull().values.any():
        c = data_res_fin.index.names
        data_res_fin = data_res_fin.reset_index()
        rows_with_nan = data_res_fin[data_res_fin.isna().any(axis=1)][bg_var_1].to_list()
        data_res_fin = data_res_fin[~data_res_fin[bg_var_1].isin(rows_with_nan)]
        data_res_fin = data_res_fin.set_index(c)
    else:
        pass

    # convert result to dictionary of results
    key = (bg_var_1, bg_var_2)
    index = data_res_fin.index.tolist()
    res = {key: {"cats": index, "data": data_res_fin.to_dict("list"), "order": [i[1] for i in index]}}

    return res


def process_data(data, bg_vars_1, bg_var_2, outcomes, sample_var, nice_names):
    """Compute data for boxplot, for arbitrary number of main background variables.

    Args:
        data (pd.DataFrame): Dataset.
        bg_vars_1 (list): List of main background variables.
        bg_var_2 (str): Secondary background variable.
        outcomes (list): Outcome variables.
        sample_var (str): Variable that divides the dataset into samples
        nice_names (dict): Dictionary mapping variables to nice names.

    Returns:
        dict

    """

    data = _preprocess_data(data, bg_vars_1, bg_var_2, outcomes, sample_var)

    tot_res = {}

    for outcome in outcomes:
        out_res = {}

        all_res = {}
        for var_1, var_2 in itertools.product(bg_vars_1, [bg_var_2]):

            res = compute_quantities(data, var_1, var_2, outcome)
            all_res.update(res)

        out_res["all"] = all_res


        for s in data[sample_var]:

            s_res = {}
            s_data = data[data[sample_var] == s]

            for var_1, var_2 in itertools.product(bg_vars_1, [bg_var_2]):

                res = compute_quantities(s_data, var_1, var_2, outcome)
                s_res.update(res)

            out_res[s] = s_res

        tot_res[outcome] = out_res

    tot_res["nice_names"] = nice_names

    return tot_res


def _apply_styling(p):

    # grid
    p.xgrid.grid_line_color = None
    p.ygrid.grid_line_alpha = 0.5
    p.outline_line_color = None

    # title
    p.title.text = "Childcare hours: mother's - father's"
    p.title.align = "center"
    p.title_location = "below"
    p.title.text_font_size = "15pt"

    # y-axis
    p.yaxis.axis_line_color = None
    p.axis.major_tick_line_color = None
    p.axis.minor_tick_line_color = None
    p.yaxis.separator_line_alpha = 0
    p.y_range.range_padding = 0.2

    # y-axis labels
    p.yaxis.axis_label_text_font_style = "normal"
    p.yaxis.axis_label_standoff = 30
    p.yaxis.group_label_orientation = "horizontal"
    p.yaxis.group_text_font_size = "11pt"
    p.yaxis.group_text_color = "black"
    p.yaxis.group_text_font_style = "normal"

    # x-axis labels
    p.xaxis.axis_label_text_font_size = "12pt"
    p.xaxis.major_label_text_font_size = "11pt"
    p.yaxis.major_label_text_font_size = "0pt"
    p.yaxis.major_label_text_font = "normal"

    # borders
    p.min_border_left = 50
    p.min_border_right = 50
    p.min_border_top = 20
    p.min_border_bottom = 50

    return p


def setup_plot(data_dict, bg_var_1, bg_var_2, outcome, sample):
    """Create boxplot.

    Args:
        data_dict (dict): Dictionary of data.
        bg_var_1 (str): Main background variable.
        bg_var_2 (str): Secondary background variable.
        outcome (str): Outcome variable.
        sample (str): Either one of the categories of the variable dividing
                      dataset into samples or "all" for the whole dataset.

    Returns:
        Bokeh.figure

    """

    # get data from dictionary
    cats = data_dict[outcome][sample][(bg_var_1, bg_var_2)]["cats"]
    data = data_dict[outcome][sample][(bg_var_1, bg_var_2)]["data"]
    order = data_dict[outcome][sample][(bg_var_1, bg_var_2)]["order"]

    #change names according to nice_names
    cats = [(data_dict["nice_names"][s], data_dict["nice_names"][f]) for s,f in cats]
    order = [data_dict["nice_names"][s] for s in order]

    # create figure
    p = figure(
        tools="",
        y_range=FactorRange(*cats, factor_padding=-0.42),
        plot_height=500,
        plot_width=800,
        toolbar_location=None    )



    # create ColumnDataSource (see https://tinyurl.com/y46stcab)
    source = ColumnDataSource(dict(
        x=cats,
        q25=data["q25"],
        q50=data["q50"],
        q75=data["q75"],
        upper=data["upper"],
        lower=data["lower"],
        order=order,
    ))



    # get palette
    palette=get_colors("categorical", number=2)
    palette.reverse()


    # this iterate the first color of the (reversed) palette every two rows
    # (we want the barplots to be grouped by CoVid-19 status)
    mapper = factor_cmap(field_name='x', palette=palette, factors=order, start=1, end=2)


    # stems
    r_75 = p.segment("upper", "x", "q75", "x", line_color="black", source=source)
    r_25 = p.segment("lower", "x", "q25", "x", line_color="black", source=source)

    # vertical line at 0
    vline = Span(location=0, dimension='height', line_color='black', line_width=2, line_dash="dashed")
    p.renderers.extend([vline])


    # boxes
    r_box_1 = p.hbar("x", left="q25", right="q50", height=0.575, line_color="black", source=source, color=mapper, legend_field="order")
    r_box_2 = p.hbar("x", left="q50", right="q75", height=0.575, line_color="black", source=source, color=mapper)

    # whiskers (almost-0 height rectangles, simpler than segments)
    r_lower = p.rect("lower", "x", 0.05, 0.3, line_color="black", source=source)
    r_upper = p.rect("upper", "x", 0.05, 0.3, line_color="black", source=source)

    _apply_styling(p)

    # NOTE: legend items are reversed because of a bug, see https://github.com/holoviz/holoviews/issues/4799
    p.legend.orientation = "vertical"
    p.legend.location = "center_right"

    TOOLTIPS = [
    ("Lower whisker", "@lower"),
    ("25th quantile", "@q25"),
    ("Median", "@q50"),
    ("75th quantile", "@q75"),
    ("Upper whisker", "@upper")
    ]

    p.add_tools(
        HoverTool(
            renderers=[r_25, r_75, r_box_1, r_box_2, r_upper, r_lower],
            tooltips=TOOLTIPS,
        ))


    show(p)
