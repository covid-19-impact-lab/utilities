from utilities.dashboard.app import barplot
from utilities.dashboard.app import distplot
from utilities.dashboard.app import no_plot
from utilities.dashboard.app import stacked_barplot
from itertools import product


plot_modules = {
    "stacked_barplot": stacked_barplot,
    "barplot": barplot,
    "no_plot": no_plot,
    "distplot": distplot,
}


def create_dashboard_data(data, data_desc, group_info, language, kde_cutoff=7):
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
            data, data_desc, group_info, language, kde_cutoff
        ),
        "correlation": _create_correlation_tab_data(data, data_desc, language),
        "timeline": _create_timeline_tab_data(language),
    }
    return dashboard_data


def _create_overview_tab_data(data, data_desc, group_info, language, kde_cutoff):
    """Create a dict with all data needed in the overview tab.

    Args:
        data (pd.DataFrame): The empirical dataset.
        data_decs (pd.DataFrame): Description of the dataset.
        group_info (pd.DataFrame): Description of groups.
        language (pd.DataFrame): One of ["english", "german", "dutch"]

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
            -

    """
    res = {}
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

    # maybe we don't have to return this
    res["group_to_variables"] = _dict_of_uniques_from_df(
        data_desc, f"group_{language}", "new_name"
    )

    internal_bg_vars = res["group_to_variables"].pop("Background Overview")
    nice_names = data_desc.set_index("new_name")[f"nice_name_{language}"].to_dict()
    res["variable_to_nice_name"] = nice_names
    res["nice_name_to_variable"] = {v: k for k, v in nice_names.items()}
    res["background_variables"] = [nice_names[var] for var in internal_bg_vars]
    res["variable_to_label"] = data_desc.set_index("new_name")[
        f"label_{language}"
    ].to_dict()

    res["group_to_plot_type"] = group_info.set_index(f"group_{language}")[
        "plot_type"
    ].to_dict()

    plot_data = {}
    for g in res["groups"]:
        plot_type = res["group_to_plot_type"][g]
        prepare_data = getattr(plot_modules[plot_type], "prepare_data")
        variables = res["group_to_variables"][g]
        plot_data[g] = prepare_data(
            data=data,
            variables=variables,
            bg_vars=internal_bg_vars,
            nice_names=res["variable_to_nice_name"],
            labels=res["variable_to_label"],
        )

    res["plot_data"] = plot_data

    if language == "english":
        res[
            "top_title"
        ] = "Exploring What People Believe and Do in Response to CoViD-19"
        res["menu_titles"] = ("Topic", "Subtopic", "Split By")
        res["top_text"] = (
            "Have you ever wondered whether young or old comply more with social distancing? "
            + "How many people fear losing their jobs during this epidemic? <br> <br>"
            + "We asked more than 5000 men and women in the Netherlands these and many "
            + "more questions on what they know, believe, fear and do in response to the current epidemic. "
            + "Below you can explore their answers. <br> <br>"
            + "Simply choose a topic and subtopic to get started. "
            + "Hover over the graph to see the exact questions and more information. "
            + "You can see how answers differ by "
            + ", ".join([x.lower() for x in res["background_variables"][:-1]])
            + " or "
            + res["background_variables"][-1].lower()
            + " by selecting one of them in "
            + "the Split By menu."
        )
    return res


def _dict_of_uniques_from_df(df, key_col, val_col):
    raw = df.groupby(key_col)[val_col].unique().to_dict()
    return {k: val.tolist() for k, val in raw.items()}


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
    bg_corr_slice = data_desc[data_desc["group_english"] == "Background Correlation"]
    groupby_vars = bg_corr_slice[f"nice_name_{language}"].tolist()
    return groupby_vars


def _determine_color_vars(data, data_desc, language):
    return ["Gender", "Age Group"]


def _corr_plot(data, x, y, g, c):
    return {"xs": [0, 1, 2], "ys": [3, 0, 1]}


def _create_timeline_tab_data(language):
    return {}
