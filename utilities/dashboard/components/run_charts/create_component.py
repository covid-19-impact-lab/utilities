from functools import partial

from bokeh.layouts import Column
from bokeh.layouts import Row
from bokeh.models import Select
from bokeh.models.ranges import Range1d, DataRange1d

from utilities.dashboard.components.run_charts.lineplot import setup_plot
from utilities.dashboard.components.run_charts.lineplot import update_plot
from utilities.dashboard.shared import adjust_lower_level_selection_menu_to_higher_level


def create_run_charts(data, variable_mappings):
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
    )

    run_charts_page = Column(Row(*selection_menus), run_chart)

    update_func = partial(
        update_plot,
        selectors=data["selectors"],
        bounds=data["bounds"],
        nice_names_dict=data["nice_names"],
    )

    _add_run_charts_callbacks(
        run_chart,
        run_charts_page,
        update_func,
        nice_name_to_background,
        nice_name_to_outcome,
        selection_menus,
    )

    return run_charts_page


def _add_run_charts_callbacks(
    run_chart,
    run_charts_page,
    update_func,
    nice_name_to_background,
    nice_name_to_outcome,
    selection_menus,
):
    # get selectors (0: Outcome variables, 1: Background variables)
    run_charts_selectors = run_charts_page.children[0].children

    outcome_variable_callback = partial(
        update_outcome_variable,
        run_chart=run_chart,
        run_charts_page=run_charts_page,
        nice_name_to_background=nice_name_to_background,
        nice_name_to_outcome=nice_name_to_outcome,
        selection_menus=selection_menus,
        update_func=update_func,
    )

    run_charts_selectors[0].on_change("value", outcome_variable_callback)

    background_variable_callback = partial(
        update_background_variable,
        run_chart=run_chart,
        run_charts_page=run_charts_page,
        nice_name_to_background=nice_name_to_background,
        nice_name_to_outcome=nice_name_to_outcome,
        selection_menus=selection_menus,
        update_func=update_func,
    )

    run_charts_selectors[1].on_change("value", background_variable_callback)


def update_outcome_variable(
    attr,
    old,
    new,
    run_chart,
    run_charts_page,
    nice_name_to_background,
    nice_name_to_outcome,
    selection_menus,
    update_func,
):
    # background_variable = run_charts_page.children[0].children[1].value
    new_run_chart = update_func(
        plot=run_chart,
        bg_var=nice_name_to_background[selection_menus[1].value],
        variable=nice_name_to_outcome[new],
    )
    run_charts_page.children[1] = new_run_chart


def update_background_variable(
    attr,
    old,
    new,
    run_chart,
    run_charts_page,
    nice_name_to_background,
    nice_name_to_outcome,
    selection_menus,
    update_func,
):
    new_run_chart = update_func(
        plot=run_chart,
        variable=nice_name_to_outcome[selection_menus[0].value],
        bg_var=nice_name_to_background[new],
    )
    run_charts_page.children[1] = new_run_chart
