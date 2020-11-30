from bokeh.io import output_notebook
from bokeh.plotting import figure, show
import numpy as np
import pandas as pd
import io
import textwrap
import itertools

from utilities.colors import get_colors, plot_colors
from bokeh.models import Legend, LegendItem
from bokeh.models import DatetimeTickFormatter
from bokeh.models import ColumnDataSource, HoverTool, GlyphRenderer, Line

from pandas.api.types import is_datetime64_any_dtype as is_datetime
from pandas.core.common import flatten


def prepare_data(data, period, variables, bg_vars, nice_names):
    """Prepare the run chart data.

    Args:
        data (pandas.DataFrame): A (relatively) raw dataset on which
            you calculate points that will form the line plot.
        period (string): Name of time period column. The time period
            column needs to be in datetime format.
        variables (list): List of outcome variables.
        bg_vars (list): List of background variables by which we want to
            split the sample.
        nice_names (dict): Dictionary mapping variables to nice names.

    Returns:
        dict: A dictionary that contains all the points for lineplots
            that you potentially need.

    """
    data = _preprocess_data(data, variables, bg_vars, period=[period])

    res = {"data": {}, "selectors": {}, "bounds": {}}

    for var, bg_var in itertools.product(variables, bg_vars):
        # add data to the result dictionary
        if bg_var != "None":
            new = data.groupby([period, bg_var])[var].mean().unstack()
            new = {(var, col, bg_var): new[col].tolist() for col in new.columns}

        else:
            new = {(var, None, None): data.groupby(period)[var].mean().tolist()}

        res["data"].update(new)

        periods = sorted(data[period].unique())
        periods = [pd.to_datetime(period) for period in periods]
        periods = [period.strftime("%B %Y") for period in periods]
        periods[0] = "Pre-CoVid 19"
        res["data"]["period"] = periods

        # add selectors to the result dictionary
        if bg_var != "None":
            bg_vals = data[bg_var].dropna().unique().tolist()
            selectors = [(var, val) for val in bg_vals]
        else:
            selectors = [(var, bg_var)]
        res["selectors"][(var, bg_var)] = selectors

    # add y-axis bounds
    for var in variables:
        ylim_min, ylim_max = _compute_ylim(res["data"], var)
        res["bounds"][(var, "min_outcome")] = ylim_min
        res["bounds"][(var, "max_outcome")] = ylim_max

    # add nice names and labels
    res["nice_names"] = nice_names

    return res


def _compute_ylim(data_dict, variable):
    """Compute limits of y-axis, given outcome variable."""
    l = [v for k, v in data_dict.items() if k[0] == variable]
    ylim_max = np.nanmax(list(flatten(l)))
    ylim_min = np.nanmin(list(flatten(l)))

    padding = 0.1 * (ylim_max - ylim_min)

    return ylim_min - padding, ylim_max + padding


def _preprocess_data(df, outcome_vars, bg_vars, period):
    """Pre-process data (mostly data restrictions and renaming
    problematic categories).

     Args:
        df (pandas.DataFrame): Raw dataset.
        outcome_vars (list): List of outcome variables.
        bg_vars (list): List of background variables by which we want to
            split the sample.
        period (list): List containing name of time period column.

    Returns
        df: Formatted dataset.

    """
    df.reset_index(level="month", inplace=True)
    df = df[df["month"] != "2019-11-01"]
    df = df[(df.age <= 66) & (df.age >= 18) & (df.max_hours_total >= 10)]
    _bg_vars = bg_vars.copy()
    _bg_vars.remove("None")
    df = df[outcome_vars + _bg_vars + period]

    # rename problematic categories
    df["parttime_baseline_covid"] = np.select(
        condlist=[
            df["parttime_baseline_covid"] == 1.0,
            df["parttime_baseline_covid"] == 0.0,
        ],
        choicelist=["parttime", "not_parttime"],
        default=np.nan,
    )

    df["essential_worker_w2"] = np.select(
        condlist=[df["essential_worker_w2"] == 1.0, df["essential_worker_w2"] == 0.0],
        choicelist=["essential_worker", "not_essential_worker"],
        default=np.nan,
    )

    df["self_employed_baseline"] = np.select(
        condlist=[
            df["self_employed_baseline"] == 1.0,
            df["self_employed_baseline"] == 0.0,
        ],
        choicelist=["self_employed", "employee"],
        default=np.nan,
    )

    # Need to do this because of a bug, otherwise nans will be casted as strings:
    # https://github.com/pandas-dev/pandas/issues/25353
    df["parttime_baseline_covid"] = df["parttime_baseline_covid"].replace("nan", np.nan)
    df["self_employed_baseline"] = df["self_employed_baseline"].replace("nan", np.nan)
    df["essential_worker_w2"] = df["essential_worker_w2"].replace("nan", np.nan)

    return df


