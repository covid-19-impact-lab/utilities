from functools import partial

from bokeh.layouts import Column
from bokeh.layouts import Row
from bokeh.models import Panel
from bokeh.models import Select
from bokeh.models.widgets import Div

from utilities.dashboard import barplot
from utilities.dashboard import distplot
from utilities.dashboard import no_plot
from utilities.dashboard import stacked_barplot

plot_modules = {
    "stacked_barplot": stacked_barplot,
    "barplot": barplot,
    "no_plot": no_plot,
    "distplot": distplot,
}

from utilities.dashboard.stacked_barplot import as_html


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
    # start values
    topic = topics[0]
    subtopics = topic_to_groups[topic]
    group = subtopics[0]
    plot_type = group_to_plot_type[group]

    topic_selector, subtopic_selector, background_selector = create_selection_menus(
        topics=topics,
        subtopics=subtopics,
        topic=topic,
        group=group,
        background_variables=background_variables,
    )
    title_style = {"font-size": "200%", "color": "#808080"}
    title = Div(
        text=as_html(group), style=title_style, width=600, margin=(25, 0, 25, 0)
    )

    header_style = {"color": "#808080"}
    header = Div(
        text=group_to_header[group],
        name="header",
        margin=(0, 0, 25, 0),
        style=header_style,
    )
    selection_menues = Row(topic_selector, subtopic_selector, background_selector)
    setup_plot = getattr(plot_modules[plot_type], "setup_plot")
    plot = setup_plot(**plot_data[group])

    bottom_txt = \
        "Hover over the graph for more information. You can see how different groups " + \
        "responded by choosing something in the Condition On menu. " + \
        "Or you can click a different topic or subtopic to explore different questions."
    bottom_info = Div(
        text=bottom_txt,
        name="bottom",
        margin=(25, 0, 25, 0),
        style=header_style,
        )
    page = Column(selection_menues, title, header, plot, bottom_info)

    topic_callback = partial(
        set_topic,
        topic_selector=topic_selector,
        topic_to_groups=topic_to_groups,
        subtopic_selector=subtopic_selector,
    )
    topic_selector.on_change("value", topic_callback)

    subtopic_callback = partial(
        set_subtopic,
        header=header,
        group_to_header=group_to_header,
        plot_data=plot_data,
        page=page,
        background_selector=background_selector,
        group_to_plot_type=group_to_plot_type,
        title=title,
    )
    subtopic_selector.on_change("value", subtopic_callback)

    background_var_callback = partial(
        condition_on_background_var,
        subtopic_selector=subtopic_selector,
        plot_data=plot_data,
        page=page,
        group_to_plot_type=group_to_plot_type,
    )
    background_selector.on_change("value", background_var_callback)

    tab = Panel(child=page, title="Variables", name="overview_panel")

    return tab


def create_selection_menus(topics, subtopics, topic, group, background_variables):
    topic_selector = Select(
        title="Topic:", options=topics, value=topic, name="topic_selector", width=180
    )
    subtopic_selector = Select(
        title="Subtopic:", options=subtopics, value=group, name="subtopic_selector",
    )
    background_selector = Select(
        title="Split By:",
        options=["Nothing"] + background_variables,
        value="Nothing",
        width=120,
    )
    return topic_selector, subtopic_selector, background_selector


def set_topic(attr, old, new, topic_to_groups, topic_selector, subtopic_selector):
    """Adjust subtopic select menu according to new topic."""
    topic_selector.value = new
    new_groups = topic_to_groups[new]
    subtopic_selector.options = new_groups
    subtopic_selector.value = new_groups[0]


def set_subtopic(
    attr,
    old,
    new,
    header,
    group_to_header,
    group_to_plot_type,
    plot_data,
    page,
    background_selector,
    title,
):
    """Adjust title, header and plot to new subtopic."""
    title.text = as_html(new.title())
    header.text = group_to_header[new]
    plot_type = group_to_plot_type[new]
    setup_plot = getattr(plot_modules[plot_type], "setup_plot")
    new_p = setup_plot(**plot_data[new])

    page.children[-2] = new_p
    background_selector.value = "Nothing"


def condition_on_background_var(
    attr, old, new, subtopic_selector, plot_data, page, group_to_plot_type
):
    plot, bottom = page.children[-2:]
    page.children = page.children[:-2]
    group = subtopic_selector.value
    plot_type = group_to_plot_type[group]
    condition_plot = getattr(plot_modules[plot_type], "condition_plot")

    condition_plot(
        plot, **plot_data[group], bg_var=new,
    )
    page.children += [plot, bottom]
