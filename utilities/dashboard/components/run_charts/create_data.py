from utilities.dashboard.components.run_charts.lineplot import prepare_data
from utilities.dashboard.config import RUN_CHARTS_DIR


def create_run_charts_data(data, variable_mappings, nice_names, language):
    """Create data needed to generate run charts tab.

    Args:
        data (pd.DataFrame): Raw dataframe to process.
        variable_mappings (dict): Dictionary of run charts metadata.
        nice_names (dict): Dictionary mapping variables' names to nice names.
        language (string): english or german.

    Returns:
        dict: Dictionary containing all data needed to generate the run charts.

    """
    variables = variable_mappings["outcome_variables"]
    bg_vars = variable_mappings["background_variables"]

    run_charts_data = prepare_data(
        data=data,
        period="month",
        variables=variables,
        bg_vars=bg_vars,
        nice_names=nice_names,
        language=language,
    )

    # text for plot is processed separately
    metadata_path = RUN_CHARTS_DIR / "metadata"
    if language == "english":
        with open(metadata_path / f"top_text_english.txt", "r", encoding="utf-8") as f:
            run_charts_data["top_text"] = f.read()

        with open(metadata_path / f"bottom_text_english.txt", "r", encoding="utf-8") as f:
            run_charts_data["bottom_text"] = f.read()

        run_charts_data[
            "title"
        ] = "How Does the CoVid-19 Pandemic Affect Labor Market Outcomes?"

    elif language == "german":
        with open(metadata_path / f"top_text_german.txt", "r", encoding="utf-8") as f:
            run_charts_data["top_text"] = f.read()

        with open(metadata_path / f"bottom_text_german.txt", "r", encoding="utf-8") as f:
            run_charts_data["bottom_text"] = f.read()

        run_charts_data[
            "title"
        ] = "Wie wirkt sich die CoVid-19-Pandemie auf den Arbeitsmarkt aus?"

    return run_charts_data
