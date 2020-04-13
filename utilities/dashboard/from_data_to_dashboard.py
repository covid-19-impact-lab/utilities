import pickle
import sys
import pandas as pd
from pathlib import Path

from utilities.dashboard.create_dashboard_data import create_dashboard_data
from utilities.dashboard.liss.data_functions import prepare_liss_data
from utilities.dashboard.create_description_table import create_description_table

if __name__ == "__main__":
    lang = sys.argv[1]
    data_path = sys.argv[2]

    if "liss" in data_path:
        data_name = "liss"
    else:
        raise NotImplementedError(f"Only LISS supported so far.")

    if data_name == "liss":
        raw_data = pd.read_pickle(data_path)
        data = prepare_liss_data(raw_data, lang)

    dashboard_path = Path(__file__).resolve().parent
    raw_group_info = pd.read_csv(
        dashboard_path / data_name / "group_info.csv", sep=";", encoding="latin3"
    )
    group_info = raw_group_info[raw_group_info[f"group_{lang}"].notnull()]

    raw_desc = pd.read_csv(
        dashboard_path / data_name / "data_description.csv", sep=";", encoding="latin3"
    )
    bg_desc = pd.read_csv(
        dashboard_path / data_name / "background_variables.csv", sep=";", encoding="latin3"
    )
    desc = create_description_table(
        raw_desc=raw_desc,
        background_table=bg_desc,
        group_info=group_info,
        data=data,
        language=lang,
    )

    dashboard_data = create_dashboard_data(
        data=data,
        data_desc=desc,
        group_info=group_info,
        language=lang,
        data_name="liss",
    )

    out_path = "dashboard_data_current.pickle"
    with open(out_path, "wb") as f:
        pickle.dump(dashboard_data, f)

    import os
    from pathlib import Path

    path_to_app = dashboard_path / "app"
    command = f"bokeh serve --show {path_to_app} --args {out_path}"  # noqa
    os.system(command)
