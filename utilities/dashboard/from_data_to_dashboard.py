import pickle
import sys
from pathlib import Path

import click
import pandas as pd

from utilities.dashboard.create_dashboard_data import create_dashboard_data
from utilities.dashboard.create_description_table import create_description_table
from utilities.dashboard.liss.data_functions import prepare_liss_data


@click.command()
@click.option(
    "--lang",
    type=click.Choice(["english", "german"], case_sensitive=False),
    prompt="Language",
    help="Dashboard language.",
)
@click.option(
    "--data_path",
    prompt="Path to dataset",
    help="Path to datasets folder, which must contain name of dataset (LISS or GESIS).",
)
@click.option(
    "--out_dir",
    prompt="Path to the output directory",
    help='Path to the output directory (e.g. "bld").',
)
@click.option(
    "--path_to_regions",
    prompt="Path to regions (press ENTER to use mock regions)",
    default="",
    help="Path to regions identifiers (geojson file). If not passed, mock regions will be used.",
)
def from_data_to_dashboard(lang, data_path, out_dir, path_to_regions):
    """Convert datasets to dictionaries that will be used by the dashboard
    components.

    """
    if path_to_regions == "":
        path_to_regions = None
    if "liss" in data_path:
        data_name = "liss"
    else:
        raise NotImplementedError(f"Only LISS supported so far.")

    # load data
    if data_name == "liss":
        raw_data_single = pd.read_pickle(f"{data_path}/covid_data_2020_03.pickle")
        raw_data_waves = pd.read_pickle(f"{data_path}/liss_all_waves_data.pickle")
        bg_data = pd.read_pickle(f"{data_path}/background_data_merged.pickle")

        # merge data
        raw_data_single["id"] = raw_data_single.index.get_level_values(0)
        bg_data["id"] = bg_data.index
        raw_data_single = raw_data_single.merge(bg_data, how="left", on="id")

    dashboard_path = Path(__file__).resolve().parent

    dataDict = {"single": raw_data_single, "waves": raw_data_waves}

    for suffix, raw_data in dataDict.items():
        if suffix == "waves":
            run_charts_desc = pd.read_csv(
                dashboard_path / data_name / "run_charts_description.csv",
                sep=";",
                encoding="latin3",
            )
            kwargs = {
                "data": raw_data,
                "run_charts_desc": run_charts_desc,
                "language": lang,
                "data_name": "liss",
            }

        elif suffix == "single":
            data = prepare_liss_data(raw_data, lang, path_to_regions)

            raw_group_info = pd.read_csv(
                dashboard_path / data_name / "group_info.csv",
                sep=";",
                encoding="latin3",
            )
            group_info = raw_group_info[raw_group_info[f"group_{lang}"].notnull()]

            raw_desc = pd.read_csv(
                dashboard_path / data_name / "data_description.csv",
                sep=";",
                encoding="latin3",
            )
            bg_desc = pd.read_csv(
                dashboard_path / data_name / "background_variables.csv",
                sep=";",
                encoding="latin3",
            )

            desc = create_description_table(
                raw_desc=raw_desc,
                background_table=bg_desc,
                group_info=group_info,
                data=data,
                language=lang,
            )

            kwargs = {
                "data": data,
                "data_desc": desc,
                "group_info": group_info,
                "language": lang,
                "data_name": "liss",
            }

        dashboard_data = create_dashboard_data(**kwargs)

        out_subdir = Path(out_dir).resolve() / data_name / lang
        out_subdir.mkdir(parents=True, exist_ok=True)

        pd.to_pickle(dashboard_data, out_subdir / f"dashboard_data_{suffix}.pickle")


if __name__ == "__main__":
    from_data_to_dashboard()
