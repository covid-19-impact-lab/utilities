from bokeh.models import Column
from bokeh.models import ColumnDataSource
from bokeh.models import Div
from bokeh.models import Row
from pandas.api.types import is_bool_dtype

from utilities.colors import get_colors
from utilities.dashboard.stacked_barplot import as_html
from utilities.dashboard.stacked_barplot import condition_plot
from utilities.dashboard.stacked_barplot import get_plot_height
from utilities.dashboard.stacked_barplot import prepare_data as prepare_stacked_data
from utilities.dashboard.stacked_barplot import setup_basic_plot
from utilities.dashboard.stacked_barplot import specific_styling
from utilities.dashboard.stacked_barplot import unclutter


def prepare_data(data, variables, bg_vars, nice_names, labels):
    for var in variables:
        assert is_bool_dtype(data[var])

    plot_data = prepare_stacked_data(data, variables, bg_vars, nice_names, labels)
    del plot_data["shares"]["False"]
    return plot_data


def setup_plot(shares, selectors, title, bg_var="all"):
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

    layout = make_layout(p, selectors, bg_var, categories, colors, title)

    return layout


def condition_plot(layout, selectors, bg_var, n_categories):
    title, plot = layout.children
    plot.y_range.factors = selectors[bg_var]
    plot.plot_height = get_plot_height(selectors, bg_var)
    if bg_var == "all":
        plot.yaxis.group_label_orientation = "horizontal"
    else:
        plot.yaxis.group_label_orientation = "vertical"


def make_layout(plot, selectors, bg_var, categories, colors, title):

    title_text = Div(
        text=as_html(title), style={"font-size": "200%", "color": "#696969"}, width=500,
    )

    layout = Column(title_text, plot)
    return layout
