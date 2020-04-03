from functools import partial

from bokeh.layouts import Column
from bokeh.layouts import Row
from bokeh.models import Panel
from bokeh.models import Select
from bokeh.models.widgets import Div

from utilities.dashboard.app import barplot
from utilities.dashboard.app import distplot
from utilities.dashboard.app import stacked_barplot

plot_modules = {
    "stacked_barplot": stacked_barplot,
    "barplot": barplot,
    "distplot": distplot,
}

header_style = {"color": "#808080"}


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
    group_to_caption,
    bottom_text,
    bg_info_text,
    nice_name_to_variable,
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
        nice_name_to_variable (dict)
        group_to_caption (dict)
        bottom_text (str)
        bg_info_text (str)

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
        text=_as_html(group), style=title_style, width=600, margin=(25, 0, 25, 0)
    )

    header = Div(
        text=group_to_header[group],
        name="header",
        margin=(0, 0, 25, 0),
        style=header_style,
    )
    selection_menues = Row(topic_selector, subtopic_selector, background_selector)
    setup_plot = getattr(plot_modules[plot_type], "setup_plot")
    plot = setup_plot(**plot_data[group])

    bg_info = Div(text=bg_info_text, name="bg_info", margin=(10, 0, 25, 0), style=header_style,)

    bottom_info = Div(
        text=bottom_text, name="bottom", margin=(10, 0, 25, 0), style=header_style,
    )

    caption = _create_caption(group_to_caption=group_to_caption, group=group, group_to_variables=group_to_variables,)
    page = Column(selection_menues, title, header, plot, caption, bg_info, bottom_info)

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
        group_to_caption=group_to_caption,
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
        variable_to_label=variable_to_label,
        group_to_variables=group_to_variables,
        nice_name_to_variable=nice_name_to_variable,
        bg_info_text=bg_info_text
    )
    background_selector.on_change("value", background_var_callback)

    # tab = Panel(child=page, title="Variables", name="overview_panel")
    return page


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


def _create_caption(group_to_caption, group, group_to_variables):
    return Div(
        text=group_to_caption[group], name="bottom", margin=(25, 0, 25, 0),
        style=header_style)


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
    group_to_caption,
    group_to_plot_type,
    plot_data,
    page,
    background_selector,
    title,
):
    """Adjust title, header and plot to new subtopic."""
    title.text = _as_html(new.title())
    header.text = group_to_header[new]
    plot_type = group_to_plot_type[new]
    setup_plot = getattr(plot_modules[plot_type], "setup_plot")
    new_p = setup_plot(**plot_data[new])

    page.children[-4] = new_p
    page.children[-3].text = group_to_caption[new]
    background_selector.value = "Nothing"


def condition_on_background_var(
    attr, old, new, subtopic_selector, plot_data, page, group_to_plot_type,
    variable_to_label, group_to_variables, nice_name_to_variable, bg_info_text,
):
    plot, caption, bg_info, bottom = page.children[-4:]
    page.children = page.children[:-4]
    group = subtopic_selector.value
    plot_type = group_to_plot_type[group]
    condition_plot = getattr(plot_modules[plot_type], "condition_plot")

    condition_plot(
        plot, **plot_data[group], bg_var=new,
    )

    if new == "Nothing":
        bg_info.text = bg_info_text
    else:
        label = variable_to_label[nice_name_to_variable[new]]
        bg_info.text = f"The variables are split by {new.lower()}. {label}"

    page.children += [plot, caption, bg_info, bottom]


def _as_html(text):
    return f"<b> {text} <b>"
