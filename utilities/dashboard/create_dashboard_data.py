from utilities.dashboard.components.debugging import no_plot
from utilities.dashboard.components.intro_page.create_data import create_intro_page_data
from utilities.dashboard.components.maps.mapplot import prepare_maps_data
from utilities.dashboard.components.univariate_distributions import barplot
from utilities.dashboard.components.univariate_distributions import distplot
from utilities.dashboard.components.univariate_distributions import stacked_barplot
from utilities.dashboard.shared import create_general_variable_mappings
from utilities.dashboard.shared import get_menu_labels

plot_modules = {
    "stacked_barplot": stacked_barplot,
    "barplot": barplot,
    "no_plot": no_plot,
    "distplot": distplot,
}


def create_dashboard_data(
    data, data_desc, group_info, language, data_name, kde_cutoff=7
):
    """Create a dict with all data needed in the dashboard.

    Args:
        data (pd.DataFrame): The empirical dataset.
        data_decs (pd.DataFrame): Description of the dataset.
        group_info (pd.DataFrame): Description of groups.
        data_name (str): "liss" or "gesis"
        language (str): One of ["english", "german", "dutch"]

    Returns:
        dict: Dictionary with the following entries:
            - "groups": List of strings
            - "topics": List of strings
            - "topic_to_groups": Dictionary
            - "group_to_header": Dictionary
            - "group_to_plot_type": Dictionary
            - "group_to_caption": Dictionary
            - "background_vars": List of strings
            - "group_to_variables": Dictionary
            - "variable_to_label": Dictionary
            - "univariate_distributions_data": A dict with data for the plots
            - "variable_to_nice_name": Dictionary
            - "maps_data": A dict with geojson data sources for each group

    """

    # ==================================================================================
    # Create intermediate variables that won't be part of the dashboard data dictionary
    # ==================================================================================
    groups = _get_groups(group_info, language)

    vm = create_general_variable_mappings(
        data=data,
        data_desc=data_desc,
        group_info=group_info,
        language=language,
        data_name=data_name,
    )
    internal_bg_vars = vm["group_to_variables"]["Background Overview"]
    # ==================================================================================
    # Create the dashboard data dictionary
    # ==================================================================================
    res = {"language": language}
    menu_labels = get_menu_labels(language)
    res["menu_labels"] = menu_labels

    nice_names = data_desc.set_index("new_name")[f"nice_name_{language}"].to_dict()
    res["background_variables"] = [
        nice_names[var] for var in internal_bg_vars if var != "prov"
    ]

    res["group_to_plot_type"] = group_info.set_index(f"group_{language}")[
        "plot_type"
    ].to_dict()

    if language == "english":
        translations = {
            "Province": "Province",
            "No. Obs": "No. Obs",
            "Question": "Question",
            "Value": "Value",
            "Share": "Share",
            "Mean": "Mean",
            "Most Common": "Most Common",
        }
    elif language == "german":
        translations = {
            "Province": "Provinz",
            "No. Obs": "Antworten",
            "Question": "Frage",
            "Value": "Wert",
            "Share": "Anteil",
            "Mean": "Mittelwert",
            "Most Common": "Häufigste Antwort",
        }
    maps_data = {"tooltips": translations}

    univariate_distributions_data = {}
    for g in groups:
        plot_type = res["group_to_plot_type"][g]
        prepare_data = getattr(plot_modules[plot_type], "prepare_data")
        variables = vm["group_to_variables"][g]
        nice_names = nice_names
        labels = vm["variable_to_label"]
        univariate_distributions_data[g] = prepare_data(
            data=data,
            variables=variables,
            bg_vars=[x for x in internal_bg_vars if x != "prov"],
            nice_names=nice_names,
            labels=labels,
            nothing_string=menu_labels["nothing_category"],
        )

        maps_data[g] = prepare_maps_data(
            data=data,
            variables=variables,
            nice_names=nice_names,
            labels=labels,
            data_name=data_name,
        )

    res["intro_page_data"] = create_intro_page_data(language, data_name)

    res["general_variable_mappings"] = create_general_variable_mappings(
        data, data_desc, group_info, language, data_name
    )

    res["univariate_distributions_data"] = univariate_distributions_data
    res["maps_data"] = maps_data
    return res


def _get_groups(group_info, language):
    raw_groups = group_info[f"group_{language}"].unique().tolist()  # noqa
    bg_var_groups = ["Background Overview", "Background Correlation"]
    groups = [group for group in raw_groups if group not in bg_var_groups]
    return groups
