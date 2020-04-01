from bokeh.models import ColumnDataSource
from bokeh.models import FactorRange
from bokeh.models import HoverTool
from bokeh.plotting import figure
from pandas.api.types import is_bool_dtype

from utilities.dashboard.stacked_barplot import get_plot_height
from utilities.dashboard.stacked_barplot import prepare_data as prepare_stacked_data
from utilities.dashboard.stacked_barplot import specific_styling
from utilities.dashboard.stacked_barplot import unclutter


def prepare_data(data, variables, bg_vars, nice_names, labels):
    problems = [var for var in variables if not is_bool_dtype(data[var])]
    assert (
        len(problems) == 0
    ), "The following variables don't have boolean dtype:\n\t" + "\n\t".join(problems)
    plot_data = prepare_stacked_data(data, variables, bg_vars, nice_names, labels)
    del plot_data["shares"]["False"]
    return plot_data


def setup_plot(shares, selectors, bg_var="Nothing"):
    """Create a horizontal barplot for a categorical variable.

    Args:
        shares (list):
    """
    cds = ColumnDataSource(shares)
    categories = [cat for cat in shares if cat not in ("label", "Question", "color")]

    p = setup_basic_plot(
        cds=cds, categories=categories, selectors=selectors, bg_var=bg_var
    )

    p = specific_styling(p)
    p = unclutter(p)

    return p


def setup_basic_plot(cds, categories, selectors, bg_var):
    f_range = FactorRange(*selectors[bg_var], factor_padding=0.5)
    p = figure(
        y_range=f_range,
        plot_height=get_plot_height(selectors, bg_var),
        toolbar_location=None,
        x_range=(-0.05, 1.05),
    )

    renderers = p.hbar_stack(
        stackers=categories, y="label", height=0.6, source=cds, color="color"
    )

    if not isinstance(renderers, list):
        renderers = [renderers]

    tooltips = [("Question", "@Question"), ("Reply", "$name"), ("Share", "@$name{%0f}")]
    hover = HoverTool(renderers=renderers, tooltips=tooltips)
    p.tools.append(hover)

    return p


def condition_plot(plot, shares, selectors, bg_var):

    plot.y_range.factors = selectors[bg_var]
    plot.plot_height = get_plot_height(selectors, bg_var)
    if bg_var == "Nothing":
        plot.yaxis.group_label_orientation = "horizontal"
        plot.yaxis.separator_line_alpha = 0
        plot.xaxis.bounds = (-0.05, 1.05)
    else:
        plot.yaxis.group_label_orientation = "vertical"
        plot.yaxis.separator_line_alpha = 1
        plot.xaxis.bounds = (-0.05, 1.05)
