from bokeh.models.widgets import Panel
from bokeh.models.widgets import Tabs

from utilities.dashboard.components.intro_page.create_component import create_intro_page
from utilities.dashboard.components.maps.create_component import create_maps
from utilities.dashboard.components.univariate_distributions.create_component import (
    create_univariate_distributions,
)


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
