import pandas as pd
from bokeh.layouts import Column
from bokeh.layouts import Row
from bokeh.models import ColumnDataSource
from bokeh.models import Div
from bokeh.models import FactorRange
from bokeh.models import HoverTool
from bokeh.plotting import figure
from pandas.api.types import is_bool_dtype
from pandas.api.types import is_categorical_dtype
from pandas.api.types import is_integer_dtype

from utilities.colors import get_colors


def prepare_data(data, variables, bg_vars, nice_names, labels):
    """Calculate shares of a categorical variable, conditional on bg_vars.

    This data can be used for histograms, stacked barplots, etc.

    Args:
        data (pd.DataFrame): The dataset that contains variable and background_variables.
        variables (list): Names of apd.Categorical variables of which the shares are calculated.
        bg_vars (list): pd.Categorical variables with background characteristics.
        nice_names (dict): Maps variables to nice names
        labels (dict): Maps variables to labels

    Returns:
        dict: Dictionary containing shares and selectors.
            The shares are a dictionary that corresponds to a bokeh
            ColumnDataSource with the following columns:
            - label: (variable, "{bg_var}: {bg_value})"
            - One column per value the variable can take
            The selectors are a dictionary  where the keys are background
            variables and the values are lists of labels.

    """
    variables = variables if isinstance(variables, list) else [variables]
    _check_variables_have_same_dtype(data, variables)
    data = _convert_variables_to_categorical(data, variables)

    bg_vars = [] if bg_vars is None else bg_vars

    to_concat = []

    colors = get_colors("categorical", len(variables))
    for c, var in zip(colors, variables):
        # unconditional shares. Repeated. Once with empty label once with label=Nothing
        vc = data[var].value_counts(normalize=True)
        df = vc.to_frame().T

        df.columns = df.columns.tolist()
        df.reset_index(drop=True, inplace=True)
        df["variable"] = nice_names[var]
        df["Question"] = labels[var]
        df["label"] = ""
        df["color"] = c
        to_concat.append(df)
        # conditional shares
        for bg_var in bg_vars:
            df = (
                data.groupby(bg_var)[var]
                .value_counts(normalize=True)
                .unstack()
                .reset_index()
            )
            df.rename(columns={bg_var: "label"}, inplace=True)
            df["variable"] = nice_names[var]
            df["Question"] = labels[var]
            df["label"] = df["label"].astype(str)
            df["color"] = c
            to_concat.append(df)

    share_data = pd.concat(to_concat).fillna(0)

    share_dict = {}
    share_dict["label"] = list(zip(share_data["variable"], share_data["label"]))
    share_dict["Question"] = share_data["Question"].tolist()
    share_dict["color"] = share_data["color"].tolist()

    order = data[variables[0]].dtype.categories.tolist()

    for var in order:
        share_dict[var] = share_data[var].tolist()

    selectors = {}
    selectors["Nothing"] = tuple([(nice_names[var], "") for var in variables][::-1])
    for bg_var in bg_vars:
        selected = pd.Series(data[bg_var].unique()).dropna().tolist()
        selectors[nice_names[bg_var]] = tuple(
            [tuple(lab) for lab in share_dict["label"] if lab[1] in selected][::-1]
        )

    return {"shares": share_dict, "selectors": selectors}


def setup_plot(shares, selectors, bg_var="Nothing"):
    """Create a stacked horizontal barplot for a categorical variable.

    Args:
        shares (list):
    """
    cds = ColumnDataSource(shares)
    categories = [cat for cat in shares if cat not in ("label", "Question", "color")]
    colors = get_colors("ordered", len(categories))

    p = setup_basic_plot(
        cds=cds,
        categories=categories,
        selectors=selectors,
        bg_var=bg_var,
        colors=colors,
    )

    p = specific_styling(p)
    p = unclutter(p)

    layout = make_layout(p, selectors, bg_var, categories, colors)

    return layout


