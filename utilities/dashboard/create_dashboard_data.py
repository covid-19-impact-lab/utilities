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

    shared_data = _create_shared_dashboad_data(
        data=data,
        data_desc=data_desc,
        group_info=group_info,
        language=language,
        data_name=data_name,
    )
    variable_mappings = shared_data["variable_mappings"]
    menu_labels = shared_data["menu_labels"]

    groups = _get_groups(group_info, language)

    nice_names = data_desc.set_index("new_name")[f"nice_name_{language}"].to_dict()

    # create map data =================================================================
    maps_data = create_maps_data(
        data=data,
        variable_mappings=variable_mappings,
        nice_names=nice_names,
        groups=groups,
        language=language,
        data_name=data_name,
    )

    # dist data =======================================================================

    univariate_distributions_data = create_univariate_distributions_data(
        data=data,
        variable_mappings=variable_mappings,
        nice_names=nice_names,
        groups=groups,
        group_info=group_info,
        menu_labels=menu_labels,
        language=language,
    )
    # joining ====================================
    res = {}
    res["shared_data"] = shared_data
    res["intro_page_data"] = create_intro_page_data(language, data_name)
    res["univariate_distributions_data"] = univariate_distributions_data
    res["maps_data"] = maps_data
    return res


def _get_groups(group_info, language):
    raw_groups = group_info[f"group_{language}"].unique().tolist()  # noqa
    bg_var_groups = ["Background Overview", "Background Correlation"]
    groups = [group for group in raw_groups if group not in bg_var_groups]
    return groups


def _create_shared_dashboad_data(data, data_desc, group_info, language, data_name):
    vm = create_general_variable_mappings(
        data=data,
        data_desc=data_desc,
        group_info=group_info,
        language=language,
        data_name=data_name,
    )

    menu_labels = get_menu_labels(language)
    shared_data = {
        "language": language,
        "variable_mappings": vm,
        "menu_labels": menu_labels,
    }
    return shared_data


def create_maps_data(data, variable_mappings, nice_names, groups, language, data_name):
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

    for g in groups:
        maps_data[g] = prepare_maps_data(
            data=data,
            variables=variable_mappings["group_to_variables"][g],
            nice_names=nice_names,
            labels=variable_mappings["variable_to_label"],
            data_name=data_name,
        )

    return maps_data


def create_univariate_distributions_data(
    data, variable_mappings, nice_names, groups, group_info, menu_labels, language
):
    vm = variable_mappings

    relevant_bg_vars = vm["group_to_variables"]["Background Overview"]

    res = {}
    group_to_plot_type = group_info.set_index(f"group_{language}")[
        "plot_type"
    ].to_dict()
    res["group_to_plot_type"] = group_to_plot_type

    plot_data = {}

    for g in groups:
        plot_type = group_to_plot_type[g]
        prepare_data = getattr(plot_modules[plot_type], "prepare_data")
        plot_data[g] = prepare_data(
            data=data,
            variables=vm["group_to_variables"][g],
            bg_vars=[x for x in relevant_bg_vars if x != "prov"],
            nice_names=nice_names,
            labels=vm["variable_to_label"],
            nothing_string=menu_labels["nothing_category"],
        )

    res["plot_data"] = plot_data
    res["background_variables"] = [
        nice_names[var] for var in relevant_bg_vars if var != "prov"
    ]

    return res
