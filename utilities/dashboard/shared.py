from bokeh.models.widgets import Div

from utilities.dashboard.config import HEADER_STYLE


def adjust_lower_level_selection_menu_to_higher_level(
    attr, old, new, high_to_lower, lower_selector, caption_func=None, map_page=None
):
    """Adjust lower level select menu according to new higher level."""
    new_groups = high_to_lower[new]
    lower_selector.options = new_groups
    lower_selector.value = new_groups[0]
    if caption_func is not None:
        map_page.children[-1] = caption_func(group=new)


def create_caption_for_variable_group(
    group,
    group_to_header,
    group_to_caption,
    group_to_variables,
    variable_to_nice_name,
    variable_to_label,
):
    variables = group_to_variables[group]
    nice_vars = [variable_to_nice_name[var] for var in variables]
    labels = [variable_to_label[var] for var in variables]
    text = group_to_header[group]
    if len(variables) > 1:
        text += "<br> <br>" + "<br>".join(
            f"<b>{name}</b>: {label}" for name, label in zip(nice_vars, labels)
        )
    if isinstance(group_to_caption[group], str):
        text += "<br> <br>" + group_to_caption[group]

    element = Div(text=text, name="bottom", margin=(20, 0, 10, 0), style=HEADER_STYLE)
    return element


def create_general_variable_mappings(
    data, data_desc, group_info, language, data_name,
):
    """Create a dict of dicts that allows to look up metadata of variables.

    We use the following terminology:

    topic: A section of the questionnaire. All variables in that section
        are somehow related.

    groups: A set of variables. All variables in a group belong to the same topic
        and take the same values.


    Note: This applies to the very first wave of the covid data and might not be
    useful for components that make use of several waves.


    Args:
        data (pd.DataFrame): The empirical dataset.
        data_desc (pd.DataFrame): Description of the dataset.
        group_info (pd.DataFrame): Description of groups.
        language (str): One of ["english", "german", "dutch"]
        data_name (str): "liss" or "gesis"

    Returns:
        dict: Dictionary with the following entries:
            - "topics": List of strings
            - "topic_to_groups": dict
            - "group_to_header": dict
            - "group_to_caption": dict
            - "group_to_variables": dict
            - "variable_to_label": dict
            - "variable_to_nice_name": dict
            - "nice_name_to_variable": dict

    """
    res = {}
    raw_groups = group_info[f"group_{language}"].unique().tolist()  # noqa
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

    nice_names = data_desc.set_index("new_name")[f"nice_name_{language}"].to_dict()
    res["variable_to_nice_name"] = nice_names
    res["variable_to_label"] = data_desc.set_index("new_name")[
        f"label_{language}"
    ].to_dict()

    res["nice_name_to_variable"] = {v: k for k, v in nice_names.items()}

    return res


def _dict_of_uniques_from_df(df, key_col, val_col):
    raw = df.groupby(key_col)[val_col].unique().to_dict()
    return {k: val.tolist() for k, val in raw.items()}
