from utilities.dashboard.config import RUN_CHARTS_DIR
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

    # text for plot is processed separately
    metadata_path = RUN_CHARTS_DIR / "metadata"
    with open(metadata_path / f"top_text_english.txt", "r") as f:
        run_charts_data["top_text"] = f.read()

    with open(metadata_path / f"bottom_text_english.txt", "r") as f:
        run_charts_data["bottom_text"] = f.read()

    run_charts_data[
        "title"
    ] = "How does the CoVid-19 pandemic affect labor market outcomes?"

    return run_charts_data
