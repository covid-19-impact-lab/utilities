from functools import partial

from bokeh.layouts import Column
from bokeh.layouts import Row
from bokeh.models import Select

from utilities.dashboard.components.maps.mapplot import setup_map
from utilities.dashboard.shared import adjust_lower_level_selection_menu_to_higher_level
from utilities.dashboard.shared import create_caption_for_variable_group


def create_maps(maps_data, variable_mappings, menu_labels):
    """Create the maps tab showing the distribution of any group of variables.

    Args:
        maps_data (dict): Dictionary of maps data.
        variable_mappings (dict): Dictionary of maps metadata.
        menu_labels (dict): Dictionary of menu labels.

    Returns:
        page (bokeh Column)

    """
    topics = variable_mappings["topics"]
    group_to_variables = variable_mappings["group_to_variables"]
    variable_to_nice_name = variable_mappings["variable_to_nice_name"]
    topic_to_groups = variable_mappings["topic_to_groups"]
    group_to_header = variable_mappings["group_to_header"]
    group_to_caption = variable_mappings["group_to_caption"]
    variable_to_label = variable_mappings["variable_to_label"]

    group_to_nicenames = {}
    for g, variables in group_to_variables.items():
        group_to_nicenames[g] = [variable_to_nice_name[var] for var in variables]
    # start values
    topic = topics[0]
    subtopics = topic_to_groups[topic]
    group = subtopics[0]
    var_nice_name = group_to_nicenames[group][0]

    selection_menus = [
        Select(
            title=menu_labels["topic"],
            options=topics,
            value=topic,
            name="topic_selector",
            width=220,
        ),
        Select(
            title=menu_labels["subtopic"],
            options=subtopics,
            value=group,
            name="subtopic_selector",
            width=220,
        ),
        Select(
            title=menu_labels["question"],
            options=group_to_nicenames[group],
            value=group_to_nicenames[group][0],
            name="question_selector",
            width=160,
        ),
    ]
    map_func = partial(setup_map, maps_data=maps_data)
    country_map = map_func(group=group, var_nice_name=var_nice_name)

    create_caption = partial(
        create_caption_for_variable_group,
        group_to_header=group_to_header,
        group_to_caption=group_to_caption,
        group_to_variables=group_to_variables,
        variable_to_nice_name=variable_to_nice_name,
        variable_to_label=variable_to_label,
    )
    map_caption = create_caption(group=group)

    map_page = Column(Row(*selection_menus), country_map, map_caption)
    _add_map_callbacks(
        map_page, topic_to_groups, group_to_nicenames, map_func, create_caption
    )

    return map_page


def _add_map_callbacks(
    map_page, topic_to_groups, group_to_nicenames, map_func, caption_func
):
    map_selectors = map_page.children[0].children
    map_topic_callback = partial(
        adjust_lower_level_selection_menu_to_higher_level,
        high_to_lower=topic_to_groups,
        lower_selector=map_selectors[1],
    )
    map_selectors[0].on_change("value", map_topic_callback)

    map_subtopic_callback = partial(
        adjust_lower_level_selection_menu_to_higher_level,
        high_to_lower=group_to_nicenames,
        lower_selector=map_selectors[2],
        caption_func=caption_func,
        map_page=map_page,
    )
    map_selectors[1].on_change("value", map_subtopic_callback)

    change_map = partial(set_question, map_func=map_func, map_page=map_page)
    map_selectors[2].on_change("value", change_map)


def set_question(attr, old, new, map_func, map_page):
    group = map_page.children[0].children[1].value
    new_map = map_func(group=group, var_nice_name=new)
    map_page.children[1] = new_map
