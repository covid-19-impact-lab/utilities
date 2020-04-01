"""Create a tab where the user can choose variables for a dot plot.

Variables are:
- x
- y
- group_by_var
- hue color

"""

from bokeh.models import Panel
from bokeh.models import Select
from bokeh.models.widgets import Div
from bokeh.layouts import Column
from bokeh.layouts import Row
from utilities.dashboard.stacked_barplot import as_html


def create_corr_tab(data_dict):
    title_style = {"font-size": "200%", "color": "#808080"}
    title = Div(
        text=as_html("Some Title"), style=title_style, width=600, margin=(25, 0, 25, 0)
    )

    selection_menus = _create_selection_menus(data_dict.keys())
    selection_menus = _add_callbacks(selection_menus, data_dict)

    page = Column(title, Row(*selection_menus))
    tab = Panel(child=page, title="Correlation Tool")
    return tab


def _create_selection_menus(tuples):
    x_vars = [item[0] for item in tuples]
    y_vars = [item[1] for item in tuples]
    groupby_vars = [item[2] for item in tuples]
    color_vars = [item[3] for item in tuples]

    x_selector = Select(
        title="On the Horizontal Axis:",
        options=list(set(x_vars)),
        value=x_vars[0],
        name="x_selector",
        width=150,
    )
    y_selector = Select(
        title="On the Vertical Axis:",
        options=list(set(y_vars)),
        value=y_vars[0],
        name="y_selector",
        width=150,
    )
    groupby_selector = Select(
        title="Average Over:",
        options=list(set(groupby_vars)),
        value=groupby_vars[0],
        name="groupby_selector",
        width=150,
    )
    color_selector = Select(
        title="Color By:",
        options=list(set(color_vars)),
        value=color_vars[0],
        name="color_selector",
        width=150,
    )

    return [x_selector, y_selector, groupby_selector, color_selector]


def _add_callbacks(selection_menus, data_dict):
    x_selector, y_selector, groupby_selector, color_selector = selection_menus
    return [x_selector, y_selector, groupby_selector, color_selector]
