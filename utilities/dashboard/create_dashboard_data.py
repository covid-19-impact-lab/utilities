from utilities.dashboard.app import barplot
from utilities.dashboard.app import distplot
from utilities.dashboard.app import no_plot
from utilities.dashboard.app import stacked_barplot
from utilities.dashboard.app.mapplot import prepare_map_data
from itertools import product
from pathlib import Path


plot_modules = {
    "stacked_barplot": stacked_barplot,
    "barplot": barplot,
    "no_plot": no_plot,
    "distplot": distplot,
}


def create_dashboard_data(
    data, data_desc, group_info, language, data_name, kde_cutoff=7
):
    """Create a dict with all data needed for the dashboard.

    Args:
        data (pd.DataFrame): The empirical dataset.
        data_decs (pd.DataFrame): Description of the dataset.
        group_info (pd.DataFrame): Description of groups.
        language (pd.DataFrame): One of ["english", "german", "dutch"]

    Returns:
        dict: Dictionary with one entry for the overview tab, the correlation tab and
            the timeline tab.

    """
    dashboard_data = {
        "overview": _create_overview_tab_data(
            data, data_desc, group_info, language, data_name, kde_cutoff
        ),
        "correlation": _create_correlation_tab_data(data, data_desc, language),
        "timeline": _create_timeline_tab_data(language),
    }
    return dashboard_data


def _create_overview_tab_data(
    data, data_desc, group_info, language, data_name, kde_cutoff
):
    """Create a dict with all data needed in the overview tab.

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
            - "plot_data": A dict with data for the plots
            - "variable_to_nice_name": Dictionary
            - "map_data": A dict with geojson data sources for each group

    """
    res = _language_specific_kwargs(language=language, data_name=data_name)
    raw_groups = group_info[f"group_{language}"].unique().tolist()  # noqa
    bg_var_groups = ["Background Overview", "Background Correlation"]
    res["groups"] = [group for group in raw_groups if group not in bg_var_groups]
    raw_topics = group_info[f"topic_{language}"].unique().tolist()  # noqa
    res["topics"] = [topic for topic in raw_topics if topic != "Background Variables"]

    res["topic_to_groups"] = _dict_of_uniques_from_df(
        group_info, f"topic_{language}", f"group_{language}"
    )

    res["group_to_header"] = group_info.set_index(f"group_{language}")[
        f"header_{language}"
    ].to_dict()
    res["group_to_caption"] = group_info.set_index(f"group_{language}")[
        f"caption_{language}"
    ].to_dict()
    res["group_to_variables"] = _dict_of_uniques_from_df(
        data_desc, f"group_{language}", "new_name"
    )

    internal_bg_vars = res["group_to_variables"].pop("Background Overview")
    nice_names = data_desc.set_index("new_name")[f"nice_name_{language}"].to_dict()
    res["variable_to_nice_name"] = nice_names
    res["nice_name_to_variable"] = {v: k for k, v in nice_names.items()}
    res["background_variables"] = [
        nice_names[var] for var in internal_bg_vars if var != "prov"
    ]
    res["variable_to_label"] = data_desc.set_index("new_name")[
        f"label_{language}"
    ].to_dict()

    res["group_to_plot_type"] = group_info.set_index(f"group_{language}")[
        "plot_type"
    ].to_dict()

    plot_data = {}
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
    map_data = {"tooltips": translations}
    for g in res["groups"]:
        plot_type = res["group_to_plot_type"][g]
        prepare_data = getattr(plot_modules[plot_type], "prepare_data")
        variables = res["group_to_variables"][g]
        nice_names = res["variable_to_nice_name"]
        labels = res["variable_to_label"]
        plot_data[g] = prepare_data(
            data=data,
            variables=variables,
            bg_vars=[x for x in internal_bg_vars if x != "prov"],
            nice_names=nice_names,
            labels=labels,
            nth_str=res["nth_str"],
        )

        map_data[g] = prepare_map_data(
            data=data,
            variables=variables,
            nice_names=nice_names,
            labels=labels,
            data_name=data_name,
        )

    res["plot_data"] = plot_data
    res["map_data"] = map_data
    return res


def _dict_of_uniques_from_df(df, key_col, val_col):
    raw = df.groupby(key_col)[val_col].unique().to_dict()
    return {k: val.tolist() for k, val in raw.items()}


def _language_specific_kwargs(language, data_name):
    module_path = Path(__file__).resolve().parent
    res = {}
    with open(module_path / data_name / f"top_text_{language}.txt", "r") as f:
        res["top_text"] = f.read()
    with open(module_path / data_name / f"plot_intro_{language}.txt", "r") as f:
        res["plot_intro"] = f.read()

    if language == "english":
        res["title"] = "Explore What People Believe and Do in Response to CoViD-19"
        res["menu_titles"] = ("Topic", "Subtopic", "Split By", "Question")
        res["nth_str"] = "Nothing"
        res["groupby_title"] = "Group Differences"
    elif language == "german":
        res["title"] = (
            "Was denken die Menschen zur Corona-Pandemie, wie stark "
            + "sind sie von ihr betroffen und wie passen sie ihr Verhalten an?"
        )
        res["menu_titles"] = ("Bereich", "Thema", "Gruppieren nach", "Frage")
        res["nth_str"] = "Nichts"
        res["groupby_title"] = "Unterschiede zwischen Bevölkerungsgruppen"
    else:
        raise NotImplementedError("The language you supplied is not supported yet.")
    return res


# =====================================================================================


def _create_correlation_tab_data(data, data_desc, language):
    # might make sense to just have one function determining all three lists
    axis_vars = _determine_axis_vars(data, data_desc, language)
    groupby_vars = _determine_groupby_vars(data_desc, language)
    color_vars = _determine_color_vars(data, data_desc, language)

    corr_data = {}
    for x, y, g, c in product(axis_vars, axis_vars, groupby_vars, color_vars):
        corr_data[(x, y, g, c)] = _corr_plot(data=data, x=x, y=y, g=g, c=c)

    return corr_data


def _determine_axis_vars(data, data_desc, laungage):
    return ["A Long Variable Name", "Another Long Variable", "Short Name"]


def _determine_groupby_vars(data_desc, language):
    bg_corr_slice = data_desc[
        data_desc[f"group_{language}"] == "Background Correlation"
    ]
    groupby_vars = bg_corr_slice[f"nice_name_{language}"].tolist()
    return groupby_vars


def _determine_color_vars(data, data_desc, language):
    return ["Gender", "Age Group"]


def _corr_plot(data, x, y, g, c):
    return {"xs": [0, 1, 2], "ys": [3, 0, 1]}


def _create_timeline_tab_data(language):
    return {}
