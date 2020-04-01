"""Create a tab where the user can choose variables for a dot plot.

Variables are:
- x
- y
- group_by_var
- hue color

"""

from functools import partial
from bokeh.models import Panel
from bokeh.models import Select
from bokeh.models.widgets import Div
from bokeh.layouts import Column
from bokeh.layouts import Row
from bokeh.plotting import figure
from utilities.dashboard.stacked_barplot import as_html


def create_corr_tab(data_dict):
    """Create the correlation tab showing the aggregated movement between variables.

    Args:
        data_dict (dict): dict with tuples as keys. Each key identifies a combination of
            x variable, y variable, groupby variable and color. The values are the
            data arrays necessary for creating the correlation plot.

    """
    title_style = {"font-size": "200%", "color": "#808080"}
    title = Div(
        text=as_html("Some Title"), style=title_style, width=600, margin=(25, 0, 25, 0)
    )
    selection_menus = _create_selection_menus(data_dict.keys())
    start_combination = tuple(menu.value for menu in selection_menus)
    plot = _setup_plot(data=data_dict[start_combination])
    page = Column(title, Row(*selection_menus), plot)

    _add_callbacks(selection_menus, data_dict, page)
    tab = Panel(child=page, title="Correlation Tool")
    return tab


def _create_selection_menus(tuples):
    """Create x_selector, y_selector, groupby_selector and color_selector."""
    titles = [
        "On the Horizontal Axis",
        "On the Vertical Axis",
        "Average Over",
        "Color By:",
    ]
    selectors = []
    for i in range(4):
        values = list(set(item[i] for item in tuples))
        sel = Select(title=titles[i], options=values, value=values[0], width=150)
        selectors.append(sel)

    return selectors


def _setup_plot(data):
    """Stand in function for the actual plot."""
    fig = figure()
    fig.line(source=data, x="xs", y="ys")
    return fig


def _add_callbacks(selection_menus, data_dict, page):
    """Add a callback getting the updated key and update the plot."""
    for i, menu in enumerate(selection_menus):
        partialed_update_plot = partial(
            _update_plot, data_dict=data_dict, page=page, index=i, menus=selection_menus
        )
        menu.on_change("value", partialed_update_plot)


def _update_plot(attr, old, new, data_dict, page, index, menus):
    """Create the new key and update the plot"""
    new_key = tuple(menu.value for menu in menus)
    new_data = data_dict[tuple(new_key)]
    new_p = _setup_plot(new_data)
    page.children[-1] = new_p
