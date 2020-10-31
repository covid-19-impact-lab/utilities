from utilities.dashboard.components.intro_page.create_data import create_intro_page_data
from utilities.dashboard.components.maps.create_data import create_maps_data
from utilities.dashboard.components.univariate_distributions.create_data import (
    create_univariate_distributions_data,
)
from utilities.dashboard.shared import create_general_variable_mappings
from utilities.dashboard.shared import get_menu_labels


def create_dashboard_data(
    data, data_desc, group_info, language, data_name, kde_cutoff=7
):
    """Create a dict with all data needed in the dashboard.

    Args:
        data (pd.DataFrame): The empirical dataset.
        data_desc (pd.DataFrame): Description of the dataset.
        group_info (pd.DataFrame): Description of groups.
        data_name (str): "liss" or "gesis"
        language (str): One of ["english", "german", "dutch"]

    Returns:
        dict: Dictionary with the following entries:


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

    maps_data = create_maps_data(
        data=data,
        variable_mappings=variable_mappings,
        nice_names=nice_names,
        groups=groups,
        language=language,
        data_name=data_name,
    )

    univariate_distributions_data = create_univariate_distributions_data(
        data=data,
        variable_mappings=variable_mappings,
        nice_names=nice_names,
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
