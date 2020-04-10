import pickle
import pandas as pd

from utilities.dashboard.create_dashboard_data import create_dashboard_data
from utilities.dashboard.liss_data_functions import prepare_liss_data

# from utilities.dashboard.liss_data_functions import check_no_variables_lost


def dashboard_data_description(
    raw_desc, background_table, raw_group_info, data, language
):
    # check_no_variables_lost(current_desc=desc)

    desc = _reduce_description_table(raw_desc, language)
    desc = _add_background_vars(desc, background_table, language)
    desc = desc.set_index("new_name")
    desc = _use_group_info(desc, raw_group_info, language)
    desc = _keep_only_vars_in_the_data(desc, data)
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


def _use_group_info(desc, raw_group_info, language):
    group_info = raw_group_info[raw_group_info["group_english"].notnull()]
    known_groups = group_info[f"group_{language}"].unique()
    desc = desc[desc[f"group_{language}"].isin(known_groups)].copy()
    topic_sr = group_info.set_index(f"group_{language}")[f"topic_{language}"]
    group_to_topic = topic_sr.to_dict()
    desc[f"topic_{language}"] = desc[f"group_{language}"].replace(group_to_topic)
    return desc


def _keep_only_vars_in_the_data(desc, data):
    expected_vars = desc.index
    keep_vars = [x for x in expected_vars if x in data.columns]
    old_len = len(desc)
    desc = desc.loc[keep_vars]
    len_after_var_drop = len(desc)
    if old_len - len_after_var_drop > 0:
        print(
            f"{old_len - len_after_var_drop} variables dropped because no data."
        )  # noqa
    return desc


def _check_groups_unique(desc):
    grouped_topics = desc.groupby("group_english")["topic_english"]
    group_to_topics = grouped_topics.unique()
    nr_topics = group_to_topics.apply(len)
    problems = nr_topics[nr_topics != 1].index
    if len(problems) > 0:
        msg = f"The groups {problems} appear in more than one topic."
        raise AssertionError(msg)


if __name__ == "__main__":
    lang = "english"

    data = pd.read_pickle("data/liss_data.pickle")
    data = prepare_liss_data(data)

    desc = pd.read_csv("liss_data_description.csv", sep=";", encoding="latin3")
    group_info = pd.read_csv("liss_group_info.csv", sep=";", encoding="latin3")
    bg_desc = pd.read_csv("liss_background_variables.csv", sep=";", encoding="latin3")

    desc = dashboard_data_description(
        raw_desc=desc,
        background_table=bg_desc,
        raw_group_info=group_info,
        data=data,
        language=lang,
    )

    _check_groups_unique(desc)

    dashboard_data = create_dashboard_data(
        data=data, data_desc=desc, group_info=group_info, language=lang
    )

    out_path = "dashboard_data_current.pickle"
    with open(out_path, "wb") as f:
        pickle.dump(dashboard_data, f)

    import os
    from pathlib import Path

    path_to_app = Path(__file__).resolve().parent / "app"
    command = f"bokeh serve --show {path_to_app} --args {out_path}"  # noqa
    os.system(command)
