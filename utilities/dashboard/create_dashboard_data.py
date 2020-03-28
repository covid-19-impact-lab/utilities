from utilities.dashboard import barplot
from utilities.dashboard import stacked_barplot
from utilities.dashboard import no_plot


plot_modules = {
    "stacked_barplot": stacked_barplot,
    "barplot": barplot,
    "no_plot": no_plot,
}


def create_overview_tab_data(data, data_desc, group_info, language, kde_cutoff=7):
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
            - "background_vars": List of strings
            - "group_to_variables": Dictionary
            - "variable_to_label": Dictionary
            - "plot_data": A dict with data for the plots
            - "variable_to_nice_name": Dictionary
            -

    """
    res = {}
    all_groups = group_info[f"group_{language}"].unique().tolist()  # noqa
    skip_groups = ["Background Variables", "Skip"]
    relevant_groups = [g for g in all_groups if g not in skip_groups]
    res["groups"] = relevant_groups
    res["topics"] = [
        x for x in group_info[f"topic_{language}"].unique() if x not in skip_groups
    ]

    res["topic_to_groups"] = _dict_of_uniques_from_df(
        group_info, f"topic_{language}", f"group_{language}"
    )

    res["group_to_header"] = group_info.set_index(f"group_{language}")[
        f"header_{language}"
    ].to_dict()

    # maybe we don't have to return this
    res["group_to_variables"] = _dict_of_uniques_from_df(
        data_desc, f"group_{language}", "new_name"
    )

    internal_bg_vars = res["group_to_variables"].pop("Background Variables")
    nice_names = data_desc.set_index("new_name")[f"nice_name_{language}"].to_dict()
    res["variable_to_nice_name"] = nice_names
    res["background_variables"] = [nice_names[var] for var in internal_bg_vars]
    res["variable_to_label"] = data_desc.set_index("new_name")[
        f"label_{language}"
    ].to_dict()

    res["group_to_plot_type"] = _determine_plot_types(desc=data_desc)

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

    return res


def _dict_of_uniques_from_df(df, key_col, val_col):
    raw = df.groupby(key_col)[val_col].unique().to_dict()
    return {k: val.tolist() for k, val in raw.items()}


def _determine_plot_types(desc):
    by_group = desc.groupby("group_english")
    group_to_len_types = by_group["type"].apply(lambda x: len(x.unique()))
    group_cat_info = group_to_len_types.to_frame(name="len type")
    group_cat_info["type"] = by_group["type"].apply(lambda x: x.unique()[0])
    group_cat_info["nr_categories"] = by_group["categories_english"].apply(
        lambda x: len(x.str.split(", "))
    )
    group_cat_info["nr_categories"] = group_cat_info["nr_categories"].where(
        group_cat_info["type"] != "bool", 2
    )

    group_cat_info["plot_type"] = group_cat_info["type"].replace(
        {"Categorical": "stacked_barplot", "bool": "barplot"}
    )
    group_cat_info["plot_type"] = group_cat_info["plot_type"].where(
        group_cat_info["len type"] == 1
    )
    group_cat_info["plot_type"] = group_cat_info["plot_type"].where(
        group_cat_info["nr_categories"] < 8
    )
    group_cat_info["plot_type"] = group_cat_info["plot_type"].fillna("no_plot")

    group_to_plot_types = group_cat_info["plot_type"].to_dict()
    return group_to_plot_types
