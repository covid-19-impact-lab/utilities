from utilities.dashboard.components.run_charts.lineplot import prepare_data


def create_run_charts_data(data, variable_mappings, nice_names):

    variables = variable_mappings["outcome_variables"]
    bg_vars = variable_mappings["background_variables"]

    run_charts_data = prepare_data(
        data=data,
        period="month",
        variables=variables,
        bg_vars=bg_vars,
        nice_names=nice_names,
    )

    return run_charts_data
