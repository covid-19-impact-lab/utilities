from functools import partial

from bokeh.layouts import Column
from bokeh.layouts import Row
from bokeh.models import Select
from bokeh.models.widgets import Div
from bokeh.models.widgets import Panel
from bokeh.models.widgets import Tabs

from utilities.dashboard.components.intro_page.create_component import create_intro_page
from utilities.dashboard.components.maps.create_component import create_maps
from utilities.dashboard.components.univariate_distributions import barplot
from utilities.dashboard.components.univariate_distributions import distplot
from utilities.dashboard.components.univariate_distributions import stacked_barplot
from utilities.dashboard.config import HEADER_STYLE
from utilities.dashboard.shared import adjust_lower_level_selection_menu_to_higher_level
from utilities.dashboard.shared import create_caption_for_variable_group

plot_modules = {
    "stacked_barplot": stacked_barplot,
    "barplot": barplot,
    "distplot": distplot,
}


def assemble_dashboard_components(
    groups,
    topics,
    topic_to_groups,
    group_to_header,
    group_to_plot_type,
    background_variables,
    plot_data,
    map_data,
    group_to_variables,
    variable_to_label,
    variable_to_nice_name,
    group_to_caption,
    title,
    top_text,
    plot_intro,
    groupby_title,
    nice_name_to_variable,
    menu_titles,
    nth_str,
    tab_names,
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
        title (str)
        groupby_title (str)
        top_text (str)
        plot_intro (str)
        menu_titles (tuple)
        nth_str (str): name of the "Nothing" category in English

    Returns:
        page (bokeh Column)

    """

    intro_page = create_intro_page(
        title=title,
        top_text=top_text,
        plot_intro=plot_intro,
        groupby_title=groupby_title,
    )

    map_page = create_maps(
        topics=topics,
        topic_to_groups=topic_to_groups,
        group_to_header=group_to_header,
        map_data=map_data,
        group_to_variables=group_to_variables,
        variable_to_label=variable_to_label,
        variable_to_nice_name=variable_to_nice_name,
        group_to_caption=group_to_caption,
        menu_titles=menu_titles,
    )

    univariate_distributions_page = create_univariate_distributions(
        topics=topics,
        topic_to_groups=topic_to_groups,
        group_to_header=group_to_header,
        group_to_plot_type=group_to_plot_type,
        background_variables=background_variables,
        plot_data=plot_data,
        group_to_variables=group_to_variables,
        variable_to_label=variable_to_label,
        variable_to_nice_name=variable_to_nice_name,
        group_to_caption=group_to_caption,
        nice_name_to_variable=nice_name_to_variable,
        menu_titles=menu_titles,
        nth_str=nth_str,
    )

    page = Tabs(
        tabs=[
            Panel(child=intro_page, title=tab_names[0]),
            Panel(child=map_page, title=tab_names[1]),
            Panel(child=univariate_distributions_page, title=tab_names[2]),
        ]
    )
    return page


def create_univariate_distributions(
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
    nice_name_to_variable,
    menu_titles,
    nth_str,
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
        title (str)
        groupby_title (str)
        top_text (str)
        plot_intro (str)
        menu_titles (tuple)
        nth_str (str): name of the "Nothing" category in English

    Returns:
        page (bokeh Column)

    """
    group_to_nicenames = {}
    for g, variables in group_to_variables.items():
        group_to_nicenames[g] = [variable_to_nice_name[var] for var in variables]
    # start values
    topic = topics[0]
    subtopics = topic_to_groups[topic]
    group = subtopics[0]
    plot_type = group_to_plot_type[group]
    setup_plot = getattr(plot_modules[plot_type], "setup_plot")

    create_caption = partial(
        create_caption_for_variable_group,
        group_to_header=group_to_header,
        group_to_caption=group_to_caption,
        group_to_variables=group_to_variables,
        variable_to_nice_name=variable_to_nice_name,
        variable_to_label=variable_to_label,
    )

    plot_selectors = [
        Select(
            title=menu_titles[0],
            options=topics,
            value=topic,
            name="topic_selector",
            width=200,
        ),
        Select(
            title=menu_titles[1],
            options=subtopics,
            value=group,
            name="subtopic_selector",
            width=250,
        ),
        Select(
            title=menu_titles[2],
            options=[nth_str] + background_variables,
            value=nth_str,
            width=100,
        ),
    ]

    plot = setup_plot(**plot_data[group], bg_var=nth_str, nth_str=nth_str)  # noqa
    plot_caption = create_caption(group=group)
    bg_info = Div(text="", margin=(10, 0, 10, 0), style=HEADER_STYLE)

    plot_page = Column(
        # plot_title, plot_intro,
        Row(*plot_selectors),
        plot,
        plot_caption,
        bg_info,
    )

    # plot callbacks
    topic_callback = partial(
        adjust_lower_level_selection_menu_to_higher_level,
        high_to_lower=topic_to_groups,
        lower_selector=plot_selectors[1],
    )
    plot_selectors[0].on_change("value", topic_callback)

    subtopic_callback = partial(
        set_subtopic,
        plot_data=plot_data,
        page=plot_page,
        background_selector=plot_selectors[2],
        group_to_plot_type=group_to_plot_type,
        caption_callback=create_caption,
        nth_str=nth_str,
    )
    plot_selectors[1].on_change("value", subtopic_callback)

    background_var_callback = partial(
        condition_on_background_var,
        subtopic_selector=plot_selectors[1],
        plot_data=plot_data,
        page=plot_page,
        group_to_plot_type=group_to_plot_type,
        variable_to_label=variable_to_label,
        group_to_variables=group_to_variables,
        nice_name_to_variable=nice_name_to_variable,
        nth_str=nth_str,
    )
    plot_selectors[2].on_change("value", background_var_callback)

    return plot_page


def set_subtopic(
    attr,
    old,
    new,
    group_to_plot_type,
    plot_data,
    page,
    background_selector,
    caption_callback,
    nth_str,
):
    """Adjust title, header and plot to new subtopic."""
    plot, caption, bg_info = page.children[-3:]

    plot_type = group_to_plot_type[new]
    setup_plot = getattr(plot_modules[plot_type], "setup_plot")

    new_p = setup_plot(**plot_data[new], bg_var=nth_str, nth_str=nth_str)
    new_caption = caption_callback(group=new)

    page.children[-3] = new_p
    page.children[-2] = new_caption
    background_selector.value = nth_str


def condition_on_background_var(
    attr,
    old,
    new,
    subtopic_selector,
    plot_data,
    page,
    group_to_plot_type,
    variable_to_label,
    group_to_variables,
    nice_name_to_variable,
    nth_str,
):
    plot, caption, bg_info = page.children[-3:]
    page.children = page.children[:-3]
    group = subtopic_selector.value
    plot_type = group_to_plot_type[group]
    condition_plot = getattr(plot_modules[plot_type], "condition_plot")

    condition_plot(
        plot, **plot_data[group], bg_var=new, nth_str=nth_str,
    )

    if new == nth_str:
        bg_info.text = ""
    else:
        bg_info.text = variable_to_label[nice_name_to_variable[new]]

    page.children += [plot, caption, bg_info]
