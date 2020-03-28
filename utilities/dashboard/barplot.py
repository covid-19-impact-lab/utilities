from bokeh.models import ColumnDataSource
from pandas.api.types import is_bool_dtype

from utilities.colors import get_colors
from utilities.dashboard.stacked_barplot import prepare_data as prepare_stacked_data
from utilities.dashboard.stacked_barplot import setup_basic_plot
from utilities.dashboard.stacked_barplot import specific_styling
from utilities.dashboard.stacked_barplot import unclutter
from utilities.dashboard.stacked_barplot import get_plot_height


def prepare_data(data, variables, bg_vars, nice_names, labels):
    problems = [var for var in variables if not is_bool_dtype(var)]
    assert (
        len(problems) == 0
    ), "The following variables don't have boolean dtype:\n\t" + "\n\t".join(problems)

    plot_data = prepare_stacked_data(data, variables, bg_vars, nice_names, labels)
    del plot_data["shares"]["False"]
    return plot_data


def setup_plot(shares, selectors, bg_var="all"):
    """Create a horizontal barplot for a categorical variable.

    Args:
        shares (list):
    """
    cds = ColumnDataSource(shares)
    categories = [cat for cat in shares if cat not in ("label", "Question")]
    colors = colors = get_colors("ordered", len(categories))

    p = setup_basic_plot(
        cds=cds,
        categories=categories,
        selectors=selectors,
        bg_var=bg_var,
        colors=colors,
    )

    p = specific_styling(p)
    p = unclutter(p)

    return p


def condition_plot(plot, selectors, bg_var, n_categories):
    plot.y_range.factors = selectors[bg_var]
    plot.plot_height = get_plot_height(selectors, bg_var)
    if bg_var == "all":
        plot.yaxis.group_label_orientation = "horizontal"
    else:
        plot.yaxis.group_label_orientation = "vertical"
