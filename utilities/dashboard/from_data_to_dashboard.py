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
    desc = desc[keep_cols]
    desc.dropna(how="all", inplace=True)

    # set index to new_name
    assert not desc["new_name"].duplicated().any(), "Duplicates in new_name."
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

    _check_groups_unique(desc)

    _check_nice_names_unique(desc)

    _check_data_types_do_not_vary_within_groups(desc=desc, data=data)

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


def _check_nice_names_unique(desc):
    gb = desc.groupby("group_english")["nice_name_english"]
    nn_by_group = gb.apply(lambda x: x.tolist())
    dup_by_group = nn_by_group.apply(lambda x: pd.Series(x).duplicated().any())
    dups = nn_by_group.apply(lambda x: pd.Series(x)[pd.Series(x).duplicated()])
    problems = dups[dup_by_group]
    if len(problems) > 0:
        msg = f"There are duplicates in the nice names of the groups:\n\t"
        msg += "\n\t".join(problems.index.tolist())
        raise AssertionError(msg)


def _check_data_types_do_not_vary_within_groups(desc, data):
    to_check = [
        x for x in desc["group_english"].unique() if x != "Background Variables"
    ]
    for group in to_check:
        vars_in_group = desc[desc["group_english"] == group].index
        dtypes = data[vars_in_group].dtypes
        assert len(set(dtypes)) == 1, f"Mixed dtypes in {group} \n {dtypes}"


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


def fix_numeric_variables(data):
    data = data.copy()
    data["trust_gov"] = pd.Categorical(data["trust_gov"], [1, 2, 3, 4, 5], ordered=True)

    data["trust_gov"] = data["trust_gov"].cat.rename_categories(
        {1: "1 no confidence at all", 2: "2", 3: "3", 4: "4", 5: "5 very confident"}
    )

    mood_vars = [
        "nervous",
        "depressed",
        "calm",
        "gloomy",
        "happy",
    ]
    for var in mood_vars:
        data[var] = pd.Categorical(data[var], ordered=True)
        data[var] = data[var].cat.rename_categories(
            {
                1.0: "never",
                2.0: "rarely",
                3.0: "sometimes",
                4.0: "often",
                5.0: "mostly",
                6.0: "constantly",
            }
        )

    concern_vars = [
        "nervous",
        "depressed",
        "calm",
        "gloomy",
        "happy",
    ]
    for var in concern_vars:
        data[var] = pd.Categorical(data[var], ordered=True)
        data[var] = data[var].cat.rename_categories(
            {
                1.0: "1 not concerned at all",
                2.0: "2",
                3.0: "3",
                4.0: "4",
                5.0: "5 very concerned",
            }
        )

    # get kdeplot for some variables
    convert_to_float = [
        "comply_curfew_others",
        "workplace_h_before", "workplace_h_after", "home_h_before", "home_h_after",
        "p_employed_keep", "p_employed_keep_gov", "p_employed_lost", "p_employed_other",
        "p_severe_financial_distress", "eur_1k_basic_needs", "eur_1k_expenses",
        "eur_1k_durables", "eur_1k_savings", "eur_1k_support_others",
        "p_selfempl_as_normal", "p_selfempl_fewer", "p_selfempl_shutdown_gov",
        "p_selfempl_shutdown_no_gov", "p_selfempl_other",
    ]
    for var in convert_to_float:
        data[var] = data[var].astype(float)

    return data


def add_background_variables(data, desc):
    data = data.copy()
    data["age_group"] = pd.cut(
        data["age"], [0, 40, 65, 150], labels=["<40", "40 to 65", ">65"]
    )

    data["educ"] = data["edu"].replace(
        {
            "hs_and_less": "High School",
            "jun_college": "Some College",
            "college": "College",
            "uni": "College",
        }
    )
    data["educ"] = pd.Categorical(
        data["educ"], ["High School", "Some College", "College"]
    )

    data["our_inc_group"] = pd.qcut(
        data["net_income_hh"], 3, ["low income", "middle income", "high income"]
    )

    data["health_group"] = data["health_general"].replace(
        {"poor": "moderate", "excellent": "very good"}
    )
    data["health_group"] = pd.Categorical(
        data["health_group"], ["moderate", "good", "very good"], ordered=True
    )

    bg_desc = pd.read_excel("background_var_description.xlsx")
    desc = pd.concat([desc, bg_desc])
    return data, desc


if __name__ == "__main__":
    lang = "english"
    dir_to_data = sys.argv[1]
    current_desc = pd.read_csv(
        dir_to_data + "covid19_data_description.csv", sep=";"
    )
    group_info = pd.read_csv("group_info.csv", sep=";")
    data = pd.read_pickle(dir_to_data + "covid_final_data_set.pickle")

    dashboard_description = dashboard_data_description(
        desc=current_desc, group_info=group_info, data=data
    )

    # HOT FIXES
    dashboard_description, group_info = drop_groups_with_no_vars_yet(
        desc=dashboard_description, group_info=group_info, data=data
    )
    data = fix_numeric_variables(data)


    data, dashboard_description = add_background_variables(data, desc=dashboard_description)

    overview_tab_data = create_overview_tab_data(
        data=data, data_desc=dashboard_description, group_info=group_info, language=lang
    )

    out_path = "overview_tab_data_current.pickle"
    with open(out_path, "wb") as f:
        pickle.dump(overview_tab_data, f)

    # path_to_app = utilities.__path__[0] + "/dashboard/dashboard_app.py"
    # command = f"bokeh serve --show {path_to_app} --args {out_path}"
    # os.system(command)
