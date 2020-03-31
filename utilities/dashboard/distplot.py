import numpy as np
import pandas as pd
from bokeh.models import FactorRange
from bokeh.models import HoverTool
from bokeh.plotting import figure
from pandas.api.types import is_categorical_dtype
from pandas.api.types import is_integer_dtype
from pandas.api.types import is_numeric_dtype
from scipy.stats.kde import gaussian_kde

from utilities.colors import get_colors


def prepare_data(data, variables, bg_vars, nice_names, labels):
    """Create data for a distplot.

    Args:
        data (pd.DataFrame): The dataset that contains variable and background_variables.
        variables (list): List of variables whose distributions are visualized. Can be
            categorical or numerical. If the dtype is categorical or integer, the individual
            values of the distribution are plotted. Else, a kernel density estimate of the
            distribution is plotted. If categorical, all variables need to have the same
            Categories.
        bg_vars (list): pd.Categorical variables with background characteristics.
        nice_names (dict): Maps variables to nice_names
        labels (dict): Maps variables to labels


    Returns:
        dict: Dictionary containing the kde data. The keys are 'x' as well
            as (variable, bg_value) for all such combinations.
            The values for x are gridpoints. The values for all other keys
            are kerne density estimates.

    """
    data = data.copy()
    variables = [variables] if not isinstance(variables, list) else variables
    bg_vars = [] if bg_vars is None else bg_vars

    _check_variables_have_same_dtype(data, variables)
    for var in bg_vars:
        assert is_categorical_dtype(data[var]), "bg_vars have to be categorical."

    if is_categorical_dtype(data[variables[0]]):
        vartype = "categorical"
    elif is_integer_dtype(data[variables[0]]):
        vartype = "integer"
    elif is_numeric_dtype:
        vartype = "float"
    else:
        raise ValueError("Variables must be categorical, integer or float")

    if vartype == "categorical":
        x_min_label = data[variables[0]].cat.categories[0]
        x_max_label = data[variables[0]].cat.categories[-1]

    for var in variables:
        data[var] = _to_float(data[var])

    # the non kde distribution is extended to hit zero outside of
    # the support of the data.
    x_min = data[variables].min().min()
    x_max = data[variables].max().max()

    x_range = x_max - x_min

    ext_x_min = x_min - 0.05 * x_range
    ext_x_max = x_max + 0.05 * x_range
    ext_x_range = ext_x_max - ext_x_min

    if vartype == "float":
        x = np.linspace(ext_x_min, ext_x_max, 100).tolist()
    else:
        x = [ext_x_min] + np.arange(x_min, x_max + 1).tolist() + [ext_x_max]

    x_info = {
        "x_min": x_min,
        "x_max": x_max,
        "ext_x_min": ext_x_min,
        "ext_ex_max": ext_x_max,
        "x_type": vartype,
    }
    if vartype == "categorical":
        x_info["x_min_label"] = x_min_label
        x_info["x_max_label"] = x_max_label

    raw_dist_data = {"x": x}

    if vartype == "float":
        for var in variables:
            raw_dist_data[(nice_names[var], "")] = gaussian_kde(data[var].dropna())(x).tolist()
            for bg_var in bg_vars:
                bg_values = data[bg_var].cat.categories
                for val in bg_values:
                    sr = data[data[bg_var] == val][var].dropna()
                    raw_dist_data[(nice_names[var], val)] = gaussian_kde(sr)(x)
    else:
        to_concat = [pd.DataFrame(index=x)]
        for var in variables:
            to_concat.append(
                data[var]
                .value_counts(normalize=True)
                .to_frame(name=(nice_names[var], ""))
            )
            for bg_var in bg_vars:
                new_df = (
                    data.groupby(bg_var)[var].value_counts(normalize=True).unstack().T
                )
                new_df.columns = [
                    (nice_names[var], old_col) for old_col in new_df.columns
                ]
                to_concat.append(new_df)

        df = pd.concat(to_concat, axis=1).fillna(0)
        for col in df.columns:
            raw_dist_data[col] = df[col].tolist()

    nice_name_to_label = {}
    for var in variables:
        nice_name_to_label[nice_names[var]] = labels[var]

    selectors = {}
    selectors["Nothing"] = tuple([(nice_names[var], "") for var in variables][::-1])
    for bg_var in bg_vars:
        selected = data[bg_var].cat.categories.tolist()

        selectors[nice_names[bg_var]] = [
            col for col in df.columns if col[1] in selected
        ][::-1]

    dist_data = _prepare_dist_data_for_bokeh_patch(raw_dist_data, selectors)

    res = {
        "dist_data": dist_data,
        "selectors": selectors,
        "questions": nice_name_to_label,
        "x_info": x_info,
    }

    return res


