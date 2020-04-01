import os
import pickle
import sys
from pathlib import Path

import numpy as np
import pandas as pd
from pandas.api.types import is_bool_dtype
from pandas.api.types import is_categorical_dtype
from pandas.api.types import is_float_dtype
from pandas.api.types import is_integer_dtype

import utilities
from utilities.dashboard.create_dashboard_data import create_overview_tab_data


def dashboard_data_description(desc, group_info, data):
    # _check_no_variables_lost(current_desc=desc)

    # drop columns the dashboard does not use
    keep_cols = ["new_name", "group_english", "label_english", "nice_name_english"]
    desc = desc[keep_cols].copy()
    desc.dropna(how="all", inplace=True)

    # set index to new_name
    dup_new_names = desc[desc["new_name"].duplicated()]["new_name"].tolist()
    assert len(dup_new_names) == 0, f"{dup_new_names} are duplicate new names."
    assert desc["new_name"].notnull().all()
    desc.set_index("new_name", inplace=True)

    # use only groups from group info and add topic column from group info
    known_groups = group_info["group_english"].unique()
    desc = desc[desc["group_english"].isin(known_groups)]
    desc["topic_english"] = desc["group_english"].replace(
        group_info.set_index("group_english").to_dict()
    )

    # drop variables not in the final dataset
    expected_vars = desc.index
    to_drop = [x for x in expected_vars if x not in data.columns]
    keep_vars = [x for x in expected_vars if x in data.columns]
    all_cols = len(data.columns)
    old_len = len(desc)
    desc = desc.loc[keep_vars]
    len_after_var_drop = len(desc)
    print(f"{old_len - len_after_var_drop} variables dropped because no data.") # noqa
    return desc.reset_index()


def _check_no_variables_lost(current_desc):
    original_desc = pd.read_excel(
        "/home/klara/Dropbox/Desktop/original_covid19_data_description.xlsx"
    )
    orig_raw_to_new_name = (
        original_desc.set_index("liss")["new_name"].dropna().to_dict()
    )
    matched_by_hand = {
        "quarantaine_symptoms": "quarantine_symptoms",
        "quarantaine_no_symptoms": "quarantine_no_symptoms",
        "cc_coment": "cc_other_str",
        "not_work_fear_corona": "not_work_fear_infection",
        "less_work_fear_corona": "less_work_fear_infection",
        "postpone_purchase": "intend_postpone_purchase",
        "postpone_house": "intend_postpone_house",
        "reduce_housing": "intend_reduce_housing",
        "sell_shares": "intend_sell_shares",
        "buy_shares": "intend_buy_shares",
        "save_more": "intend_save_more",
        "no_consum_response": "intend_no_consum_response",
        "selfempl_less_bc_business": "selfempl_less_business",
        "selfempl_less_bc_care": "selfempl_less_care",
        "selfempl_less_bc_closure": "selfempl_less_closure",
        "selfempl_less_bc_other": "selfempl_less_other",
        "comply_bc_protect_vulnerable": "comply_bc_vulnerable",
        "cc_comment": "cc_emergency_comment",
        "not_work_emp_corona": "not_work_employer",
        "less_work_emp_corona": "less_work_employer",
    }

    current_raw_vars = current_desc["xyx-corona-questionnaire.dta"].unique()
    current_new_vars = current_desc["new_name"].unique()
    lost_vars = []
    for raw_name, new_name in orig_raw_to_new_name.items():
        if raw_name not in current_raw_vars:
            if new_name not in current_new_vars:
                if new_name not in matched_by_hand:
                    lost_vars.append((raw_name, new_name))
    assert len(lost_vars) == 0, f"You lost {lost_vars}"


def _check_groups_unique(desc):
    gb = desc.groupby("group_english")
    grouped_topics = desc.groupby("group_english")["topic_english"]
    group_to_topics = grouped_topics.unique()
    nr_topics = group_to_topics.apply(len)
    problems = nr_topics[nr_topics != 1].index
    if len(problems) > 0:
        msg = f"The groups {problems} appear in more than one topic."
        raise AssertionError(msg)


def drop_groups_with_no_vars_yet(desc, group_info, data):
    groups_without_vars = [
        "Duration of the Economic Crisis",
        "Probabilities of Economic Repercussions",
        "House Prices",
        "Consumption Plans Next 12 Months",
    ]
    group_info = group_info[~group_info["group_english"].isin(groups_without_vars)]
    desc = desc[~desc["group_english"].isin(groups_without_vars)]
    return desc, group_info


if __name__ == "__main__":
    lang = "english"
    dir_to_data = sys.argv[1]

    desc = pd.read_csv(
        dir_to_data + "covid19_data_description.csv", sep=";"
    )
    group_info = pd.read_csv("group_info.csv", sep=";")
    data = pd.read_pickle(dir_to_data + "covid_final_data_set.pickle")

    # =================================================================================
    # HOT FIXES
    # =================================================================================
    aprop_vars = ["nervous", "depressed", "calm", "gloomy", "happy"]
    aprop_cats = [
        (1, "never"),
        (2, "rarely"),
        (3, "sometimes"),
        (4, "often"),
        (5, "mostly"),
        (6, "constantly"),
    ]

    for col in aprop_vars:
        data[col] = data[col].replace({nl: en for nl, en in aprop_cats})
        data[col] = pd.Categorical(
            values=data[col], categories=[en for nl, en in aprop_cats], ordered=True
        )


    # handle trouble with duplicates
    dup_names = desc[desc["new_name"].duplicated()]["new_name"].tolist()
    if len(dup_names) > 0:
        print(f"\n\nDropping {dup_names} because they appear more than once\n\n")
        desc = desc.drop_duplicates(subset=["new_name"])

    bg_desc = pd.read_excel("background_var_description.xlsx")
    doubled = [x for x in bg_desc["new_name"].values if x in desc["new_name"].values]

    if len(doubled) > 0:
        print(f"\n\n{doubled} appear in both the normal and the background description.")
        desc = desc[~desc["new_name"].isin(doubled)]


    desc, group_info = drop_groups_with_no_vars_yet(
        desc=desc, group_info=group_info, data=data
    )

    # =================================================================================
    # ADD DOTPLOT BACKGROUND VARIABLES
    # =================================================================================


    # =================================================================================

    desc = pd.concat([desc, bg_desc])

    desc = dashboard_data_description(
        desc=desc, group_info=group_info, data=data
    )

    _check_groups_unique(desc)

    overview_tab_data = create_overview_tab_data(
        data=data, data_desc=desc, group_info=group_info, language=lang
    )

    out_path = "overview_tab_data_current.pickle"
    with open(out_path, "wb") as f:
        pickle.dump(overview_tab_data, f)

    path_to_app = utilities.__path__[0] + "/dashboard/dashboard_app.py"
    command = f"bokeh serve --show {path_to_app} --args {out_path}"
    os.system(command)
