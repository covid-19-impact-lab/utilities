"""
usage: bokeh server run_dashboard.py --show --args path/to/overview_tab_data_dict.pickle

"""
import sys
from pathlib import Path

import pandas as pd
from bokeh.models import Panel
from bokeh.models import Tabs
from bokeh.plotting import curdoc

from utilities.dashboard.components.intro_page.create_component import create_intro_page
from utilities.dashboard.components.run_charts.create_component import create_run_charts
from utilities.dashboard.components.boxplots.create_component import create_boxplots
from utilities.dashboard.components.univariate_distributions.create_component import (
    create_univariate_distributions,
)


def assemble_dashboard_components(
    intro_page_data,
    univariate_distributions_data,
    univariate_distributions_data_april,
    shared_data,
    shared_data_april,
    run_charts_data,
    run_charts_mapping,
    boxplots_data,
    boxplots_mapping,
):
    """Create the dashboard tabs.

    Args:
        intro_page_data (dict): Data to generate Introduction tab.
        univariate_distributions_data (dict): Data to generate Group Differences
            tab.
        univariate_distributions_data (dict): Data to generate Group
            Differences: April tab.
        shared_data (dict): Metadata of Group Differences tab.
        shared_data_april (dict): Metadata of Group Differences: April tab.
        run_charts_data (dict): Data for Labor Supply tab.
        run_charts_mapping (dict): Metadata for Labor Supply tab.
        boxplots_data (dict): Data for Childcare tab.
        boxplots_mapping (dict): Metadata for Childcare tab.

    Returns:
        bokeh Column

    """

    intro_page = create_intro_page(**intro_page_data, language=shared_data["language"])

    univariate_distributions_page = create_univariate_distributions(
        **univariate_distributions_data,
        menu_labels=shared_data["menu_labels"],
        variable_mappings=shared_data["variable_mappings"],
    )

    run_charts_page = create_run_charts(
        data=run_charts_data,
        variable_mappings=run_charts_mapping["variable_mappings"],
        language=language,
        menu_labels=shared_data["menu_labels"],
    )

    boxplots_page = create_boxplots(
        data=boxplots_data,
        variable_mappings=boxplots_mapping["variable_mappings"],
        language=shared_data["language"],
        menu_labels=shared_data["menu_labels"],
    )

    univariate_distributions_april_page = create_univariate_distributions(
        **univariate_distributions_data_april,
        menu_labels=shared_data_april["menu_labels"],
        variable_mappings=shared_data_april["variable_mappings"],
    )


    if language == "german":
        tab_names = [
            "Einleitung",
            "Unterschiede zw. Gruppen: März 2020",
            "Unterschiede zw. Gruppen: April 2020",
            "Arbeitsangebot",
            "Kinderbetreuung"
        ]
    elif language == "english":
        tab_names = ["Introduction", "Group Differences: March 2020", "Group Differences: April 2020", "Labor Supply", "Childcare"]

    page = Tabs(
        tabs=[
            Panel(child=intro_page, title=tab_names[0]),
            Panel(child=univariate_distributions_page, title=tab_names[1]),
            Panel(child=univariate_distributions_april_page, title=tab_names[2]),
            Panel(child=run_charts_page, title=tab_names[3]),
            Panel(child=boxplots_page, title=tab_names[4]),
        ]
    )
    return page


# ======================================================================================
# The actual app
# ======================================================================================

data_dir = Path(sys.argv[1]).resolve()
dashboard_data_shared = pd.read_pickle(data_dir / "dashboard_data_single.pickle")
dashboard_data_april = pd.read_pickle(data_dir / "dashboard_data_single_april.pickle")
dashboard_data_waves = pd.read_pickle(data_dir / "dashboard_data_waves.pickle")
dashboard_data_boxplot = pd.read_pickle(data_dir / "dashboard_data_boxplot.pickle")

kwargs = {
    "intro_page_data": dashboard_data_shared["intro_page_data"],
    "univariate_distributions_data": dashboard_data_shared[
        "univariate_distributions_data"
    ],
    "univariate_distributions_data_april": dashboard_data_april[
        "univariate_distributions_data"
    ],
    "shared_data": dashboard_data_shared["shared_data"],
    "shared_data_april": dashboard_data_april["shared_data"],
    "run_charts_data": dashboard_data_waves["run_charts_data"],
    "run_charts_mapping": dashboard_data_waves["mapping"],
    "boxplots_data": dashboard_data_boxplot["boxplots_data"],
    "boxplots_mapping": dashboard_data_boxplot["mapping"],
}


language = dashboard_data_shared["shared_data"]["language"]

doc = curdoc()
if language == "english":
    doc.title = "Explore What People Believe and Do in Response to CoViD-19"
elif language == "german":
    doc.title = "Was Menschen zur Corona-Epidemie wissen, erwarten und tun"


overview_tab = assemble_dashboard_components(**kwargs)
# corr_tab = create_corr_tab(dashboard_data["correlation"])
# timeline_tab = create_timeline_tab(dashboard_data["timeline"])
# tabs = Tabs(tabs=[overview_tab, corr_tab], name="tabs")
# doc.add_root(tabs)
doc.add_root(overview_tab)