def _prepare_dist_data_for_bokeh_patch(raw_dist_data, selectors):
    dist_data = {}
    for bg_var, selector in selectors.items():
        max_entry = max([max(raw_dist_data[sel]) for sel in selector])
        scaling_factor = 0.8 / max_entry
        for sel in selector:
            scaled = (np.array(raw_dist_data[sel]) * scaling_factor).tolist()
            dist_data[sel] = [(sel[0], sel[1], d) for d in scaled]

    dist_data["x"] = raw_dist_data["x"]
    return dist_data


def _to_float(sr):
    if is_categorical_dtype(sr):
        assert sr.cat.ordered, "Only ordered categoricals can be used in distplots."
        res = sr.cat.codes.replace({-1: np.nan}).astype(float)
    else:
        res = sr.astype(float)
    return res


def _check_variables_have_same_dtype(data, variables):
    """Check that variables have the same dtype.

    For categorical variable this means that they have the
    same categories.

    Args:
        data (pd.DataFrame):
        variables (list):

    """
    first_var = variables[0]
    sr = data[first_var]

    dtype = data[variables[0]].dtype
    for var in variables:
        if data[var].dtype != dtype:
            raise ValueError("Variables have to have the same dtype.")


def setup_plot(dist_data, selectors, questions, x_info, bg_var="Nothing"):
    colors = get_colors("categorical", len(questions))
    var_to_color = {var: c for var, c in zip(questions, colors)}

    categories = [k for k in dist_data if k != "x"]
    p = figure(
        y_range=FactorRange(*categories),
        plot_height=_get_plot_height(selectors, bg_var),
        toolbar_location=None,
    )

    for cat in categories:
        var = cat[0]
        p.line(dist_data["x"], dist_data[cat], color=var_to_color[var], line_width=3)
        tooltips = [("Question", questions[var])]
        renderer = p.patches(
            [dist_data["x"]], [dist_data[cat]], color=var_to_color[var], alpha=0.15
        )
        hover = HoverTool(tooltips=tooltips, renderers=[renderer])
        p.tools.append(hover)

    _specific_styling(p, x_info)
    _unclutter(p)

    p.y_range.factors = selectors[bg_var]

    return p


def _specific_styling(p, x_info):
    # make the range nicer
    p.y_range.range_padding_units = "absolute"
    p.y_range.range_padding = 0.5
    p.y_range.factor_padding = 0.0
    p.y_range.group_padding = 0.3
    p.ygrid.grid_line_color = None

    p.outline_line_color = None

    # spacing between labels and plot; must be int
    p.yaxis.major_tick_in = 0
    # the following reduces the space between labels and bars
    p.yaxis.major_tick_out = -20

    # make the outer labels horizontal.
    p.yaxis.group_label_orientation = "horizontal"
    p.yaxis.major_label_text_align = "left"

    # change axis lines
    p.yaxis.visible = True
    p.yaxis.axis_line_alpha = 0.0
    p.xaxis.axis_line_alpha = 0.2
    p.yaxis.axis_line_width = 1.5
    p.xaxis.axis_line_width = 1.5

    if x_info["x_type"] == "categorical":
        p.xaxis.ticker = [int(x_info["x_min"]), int(x_info["x_max"])]
        p.xaxis.major_label_overrides = {
            int(x_info["x_min"]): x_info["x_min_label"],
            int(x_info["x_max"]): x_info["x_max_label"],
        }

    # remove separator line between groups
    p.yaxis.separator_line_alpha = 0

    return p


def _unclutter(p, remove_grid=True, remove_ticks=True):
    if remove_grid:
        p.xgrid.visible = False
        p.ygrid.visible = False

    if remove_ticks:
        p.axis.minor_tick_line_color = None
        p.axis.major_tick_line_color = None
    return p


def _get_plot_height(selectors, bg_var):
    n_vars = len(selectors["Nothing"])
    n_bars = len(selectors[bg_var])
    if bg_var == "Nothing":
        height = int(15 + n_vars * 50)
    else:
        height = int(15 + n_vars * 10 + n_bars * 40)

    return height


def condition_plot(plot, dist_data, selectors, questions, x_info, bg_var):
    p = plot
    p.y_range.factors = selectors[bg_var]
    p.plot_height = _get_plot_height(selectors, bg_var)
    if bg_var == "Nothing":
        p.yaxis.group_label_orientation = "horizontal"
        p.y_range.group_padding = 0.3
        p.yaxis.separator_line_alpha = 0
    else:
        p.yaxis.group_label_orientation = "vertical"
        p.y_range.group_padding = 0.8
        p.yaxis.separator_line_alpha = 1
