from functools import partial

from bokeh.layouts import Column
from bokeh.layouts import Row
from bokeh.models import Select
from bokeh.models.widgets import Div

from utilities.dashboard.components.run_charts.lineplot import setup_plot
from utilities.dashboard.components.run_charts.lineplot import update_plot
from utilities.dashboard.config import PLOT_WIDTH
from utilities.dashboard.config import TITLE_STYLE
from utilities.dashboard.shared import adjust_lower_level_selection_menu_to_higher_level


def create_run_charts(data, variable_mappings, language):
    """Create the labor supply tab, showing run charts for selected outcome and
    background variables..

    Args:
        data (dict): Dictionary of run charts data.
        variable_mappings (dict): Dictionary of maps metadata.
        language (string): english or german

    Returns:
        bokeh Column

    """
    outcome_variables = variable_mappings["outcome_variables"]
    background_variables = variable_mappings["background_variables"]
    nice_name_to_outcome = variable_mappings["nice_name_to_outcome"]
    nice_name_to_background = variable_mappings["nice_name_to_background"]

    dict_var = variable_mappings["outcome_variable_to_nice_name"]
    dict_bg_var = variable_mappings["background_variable_to_nice_name"]

    outcome_variable = outcome_variables[0]
    background_variable = background_variables[0]

    selection_menus = [
        Select(
            title="Outcome",
            options=[dict_var[var] for var in outcome_variables],
            value=dict_var[outcome_variable],
            name="outcome_variable_selector",
            width=220,
        ),
        Select(
            title="Split By",
            options=[dict_bg_var[var] for var in background_variables],
            value=dict_bg_var[background_variable],
            name="background_variable_selector",
            width=220,
        ),
    ]

    run_chart = setup_plot(
        data_dict=data["data"],
        selectors=data["selectors"],
        bounds=data["bounds"],
        nice_names_dict=data["nice_names"],
        variable=outcome_variable,
        bg_var=background_variable,
        language=language,
    )

    title = Div(
        text=data["title"], style=TITLE_STYLE, margin=(10, 0, 10, 0), width=PLOT_WIDTH
    )
    top_text = Div(
        text=data["top_text"],
        margin=(10, 0, 10, 0),
        style={"text-align": "justify"},
        width=PLOT_WIDTH,
    )
    bottom_text = Div(
        text=data["bottom_text"],
        margin=(10, 0, 10, 0),
        style={"text-align": "justify"},
        width=PLOT_WIDTH,
    )

    run_charts_page = Column(
        title, top_text, Row(*selection_menus), run_chart, bottom_text
    )

    update_func = partial(
        update_plot,
        selectors=data["selectors"],
        bounds=data["bounds"],
        nice_names_dict=data["nice_names"],
    )

    _add_run_charts_callbacks(
        run_charts_page,
        selection_menus,
        update_func,
        nice_name_to_background,
        nice_name_to_outcome,
        data["bounds"],
    )

    return run_charts_page


def _add_run_charts_callbacks(
    run_charts_page,
    selection_menus,
    update_func,
    nice_name_to_background,
    nice_name_to_outcome,
    bounds,
):
    # get selectors (0: Outcome variables, 1: Background variables)
    run_charts_selectors = run_charts_page.children[2].children

    outcome_variable_callback = partial(
        update_outcome_variable,
        run_charts_page=run_charts_page,
        nice_name_to_background=nice_name_to_background,
        nice_name_to_outcome=nice_name_to_outcome,
        selection_menus=selection_menus,
        update_func=update_func,
        bounds=bounds,
    )

    run_charts_selectors[0].on_change("value", outcome_variable_callback)

    background_variable_callback = partial(
        update_background_variable,
        run_charts_page=run_charts_page,
        nice_name_to_background=nice_name_to_background,
        nice_name_to_outcome=nice_name_to_outcome,
        selection_menus=selection_menus,
        update_func=update_func,
        bounds=bounds,
    )

    run_charts_selectors[1].on_change("value", background_variable_callback)


def update_outcome_variable(
    attr,
    old,
    new,
    run_charts_page,
    nice_name_to_background,
    nice_name_to_outcome,
    selection_menus,
    update_func,
    bounds,
):
    bg_var = nice_name_to_background[selection_menus[1].value]
    variable = nice_name_to_outcome[new]
    update_func(
        plot=run_charts_page.children[3],
        bg_var=bg_var,
        variable=variable,
    )
    run_charts_page.children[3].y_range.start = bounds[(variable, "min_outcome")]
    run_charts_page.children[3].y_range.end = bounds[(variable, "max_outcome")]
    selection_menus[0].value = new


def update_background_variable(
    attr,
    old,
    new,
    run_charts_page,
    nice_name_to_background,
    nice_name_to_outcome,
    selection_menus,
    update_func,
    bounds,
):
    bg_var = nice_name_to_background[new]
    variable = nice_name_to_outcome[selection_menus[0].value]
    update_func(
        plot=run_charts_page.children[3],
        variable=variable,
        bg_var=bg_var,
    )
    run_charts_page.children[3].y_range.start = bounds[(variable, "min_outcome")]
    run_charts_page.children[3].y_range.end = bounds[(variable, "max_outcome")]
    selection_menus[1].value = new
