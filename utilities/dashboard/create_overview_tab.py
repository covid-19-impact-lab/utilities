from functools import partial

from auxiliary import create_standard_figure
from bokeh.layouts import Column
from bokeh.layouts import Row
from bokeh.models import ColumnDataSource
from bokeh.models import Dropdown
from bokeh.models import Panel
from bokeh.models import RadioButtonGroup
from bokeh.models.widgets import Div


def create_overview_tab(
    groups,
    topics,
    topic_to_groups,
    group_to_header,
    group_to_plot_type,
    background_vars,
    plot_data,
    group_to_variables,
    variable_to_label,
):
    """Create the overview tab showing the distribution of any group of variables.

    Args:
        groups (list)
        topics (list)
        topic_to_groups (dict)
        group_to_header (dict)
        group_to_plot_type (dict)
        background_vars (list)
        plot_data (dict)
        group_to_variables (dict)
        variable_to_label (dict)

    Returns:
        tab (bokeh.models.Tab)

    """
    title = Div(text="Plot Title", style={"font-size": "200%"})

    # setup the elements
    topic_selector = Dropdown(label="Topic", menu=topics, name="topic_dd")
    subtopic_selector = Dropdown(
        label="Subtopic", menu=["choose a topic first"], name="group_dd",
    )
    background_selector = RadioButtonGroup(labels=background_vars, active=0)
    widgets = Row(topic_selector, subtopic_selector, background_selector)

    header = Div(text="Choose a topic and subtopic to start!", name="header")
    canvas = create_standard_figure(title="", name="canvas")

    # add the callbacks
    topic_callback = partial(
        topic_handler,
        topic_selector=topic_selector,
        topic_to_groups=topic_to_groups,
        subtopic_selector=subtopic_selector,
    )
    topic_selector.on_click(topic_callback)
    subtopic_callback = partial(
        subtopic_handler,
        canvas=canvas,
        group_to_plot_type=group_to_plot_type,
        plot_data=plot_data,
        header=header,
        group_to_header=group_to_header,
    )
    subtopic_selector.on_click(subtopic_callback)
    background_var_callback = partial(
        background_var_handler, background_vars=background_vars
    )
    background_selector.on_click(background_var_callback)

    col = Column(title, widgets, header, canvas)
    tab = Panel(child=col, title="Overview", name="overview_panel")
    return tab


def topic_handler(new, topic_to_groups, topic_selector, subtopic_selector):
    new_topic = new.item
    topic_selector.label = new_topic
    new_groups = topic_to_groups[new_topic]
    subtopic_selector.menu = new_groups
    subtopic_selector.label = "Choose a subtopic"


def subtopic_handler(
    new, canvas, group_to_header, group_to_plot_type, plot_data, header
):
    new_group = new.item
    header.text = group_to_header[new_group]
    old_glyph = canvas.select_one({"name": "glyph"})
    if old_glyph is not None:
        canvas.renderers.remove(old_glyph)

    source = ColumnDataSource(plot_data[new_group]["all"])
    canvas.line(x="var1", y="var2", name="glyph", source=source)


def background_var_handler(new, background_vars):
    new_var = background_vars[new]
    print(f"\n\nNew background variable: {new_var}\n\n")
