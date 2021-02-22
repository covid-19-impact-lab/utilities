"""Build the data description table for creating the overview_tab data."""
import pandas as pd

# from utilities.dashboard.liss_data_functions import check_no_variables_lost


def create_description_table(raw_desc, background_table, group_info, data, language):
    # check_no_variables_lost(current_desc=desc)
    desc = _reduce_description_table(raw_desc, language)
    desc = _add_background_vars(desc, background_table, language)
    desc = desc.set_index("new_name")
    desc = _use_group_info(desc, group_info, language)
    desc = _keep_only_vars_in_the_data(desc, data)
    _check_groups_unique(desc, language)
    _check_vars_in_every_group(desc, language)
    return desc.reset_index()


def _reduce_description_table(raw_desc, language):
    keep_cols = [
        "new_name",
        f"group_{language}",
        f"label_{language}",
        f"nice_name_{language}",
    ]
    desc = raw_desc[keep_cols]
    desc = desc[desc["new_name"].notnull()]
    return desc


def _add_background_vars(desc, bg_desc, language):
    assert not desc["new_name"].duplicated().any()

    keep_cols = [
        "new_name",
        f"group_{language}",
        f"topic_{language}",
        f"label_{language}",
        f"nice_name_{language}",
    ]

    bg_desc = bg_desc[keep_cols]
    bg_desc = bg_desc[bg_desc["new_name"].notnull()]

    doubled = [x for x in bg_desc["new_name"].values if x in desc["new_name"].values]
    assert len(doubled) == 0, "Doubles between data description and background."

    desc = pd.concat([desc, bg_desc])

    dup_new_names = desc[desc["new_name"].duplicated()]["new_name"].tolist()
    assert len(dup_new_names) == 0, f"{dup_new_names} are duplicate new names."
    assert desc["new_name"].notnull().all()

    return desc


def _use_group_info(desc, group_info, language):
    present_groups = desc[f"group_{language}"].unique()
    known_groups = group_info[f"group_{language}"].unique()
    missing_in_desc = [x for x in known_groups if x not in present_groups]
    assert (
        len(missing_in_desc) == 0
    ), f"The following groups are in group_info but not in the dataset: {missing_in_desc}"
    # to_drop = [x for x in present_groups if x not in known_groups]
    # print("Dropping from data description:\n\t" + "\n\t".join(str(x) for x in to_drop))
    desc = desc[desc[f"group_{language}"].isin(known_groups)].copy()
    topic_sr = group_info.set_index(f"group_{language}")[f"topic_{language}"]
    group_to_topic = topic_sr.to_dict()
    desc[f"topic_{language}"] = desc[f"group_{language}"].replace(group_to_topic)
    return desc


def _keep_only_vars_in_the_data(desc, data):
    expected_vars = desc.index
    keep_vars = [x for x in expected_vars if x in data.columns]
    dropped_vars = [x for x in expected_vars if x not in data.columns]
    old_len = len(desc)
    desc = desc.loc[keep_vars]
    len_after_var_drop = len(desc)
    if old_len - len_after_var_drop > 0:
        print(
            f"""{old_len - len_after_var_drop} variables dropped because no data.
            Variablest lost: {dropped_vars}"""
        )  # noqa
    return desc


def _check_groups_unique(desc, language):
    grouped_topics = desc.groupby(f"group_{language}")[f"topic_{language}"]
    group_to_topics = grouped_topics.unique()
    nr_topics = group_to_topics.apply(len)
    problems = nr_topics[nr_topics != 1].index
    if len(problems) > 0:
        msg = f"The groups {problems} appear in more than one topic."
        raise AssertionError(msg)


def _check_vars_in_every_group(desc, language):
    gb = desc.groupby(f"group_{language}")
    nr_uniques_by_group = gb.apply(lambda x: len(x.index.unique()))
    assert (
        nr_uniques_by_group > 0
    ).all(), "Some groups have no variables:\n\t" + "\n\t".join(
        nr_uniques_by_group[nr_uniques_by_group == 0].index.tolist()
    )
