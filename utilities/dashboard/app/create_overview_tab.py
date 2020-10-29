from functools import partial

from bokeh.layouts import Column
from bokeh.layouts import Row
from bokeh.models import Select
from bokeh.models.widgets import Div
from bokeh.models.widgets import Panel
from bokeh.models.widgets import Tabs

from utilities.dashboard.components.maps.mapplot import setup_map
from utilities.dashboard.components.univariate_distributions import barplot
from utilities.dashboard.components.univariate_distributions import distplot
from utilities.dashboard.components.univariate_distributions import stacked_barplot

plot_modules = {
    "stacked_barplot": stacked_barplot,
    "barplot": barplot,
    "distplot": distplot,
}

header_style = {"color": "#808080"}
TITLE_STYLE = {"font-size": "150%", "text-align": "left"}


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
    group_to_nicenames = {}
    for g, variables in group_to_variables.items():
        group_to_nicenames[g] = [variable_to_nice_name[var] for var in variables]
    # start values
    topic = topics[0]
    subtopics = topic_to_groups[topic]
    group = subtopics[0]
    var_nice_name = group_to_nicenames[group][0]
    plot_type = group_to_plot_type[group]
    setup_plot = getattr(plot_modules[plot_type], "setup_plot")

    # map elements
    map_selectors = [
        Select(
            title=menu_titles[0],
            options=topics,
            value=topic,
            name="topic_selector",
            width=220,
        ),
        Select(
            title=menu_titles[1],
            options=subtopics,
            value=group,
            name="subtopic_selector",
            width=220,
        ),
        Select(
            title=menu_titles[3],
            options=group_to_nicenames[group],
            value=group_to_nicenames[group][0],
            width=160,
        ),
    ]
    map_func = partial(setup_map, map_data=map_data)
    country_map = map_func(group=group, var_nice_name=var_nice_name)

    create_caption = partial(
        _create_caption,
        group_to_header=group_to_header,
        group_to_caption=group_to_caption,
        group_to_variables=group_to_variables,
        variable_to_nice_name=variable_to_nice_name,
        variable_to_label=variable_to_label,
    )
    map_caption = create_caption(group=group)

    map_page = Column(Row(*map_selectors), country_map, map_caption)
    _add_map_callbacks(
        map_page, topic_to_groups, group_to_nicenames, map_func, create_caption
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
    bg_info = Div(text="", margin=(10, 0, 10, 0), style=header_style)

    plot_page = Column(
        # plot_title, plot_intro,
        Row(*plot_selectors),
        plot,
        plot_caption,
        bg_info,
    )

    # plot callbacks
    topic_callback = partial(
        _set_lower_vals, high_to_lower=topic_to_groups, lower_selector=plot_selectors[1]
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

    # intro
    plot_width = plot.children[1].plot_width
    title = Div(text=title, style=TITLE_STYLE, margin=(10, 0, 10, 0), width=plot_width)
    intro = Div(text=top_text, margin=(10, 0, 10, 0), style={"text-align": "justify"})
    plot_title = Div(text=groupby_title, style=TITLE_STYLE, margin=(30, 0, 10, 0))
    plot_intro = Div(
        text=plot_intro, margin=(10, 0, 30, 0), style={"text-align": "justify"}
    )

    page = Tabs(
        tabs=[
            Panel(
                child=Column(title, intro, plot_title, plot_intro), title=tab_names[0]
            ),
            Panel(child=map_page, title=tab_names[1]),
            Panel(child=plot_page, title=tab_names[2]),
        ]
    )
    return page


def _add_map_callbacks(
    map_page, topic_to_groups, group_to_nicenames, map_func, caption_func
):
    map_selectors = map_page.children[0].children
    map_topic_callback = partial(
        _set_lower_vals, high_to_lower=topic_to_groups, lower_selector=map_selectors[1],
    )
    map_selectors[0].on_change("value", map_topic_callback)

    map_subtopic_callback = partial(
        _set_lower_vals,
        high_to_lower=group_to_nicenames,
        lower_selector=map_selectors[2],
        caption_func=caption_func,
        map_page=map_page,
    )
    map_selectors[1].on_change("value", map_subtopic_callback)

    change_map = partial(set_question, map_func=map_func, map_page=map_page)
    map_selectors[2].on_change("value", change_map)


def _set_lower_vals(
    attr, old, new, high_to_lower, lower_selector, caption_func=None, map_page=None
):
    """Adjust lower level select menu according to new higher level."""
    new_groups = high_to_lower[new]
    lower_selector.options = new_groups
    lower_selector.value = new_groups[0]
    if caption_func is not None:
        map_page.children[-1] = caption_func(group=new)


def set_question(attr, old, new, map_func, map_page):
    group = map_page.children[0].children[1].value
    new_map = map_func(group=group, var_nice_name=new)
    map_page.children[1] = new_map


def _create_caption(
    group,
    group_to_header,
    group_to_caption,
    group_to_variables,
    variable_to_nice_name,
    variable_to_label,
):
    variables = group_to_variables[group]
    nice_vars = [variable_to_nice_name[var] for var in variables]
    labels = [variable_to_label[var] for var in variables]
    text = group_to_header[group]
    if len(variables) > 1:
        text += "<br> <br>" + "<br>".join(
            f"<b>{name}</b>: {label}" for name, label in zip(nice_vars, labels)
        )
    if isinstance(group_to_caption[group], str):
        text += "<br> <br>" + group_to_caption[group]

    element = Div(text=text, name="bottom", margin=(20, 0, 10, 0), style=header_style)
    return element


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
