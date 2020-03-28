from functools import partial

from bokeh.layouts import Column
from bokeh.layouts import Row
from bokeh.models import Select
from bokeh.models import Panel
from bokeh.models.widgets import Div
from bokeh.plotting import figure

from utilities.dashboard.stacked_barplot import setup_plot


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
    topic = topics[0]
    topic_selector = Select(title="Topic:", options=topics, value=topic, name="topic_selector")
    subtopics = topic_to_groups[topic]
    group = subtopics[0]
    subtopic_selector = Select(
        title="Subtopic:", options=subtopics, value=group, name="subtopic_selector",
    )
    background_selector = Select(
        title="Condition On:",
        options=background_variables,
        value="all"
    )
    widgets = Row(topic_selector, subtopic_selector, background_selector)

    header = Div(text=group_to_header[group], name="header")

    # import pdb; pdb.set_trace()

    lower_part = setup_plot(**plot_data[group], title=group)
    lower_part.children[-1] = figure()
    plot = lower_part.children[-1]

    # add the callbacks
    topic_callback = partial(
        topic_handler,
        topic_selector=topic_selector,
        topic_to_groups=topic_to_groups,
        subtopic_selector=subtopic_selector,
    )
    topic_selector.on_change("value", topic_callback)
    subtopic_callback = partial(
        subtopic_handler,
        plot=plot,
        group_to_plot_type=group_to_plot_type,
        plot_data=plot_data,
        header=header,
        group_to_header=group_to_header,
    )
    subtopic_selector.on_change("value", subtopic_callback)
    background_var_callback = partial(
        background_var_handler, background_variables=background_variables
    )
    background_selector.on_change("value", background_var_callback)

    col = Column(widgets, header, lower_part)
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
    attr, old, new, plot, group_to_header, group_to_plot_type, plot_data, header
):
    header.text = group_to_header[new]
    old_glyph = plot.select_one({"name": "glyph"})
    if old_glyph is not None:
        plot.renderers.remove(old_glyph)

    plot.line(x=[1, 2, 3], y=[4, 5, 6], name="glyph")


def background_var_handler(attr, old, new, background_variables):
    print(f"\n\nNew background variable: {new}\n\n")
