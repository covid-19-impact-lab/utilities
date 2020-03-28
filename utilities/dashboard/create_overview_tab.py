from functools import partial

from bokeh.layouts import Column
from bokeh.layouts import Row
from bokeh.models import Select
from bokeh.models import Panel
from bokeh.models.widgets import Div


# HIER DICT MAGIE ...

from utilities.dashboard.stacked_barplot import setup_plot, condition_plot, as_html




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

    topic_selector, subtopic_selector, background_selector = create_selection_menus(
        topics=topics, subtopics=subtopics, topic=topic, group=group,
        background_variables=background_variables)
    title_style = {"font-size": "200%", "color": "#696969"}
    title = Div(text=as_html(group), style=title_style, width=500)
    header = Div(text=group_to_header[group], name="header")
    selection_menues = Row(topic_selector, subtopic_selector, background_selector)
    plot = setup_plot(**plot_data[group])

    page = Column(selection_menues, title, header, plot)

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
    )
    subtopic_selector.on_change("value", subtopic_callback)
    background_var_callback = partial(
        condition_on_background_var,
        subtopic_selector=subtopic_selector,
        plot_data=plot_data,
        page=page,
    )
    background_selector.on_change("value", background_var_callback)

    tab = Panel(child=page, title="Overview", name="overview_panel")

    return tab


def create_selection_menus(topics, subtopics, topic, group, background_variables):
    topic_selector = Select(
        title="Topic:", options=topics, value=topic, name="topic_selector")
    subtopic_selector = Select(
        title="Subtopic:", options=subtopics, value=group, name="subtopic_selector",
    )
    background_selector = Select(
        title="Condition On:",
        options=["all"] + background_variables,
        value="all"
    )
    return topic_selector, subtopic_selector, background_selector


def set_topic(attr, old, new, topic_to_groups, topic_selector, subtopic_selector):
    """Adjust subtopic select menu according to new topic."""
    topic_selector.value = new
    new_groups = topic_to_groups[new]
    subtopic_selector.options = new_groups
    subtopic_selector.value = new_groups[0]


def set_subtopic(attr, old, new, header, group_to_header, plot_data, page, background_selector):
    """Adjust title, header and plot to new subtopic."""
    header.text = group_to_header[new]
    new_p = setup_plot(**plot_data[new])
    background_selector.value = "all"
    page.children[-1] = new_p


def condition_on_background_var(attr, old, new, subtopic_selector, plot_data, page):
    plot = page.children[-1]
    page.children = page.children[:-1]

    group = subtopic_selector.value
    shares = plot_data[group]["shares"]
    categories = [cat for cat in shares if cat not in ("label", "Question")]


    # condition_plot = getattr(plot_modules[plot_type], "condition_plot")


    condition_plot(
        plot=plot,
        selectors=plot_data[group]["selectors"],
        bg_var=new,
        n_categories=len(categories))
    page.children.append(plot)
