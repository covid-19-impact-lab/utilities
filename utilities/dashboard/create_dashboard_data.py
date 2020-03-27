from utilities.dashboard import stacked_barplot


plot_modules = {"stacked_barplot": stacked_barplot}


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
    res["groups"] = group_info[f"group_{language}"].unique().tolist()
    res["topics"] = group_info[f"topic_{language}"].unique().tolist()

    res["topic_to_groups"] = _dict_of_uniques_from_df(
        group_info, f"topic_{language}", f"group_{language}"
    )

    res["topic_to_header"] = group_info.set_index(f"topic_{language}")[
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

    res["group_to_plot_type"] = group_info.set_index(f"group_{language}")[
        "plot_type"
    ].to_dict()

    plot_data = {}
    for g in res["groups"]:
        plot_type = res["group_to_plot_type"][g]
        prepare_data = getattr(plot_modules[plot_type], "prepare_data")
        plot_data[g] = prepare_data(
            data=data,
            variables=res["group_to_variables"][g],
            bg_vars=internal_bg_vars,
            nice_names=res["variable_to_nice_name"],
        )

    res["plot_data"] = plot_data

    return res


def _dict_of_uniques_from_df(df, key_col, val_col):
    raw = df.groupby(key_col)[val_col].unique().to_dict()
    return {k: val.tolist() for k, val in raw.items()}
