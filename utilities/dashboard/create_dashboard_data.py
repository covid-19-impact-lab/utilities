from utilities.dashboard.components.intro_page.create_data import create_intro_page_data
from utilities.dashboard.components.maps.create_data import create_maps_data
from utilities.dashboard.components.univariate_distributions.create_data import (
    create_univariate_distributions_data,
)
from utilities.dashboard.components.run_charts.create_data import create_run_charts_data


from utilities.dashboard.shared import create_general_variable_mappings
from utilities.dashboard.shared import get_menu_labels


def create_dashboard_data(
    data,
    data_name,
    language,
    data_desc=None,
    group_info=None,
    run_charts_desc=None,
    kde_cutoff=7,
):
    """Create a dict with all data needed in the dashboard.

    Args:
        data (pd.DataFrame): The empirical dataset.
        data_desc (pd.DataFrame): Description of the dataset.
        run_charts_desc (pd.DataFrame): Description of run charts variables.
        group_info (pd.DataFrame): Description of groups.
        data_name (str): "liss" or "gesis".
        language (str): One of ["english", "german", "dutch"].

    Returns:
        dict: Dictionary with the following entries:
            "shared_data": dict
            "intro_page_data": dict

        Plus one dict containign the data of each additional dashboard component
            (e.g. "maps_data", "run_charts_data"...).

    """
    shared_data = _create_shared_dashboad_data(
        data=data,
        data_desc=data_desc,
        run_charts_desc=run_charts_desc,
        group_info=group_info,
        language=language,
        data_name=data_name,
    )
    variable_mappings = shared_data["variable_mappings"]
    menu_labels = shared_data["menu_labels"]

    if group_info is not None:
        groups = _get_groups(group_info, language)

    if data_desc is not None:
        maps_data = create_maps_data(
            data=data,
            variable_mappings=variable_mappings,
            nice_names=variable_mappings["variable_to_nice_name"],
            groups=groups,
            language=language,
            data_name=data_name,
        )

        univariate_distributions_data = create_univariate_distributions_data(
            data=data,
            variable_mappings=variable_mappings,
            nice_names=variable_mappings["variable_to_nice_name"],
            groups=groups,
            group_info=group_info,
            menu_labels=menu_labels,
            language=language,
        )

        res = {}
        res["shared_data"] = shared_data
        res["intro_page_data"] = create_intro_page_data(language, data_name)
        res["univariate_distributions_data"] = univariate_distributions_data
        res["maps_data"] = maps_data

    if run_charts_desc is not None:
        run_charts_data = create_run_charts_data(
            data=data,
            variable_mappings=variable_mappings,
            nice_names=variable_mappings["nice_names_run_charts"],
        )
        res = {}
        res["mapping"] = shared_data
        res["run_charts_data"] = run_charts_data

    return res


def _get_groups(group_info, language):
    """Get variables' group from `group_info`, given language."""
    raw_groups = group_info[f"group_{language}"].unique().tolist()  # noqa
    bg_var_groups = ["Background Overview", "Background Correlation"]
    groups = [group for group in raw_groups if group not in bg_var_groups]
    return groups


def _create_shared_dashboad_data(
    data, data_desc, run_charts_desc, group_info, language, data_name
):
    """Create dashboard data that will be used by all components.

    Args:
        data (pd.DataFrame): The empirical dataset.
        data_desc (pd.DataFrame): Description of the dataset.
        group_info (pd.DataFrame): Description of groups.
        run_charts_desc (pd.DataFrame): Description of run charts variables.
        language (str): One of ["english", "german", "dutch"].
        data_name (str): "liss" or "gesis".

    Returns:
        dict: Dictionary with the following entries:
            - "language": string
            - "variable_mapping": dict
            - "menu_labels": dict

    """
    vm = create_general_variable_mappings(
        data=data,
        data_desc=data_desc,
        run_charts_desc=run_charts_desc,
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