def condition_plot(plot, selectors, bg_var, n_categories):
    legend, p = plot.children
    legend_width = get_legend_width(p.plot_width, selectors, bg_var, n_categories)
    for entry in legend.children:
        entry.width = legend_width
    p.y_range.factors = selectors[bg_var]
    p.plot_height = get_plot_height(selectors, bg_var)
    if bg_var == "Nothing":
        p.yaxis.group_label_orientation = "horizontal"
        p.y_range.group_padding = 0.5
    else:
        p.yaxis.group_label_orientation = "vertical"
        p.y_range.group_padding = 1.2


def setup_basic_plot(cds, categories, selectors, bg_var, colors):
    f_range = FactorRange(*selectors[bg_var], factor_padding=0.5)
    p = figure(
        y_range=f_range,
        plot_height=get_plot_height(selectors, bg_var),
        toolbar_location=None,
    )

    renderers = p.hbar_stack(
        stackers=categories, y="label", height=0.6, source=cds, color=colors
    )

    if not isinstance(renderers, list):
        renderers = [renderers]

    tooltips = [("Question", "@Question"), ("Reply", "$name"), ("Share", "@$name{%0f}")]
    hover = HoverTool(renderers=renderers, tooltips=tooltips)
    p.tools.append(hover)

    return p


def specific_styling(p):
    #
    p.y_range.range_padding = 0.0
    p.y_range.factor_padding = -0.2
    p.y_range.group_padding = 0.5
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
    return p


def unclutter(p, remove_grid=True, remove_ticks=True):
    if remove_grid:
        p.xgrid.visible = False
        p.ygrid.visible = False

    if remove_ticks:
        p.axis.minor_tick_line_color = None
        p.axis.major_tick_line_color = None
    return p


def make_layout(plot, selectors, bg_var, categories, colors):
    legend_entries = []
    style_dict = {"text-align": "center", "vertical-align": "middle"}
    legend_width = get_legend_width(plot.plot_width, selectors, bg_var, len(categories))
    for x, c in zip(categories, colors):
        style_dict["color"] = c
        label_entry = Div(text=as_html(x), style=style_dict, width=legend_width)
        legend_entries.append(label_entry)

    legend_text = Row(*legend_entries, align="end", margin=(0, 25, 0, 0))
    layout = Column(legend_text, plot)
    return layout


def as_html(text):
    return f"<b> {text} <b>"


def get_legend_width(plot_width, selectors, bg_var, n_categories):
    if bg_var == "Nothing":
        longest = max([len(lab[0]) for lab in selectors[bg_var]])
        combined_width = plot_width * 0.84 - longest * 5.5
    else:
        longest = max([len(lab[1]) for lab in selectors[bg_var]])
        combined_width = plot_width * 0.84 - longest * 5.2 - 20

    return int(combined_width / n_categories)


def get_plot_height(selectors, bg_var):
    n_vars = len(selectors["Nothing"])
    n_bars = len(selectors[bg_var])
    if bg_var == "Nothing":
        height = int(15 + 41 * n_vars)
    else:
        height = int(15 + 25 * n_vars + 22 * n_bars)
    return height


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


def _convert_variables_to_categorical(data, variables):
    """Convert variables to Categorical dtype with string labels.

    This needs much more work

    """
    data = data.copy()
    for var in variables:
        if is_bool_dtype(data[var]):
            data[var] = pd.Categorical(
                data[var], categories=[False, True], ordered=True
            )
            data[var] = data[var].cat.rename_categories({False: "False", True: "True"})
        elif is_integer_dtype(data[var]):
            # data[var] = pd.Categorical(data[var], categories=sorted(data[var].unique()), ordered=True)
            pass
        elif is_categorical_dtype(data[var]):
            cat_index = data[var].dtype.categories
            if is_integer_dtype(cat_index):
                to_str = {cat: str(cat) for cat in cat_index}
                data[var] = data[var].cat.rename_categories(to_str)
        else:
            raise ValueError(f"{var}: {data[var].dtype} is not supported.")

    return data
