from functools import partial

from bokeh.layouts import Column
from bokeh.layouts import Row
from bokeh.models import Select

from utilities.dashboard.components.run_charts.lineplot import setup_plot
from utilities.dashboard.shared import adjust_lower_level_selection_menu_to_higher_level


def create_run_charts(data, variable_mappings):
    outcome_variables = variable_mappings["outcome_variables"]
    background_variables = variable_mappings["background_variables"]

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
    run_charts_func = partial(
        setup_plot,
        data_dict=data["data"],
        selectors=data["selectors"],
        bounds=data["bounds"],
        nice_names_dict=data["nice_names"],
    )
    run_chart = run_charts_func(variable=outcome_variable, bg_var=background_variable)

    run_charts_page = Column(Row(*selection_menus), run_chart)

    return run_charts_page