def setup_plot(
    data_dict,
    selectors,
    bounds,
    variable,
    bg_var,
    nice_names_dict,
):
    """Create the basic plot.

    Args:
        data_dict (dict): Maps a combination of variable and value of
            a background variable to points that form the lineplot.
        selectors (dict): Maps a combination of variable and background
            variable to a list of keys of the data_dict.
        bounds (dict): Maps a combination of variable and bounds value needed to
            adjust the plot's y-axis.
        variable (str): Name of the variable that will be shown intially.
        bg_var (str): Name of the initially selected background variable.
        nice_names_dict (dict): Dictionary mapping variables to nice names.

    Returns:
        bokeh.figure: Basic plot.

    """
    fig = figure(
        frame_width=650,
        frame_height=450,
        x_range=data_dict["period"],
    )
    fig.toolbar_location = None

    for col in data_dict:
        if col != "period":

            cat = f"{col[-1]}_{col[1]}"  # string identifying bg_var and cat
            obs = len(data_dict["period"])

            source = ColumnDataSource(
                dict(
                    x=data_dict["period"],
                    y=data_dict[col],
                    # Is there any better way of doing this?
                    cat=[nice_names_dict.get(cat)] * obs,
                )
            )

            r = fig.line(
                source=source,
                y="y",
                x="x",
                # Need to string each element because
                # 'join' method cannot handle None
                name="-".join(str(i) for i in col),
                line_width=3,
            )

            _add_HoverTool(fig, r, col, nice_names_dict)

    _apply_styling(fig)

    update_plot(fig, selectors, bounds, variable, bg_var, nice_names_dict)

    return fig


def _add_HoverTool(p, renderers, col, nice_names_dict):
    """Add HoverTool to main plot."""
    bg_var_name = col[-1]
    var_name = col[0]

    TOOLTIPS = [
        (nice_names_dict.get(var_name), "@y"),
        ("Date of survey", "@x"),
        (nice_names_dict.get(bg_var_name), "@cat"),
    ]

    kwargs = {"tooltips": TOOLTIPS[:-1]} if col[1] is None else {"tooltips": TOOLTIPS}

    p.add_tools(
        HoverTool(
            renderers=[renderers],
            **kwargs,
        )
    )

    return p


def _apply_styling(p):
    """Declutter main plot."""
    # grid styling
    p.xgrid.grid_line_color = None
    p.ygrid.grid_line_alpha = 0.5
    p.outline_line_color = None

    # axis styling
    # p.xaxis.formatter = DatetimeTickFormatter(months=["%B %Y"])

    p.yaxis.axis_line_color = None
    p.yaxis.axis_label_text_font_style = "normal"
    p.yaxis.axis_label_standoff = 30

    p.axis.major_tick_line_color = None
    p.axis.minor_tick_line_color = None

    # title and labels
    p.title.text_font_size = "15pt"

    p.xaxis.axis_label_text_font_size = "12pt"
    p.yaxis.axis_label_text_font_size = "12pt"

    p.xaxis.major_label_text_font_size = "11pt"
    p.yaxis.major_label_text_font_size = "11pt"

    # borders
    p.min_border_left = 50
    p.min_border_right = 50
    p.min_border_top = 20
    p.min_border_bottom = 50

    return p


def update_plot(plot, selectors, bounds, variable, bg_var, nice_names_dict):
    """Activate and de-activate the lines according to variable and bg_var

    Args:
        plot (bokeh.figure): The plot that will be updated.
        selectors (dict): Maps tuples of (variable, bg_var) to a a list
            of active lines
        bounds (dict): Maps a combination of variable and bounds needed to
            adjust the plot's y-axis.
        variable (str): Name of the selected variable (this corresponds
            to a key in the data dictionary).
        bg_var (str): Name of the background variable. Only used to select
            lines.
        nice_names_dict (dict): Dictionary mapping variables to nice names.

    Returns:
        bokeh.figure

    """
    for line in plot.renderers:
        line.visible = False

    legend_items = []
    color_iterator = _get_color_iterator()

    for sel, color in zip(selectors[(variable, bg_var)], color_iterator):
        name = "-".join(str(i) for i in (*sel, bg_var))
        lines = plot.select({"name": name})

        lines.glyph.line_color = color
        lines.visible = True

        # store legend items
        if bg_var != "None":
            cat = nice_names_dict.get(f"{bg_var}_{sel[1]}")
            item = (cat, lines)
            legend_items.append(item)

    _add_legend(plot, legend_items)

    # when necessary, update y-axis label and y-axis range
    if plot.yaxis.axis_label != nice_names_dict[variable]:

        _update_yaxis(plot, bounds, variable, nice_names_dict)

    return plot


def _get_color_iterator():
    """Get color iterator."""
    palette = get_colors("categorical", number=12)
    color_iterator = itertools.cycle(palette)

    return color_iterator


def _add_legend(p, legend_items):
    """Add legend to plot, given legend items."""
    if p.legend:
        p.legend.visible = False

    legend = Legend(
        items=legend_items,
        location="top_right",
        border_line_color=None,
        label_text_font_size="12pt",
    )

    p.add_layout(legend)
    p.legend.click_policy = "hide"

    return p


def _update_yaxis(p, bounds, variable, nice_names_dict):
    """Update lineplot y-axis according to the outcome variables selected."""
    p.yaxis.axis_label = nice_names_dict[variable]

    ymin = bounds[(variable, "min_outcome")]
    ymax = bounds[(variable, "max_outcome")]

    p.y_range.start = ymin
    p.y_range.end = ymax

    return p
