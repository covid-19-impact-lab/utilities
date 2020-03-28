from functools import partial

from auxiliary import create_standard_figure
from bokeh.layouts import Column
from bokeh.layouts import Row
from bokeh.models import Select
from bokeh.models import Panel
from bokeh.models import RadioButtonGroup
from bokeh.models.widgets import Div


def create_overview_tab(
    groups,
    topics,
    topic_to_groups,
    group_to_header,
    group_to_plot_type,
    background_variables,
    plot_data,
    group_to_variables,
    variable_to_label,
    variable_to_nice_name,
):
    """Create the overview tab showing the distribution of any group of variables.

    Args:
        groups (list)
        topics (list)
        topic_to_groups (dict)
        group_to_header (dict)
        group_to_plot_type (dict)
        background_variables (list)
        plot_data (dict)
        group_to_variables (dict)
        variable_to_label (dict)
        variable_to_nice_name (dict)

    Returns:
        tab (bokeh.models.Tab)

    """
    title = Div(text="Plot Title", style={"font-size": "200%"})

    # setup the elements
    topic = topics[0]
    topic_selector = Select(title="Topic:", options=topics, value=topic, name="topic_selector")
    subtopics = topic_to_groups[topic]
    subtopic_selector = Select(
        title="Subtopic:", options=subtopics, value=subtopics[0], name="subtopic_selector",
    )
    background_selector = RadioButtonGroup(labels=background_variables, active=0)
    widgets = Row(topic_selector, subtopic_selector, background_selector)

    header = Div(text="Choose a topic and subtopic to start!", name="header")
    canvas = create_standard_figure(title="", name="canvas")

    # # add the callbacks
    topic_callback = partial(
        topic_handler,
        topic_selector=topic_selector,
        topic_to_groups=topic_to_groups,
        subtopic_selector=subtopic_selector,
    )
    topic_selector.on_change("value", topic_callback)
    subtopic_callback = partial(
        subtopic_handler,
        canvas=canvas,
        group_to_plot_type=group_to_plot_type,
        plot_data=plot_data,
        header=header,
        group_to_header=group_to_header,
    )
    subtopic_selector.on_change("value", subtopic_callback)
    background_var_callback = partial(
        background_var_handler, background_variables=background_variables
    )
    background_selector.on_click(background_var_callback)

    col = Column(title, widgets, header, canvas)
    tab = Panel(child=col, title="Overview", name="overview_panel")
    return tab


def topic_handler(attr, old, new, topic_to_groups, topic_selector, subtopic_selector):
    # new_topic = new.item
    print(attr, old, new)
    topic_selector.value = new
    new_groups = topic_to_groups[new]
    subtopic_selector.options = new_groups
    subtopic_selector.value = new_groups[0]


def subtopic_handler(
    attr, old, new, canvas, group_to_header, group_to_plot_type, plot_data, header
):
    header.text = group_to_header[new]
    old_glyph = canvas.select_one({"name": "glyph"})
    if old_glyph is not None:
        canvas.renderers.remove(old_glyph)

    canvas.line(x=[1, 2, 3], y=[4, 5, 6], name="glyph")


def background_var_handler(new, background_variables):
    new_var = background_variables[new]
    print(f"\n\nNew background variable: {new_var}\n\n")
