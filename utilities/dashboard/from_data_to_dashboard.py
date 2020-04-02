import pickle
import sys
import pandas as pd

from utilities.dashboard.create_dashboard_data import create_dashboard_data


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
    keep_vars = [x for x in expected_vars if x in data.columns]
    old_len = len(desc)
    desc = desc.loc[keep_vars]
    len_after_var_drop = len(desc)
    if old_len - len_after_var_drop > 0:
        print(f"{old_len - len_after_var_drop} variables dropped because no data.")  # noqa
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
    grouped_topics = desc.groupby("group_english")["topic_english"]
    group_to_topics = grouped_topics.unique()
    nr_topics = group_to_topics.apply(len)
    problems = nr_topics[nr_topics != 1].index
    if len(problems) > 0:
        msg = f"The groups {problems} appear in more than one topic."
        raise AssertionError(msg)


def _process_data(data):
    data = data.copy()
    data = _fix_categories(data)
    data = _fix_numeric(data)
    #  data["base_mental_health"] =
    return data


def _fix_categories(data):
    data = data.copy()
    aprop_vars = [
        "nervous", "depressed", "calm", "gloomy", "happy",
        "nervous_back", "depressed_back", "calm_back", "gloomy_back", "happy_back"
    ]
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

    data["edu"] = data["edu"].cat.rename_categories({
        "hs_and_less": "High School Or Less",
        "jun_college": "Junior College",
        "college": "College",
        "uni": "University",
        })

    data["health_group"] = pd.Categorical(
        values=data["health_group"],
        categories=data["health_group"].dtype.categories[::-1],
        ordered=True)
    data["health_group"] = data["health_group"].cat.rename_categories(
        {"moderate": "moderate or less"})

    data["gender"] = data["gender"].cat.rename_categories(
        {"man": "men", "woman": "women"})

    data["duration_restrictions"] = data["duration_restrictions"].cat.rename_categories({
        "btw. April 6 and 2 months": "April 6 to 2 months",
        "btw. 2 and 4 months": "2 to 4 months",
        "btw. 4 and 8 months": "4 to 8 months",
        "btw. 8 and 12 months": "8 to 12 months",
        "for more than 1 year": "more than 1 year",
        })

    data["trust_gov"] = data["trust_gov"].cat.rename_categories({
        "1 no confidence at all": "1 <br> none at all",
        "5 a lot of confidence": "5 <br> a lot",
    })

    concern_vars = [
        "concern_bored",
        "concern_infect_others",
        "concern_loved_ill",
        "concern_serious_ill",
        "concern_health_care",
        "concern_fav_shop_bancrupt",
        "concern_company",
        "concern_unemp",
        "concern_new_job",
        "concern_food",
    ]
    for var in concern_vars:
        data[var] = data[var].cat.rename_categories(
            {1: "1 <br> not at all worried", 2:"2", 3:"3", 4:"4", 5: "5 <br> very worrried"})

    return data


def _fix_numeric(data):
    data = data.copy()
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


if __name__ == "__main__":
    lang = "english"
    dir_to_data = sys.argv[1]

    data = pd.read_pickle(dir_to_data + "covid_final_data_set.pickle")
    data = _process_data(data)

    desc = pd.read_csv(dir_to_data + "covid19_data_description_changed.csv", sep=";")
    desc = desc[desc["new_name"].notnull()]
    assert not desc["new_name"].duplicated().any()
    bg_desc = pd.read_excel("background_var_description.xlsx")
    doubled = [x for x in bg_desc["new_name"].values if x in desc["new_name"].values]
    assert len(doubled) == 0, "Doubles between data description and background."
    desc = pd.concat([desc, bg_desc])

    group_info = pd.read_csv("group_info.csv", sep=";")
    group_info = group_info[group_info["group_english"].notnull()]

    desc = dashboard_data_description(desc=desc, group_info=group_info, data=data)

    _check_groups_unique(desc)

    dashboard_data = create_dashboard_data(
        data=data, data_desc=desc, group_info=group_info, language=lang
    )

    out_path = "dashboard_data_current.pickle"
    with open(out_path, "wb") as f:
        pickle.dump(dashboard_data, f)

    # import os
    # import utilities
    # path_to_app = utilities.__path__[0] + "/dashboard/dashboard_app.py"
    # command = f"bokeh serve --show {path_to_app} --args {out_path}"
    # os.system(command)
