"""Functions for LISS data preparation."""
import pickle
from pathlib import Path

import numpy as np
import pandas as pd
import yaml
from pandas.api.types import is_categorical
from pandas.api.types import is_float_dtype


def prepare_liss_data(data, language):
    data = data.copy()
    data = _fix_categories(data)
    data = _fix_numeric(data)
    data = _convert_floats_to_booleans(data)
    data = _add_variables(data)
#    data = _bin_variables(data)
    if language == "german":
        cat_path = Path(__file__).resolve().parent / "cats_to_german.yaml"
        with open(cat_path, "r") as f:
            cat_d = yaml.full_load(f)
        for col in data:
            if is_categorical(data[col]):
                data[col] = data[col].cat.rename_categories(cat_d)
    return data


def check_no_variables_lost(current_desc):
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
        "not_work_fear_corona": "empl_not_work_fear_infection",
        "less_work_fear_corona": "empl_less_work_fear_infection",
        "postpone_purchase": "intend_crisis_postpone_purchase",
        "postpone_house": "intend_crisis_postpone_house",
        "reduce_housing": "intend_crisis_reduce_housing",
        "sell_shares": "intend_crisis_sell_shares",
        "buy_shares": "intend_crisis_buy_shares",
        "save_more": "intend_crisis_save_more",
        "selfempl_less_bc_business": "selfempl_less_business",
        "selfempl_less_bc_care": "selfempl_less_care",
        "selfempl_less_bc_closure": "selfempl_less_closure",
        "selfempl_less_bc_other": "selfempl_less_other",
        "cc_comment": "cc_emergency_comment",
        "not_work_emp_corona": "empl_not_work_infection_empl",
        "less_work_emp_corona": "empl_less_work_infection_empl",
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

    # =====================================================================================


def _convert_floats_to_booleans(data):
    data = data.copy()
    vars = [
        col
        for col in data.columns
        if is_float_dtype(data[col]) and _check_value_counts(data[col])
    ]
    for var in vars:
        data[var] = data[var].astype("boolean")

    return data


def _check_value_counts(var):
    return sorted(var.value_counts().index.tolist()) == [0.0, 1.0]


def _fix_categories(data):
    data = data.copy()

    data["edu"] = data["edu"].cat.rename_categories(
        {
            "lower_secondary_and_lower": "Below Upper Secondary",
            "upper_secondary": "Upper Secondary",
            "tertiary": "Tertiary",
        }
    )

    data["health_group"] = pd.Categorical(
        values=data["health_group"],
        categories=data["health_group"].dtype.categories[::-1],
        ordered=True,
    )
    data["health_group"] = data["health_group"].cat.rename_categories(
        {"moderate": "moderate or less"}
    )

    data["gender"] = data["gender"].cat.rename_categories(
        {"male": "men", "female": "women"}
    )

    data["duration_restrictions_general"] = data[
        "duration_restrictions_general"
    ].cat.rename_categories(
        {
            "btw. April 6 and 2 months": "April 6 to 2 months",
            "btw. 2 and 4 months": "2 to 4 months",
            "btw. 4 and 8 months": "4 to 8 months",
            "btw. 8 and 12 months": "8 to 12 months",
            "for more than 1 year": "more than 1 year",
        }
    )

    #data["trust_gov"] = data["trust_gov"].cat.rename_categories(
    #    {
    #        "1 no confidence at all": "1 <br> none at all",
    #        "5 a lot of confidence": "5 <br> a lot",
    #    }
    #)

    return data


def _fix_numeric(data):
     data = data.copy()
     convert_to_float = [
         "p_2m_infected",
         "p_2m_acquaintance_infected",
         "p_2m_hospital_if_infect_self",
         "p_2m_infected_and_pass_on",
#         "p_2m_employee_keep",
#         "p_2m_employee_keep_gov",
#         "p_2m_employee_lost",
#         "p_2m_employee_other",
#         "eur_1k_basic_needs",
#         "eur_1k_expenses",
#         "eur_1k_durables",
#         "eur_1k_savings",
#         "eur_1k_support_others",
#         "p_3m_selfempl_normal",
#         "p_3m_selfempl_fewer",
#         "p_3m_selfempl_helped_by_gov",
#         "p_3m_selfempl_shutdown",
#         "p_3m_selfempl_other",
     ]
     for var in convert_to_float:
         data[var] = data[var].astype(float)
     return data


def _bin_variables(data):
    data = data.copy()

    self_empl_emp_vars = [
        "p_3m_selfempl_normal",
        "p_3m_selfempl_fewer",
        "p_3m_selfempl_helped_by_gov",
        "p_3m_selfempl_shutdown",
        "p_3m_selfempl_other",
    ]

    # empl_emp_vars = [
    #     "p_2m_employee_keep",
    #     "p_2m_employee_keep_gov",
    #     "p_2m_employee_lost",
    #     "p_2m_employee_other",
    # ]

    # for var in self_empl_emp_vars + empl_emp_vars:
    #     # cuts = [-1, 0.5, 50.0, 99, 110]
    #     # cuts = [-0.2, 0.2, 49.8, 50.2, 99.8, 100.3]
    #     cuts = [-0.2, 0.2, 10.2, 49.8, 50.2, 99.8, 100.3]
    #     data[var + "_binned"] = pd.cut(data[var], cuts)
    #     nice_cats = {}
    #     for intv in data[var + "_binned"].cat.categories:
    #         if intv.right - intv.left < 1:
    #             nice_cats[intv] = f"{int(intv.right)}%"
    #         else:
    #             nice_cats[intv] = "{} to {}%".format(int(intv.left), int(intv.right))
    #     data[var + "_binned"] = data[var + "_binned"].cat.rename_categories(nice_cats)

    # return data


def _zero_plus_quartiles(data, var):
    zeros = data[data[var] == 0].index
    new_name = var + "_binned"
    data[new_name] = pd.qcut(data[var][data[var] > 0], 4)
    nice_cats = {}
    for intv in data[new_name].cat.categories:
        nice_cats[intv] = "{} to {}%".format(int(intv.left), int(intv.right))
    data[new_name] = data[new_name].cat.rename_categories(nice_cats)
    data[new_name] = data[new_name].cat.add_categories(["0%"])
    data.loc[zeros, new_name] = "0%"
    right_order_cats = ["0%"] + data[new_name].cat.categories[:-1].tolist()
    data[new_name] = data[new_name].cat.reorder_categories(
        new_categories=right_order_cats, ordered=True
    )
    return data


def _add_variables(data):
    data = data.copy()

    data["hh_adults"] = data["hh_members"] - data["hh_children"]
    # we use the OECD factor, see https://bit.ly/2yu1cXs
    data["equiv_factor"] = 0.5 + 0.5 * data["hh_adults"] + 0.3 * data["hh_children"]
    data["equiv_net_inc"] = data["equiv_factor"] * data["net_income_hh"]
    fine_cuts = [
        -0.1,
        1500,
        2000,
        2500,
        3000,
        3500,
        4000,
        5000,
        6000,
        7000,
        8000,
        12000,
        1e7,
    ]
    data["inc_group_fine"] = pd.cut(data["equiv_net_inc"], fine_cuts)

    approx_quartiles = [-0.1, 2500, 4500, 7500, 1e7]
    labels = ["<2500", "2500 to 4500", "4500 to 7500", ">7500"]
    data["income_group"] = pd.cut(
        data["equiv_net_inc"], approx_quartiles, labels=labels
    )

    return data
