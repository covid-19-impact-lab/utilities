"""
usage: bokeh serve run_dashboard.py --show --args path/to/overview_tab_data_dict.pickle

"""
import sys
from pathlib import Path

import pandas as pd
from bokeh.models import Panel
from bokeh.models import Tabs
from bokeh.plotting import curdoc

from utilities.dashboard.components.intro_page.create_component import create_intro_page
from utilities.dashboard.components.maps.create_component import create_maps
from utilities.dashboard.components.univariate_distributions.create_component import (
    create_univariate_distributions,
)


def assemble_dashboard_components(
    intro_page_data,
    general_variable_mappings,
    group_to_plot_type,
    background_variables,
    plot_data,
    map_data,
    menu_labels,
    language,
):
    """Create the overview tab showing the distribution of any group of variables.

    Args:


    Returns:
        page (bokeh Column)

    """

    intro_page = create_intro_page(**intro_page_data, language=language)

    map_page = create_maps(
        map_data=map_data,
        menu_labels=menu_labels,
        variable_mappings=general_variable_mappings,
    )

    univariate_distributions_page = create_univariate_distributions(
        group_to_plot_type=group_to_plot_type,
        background_variables=background_variables,
        variable_mappings=general_variable_mappings,
        plot_data=plot_data,
        menu_labels=menu_labels,
    )

    if language == "german":
        tab_names = ["Einleitung", "Karten", "Unterschiede zw. Gruppen"]
    elif language == "english":
        tab_names = ["Introduction", "Maps", "Group Differences"]

    page = Tabs(
        tabs=[
            Panel(child=intro_page, title=tab_names[0]),
            Panel(child=map_page, title=tab_names[1]),
            Panel(child=univariate_distributions_page, title=tab_names[2]),
        ]
    )
    return page


data_dir = Path(sys.argv[1]).resolve()
dashboard_data = pd.read_pickle(data_dir / "dashboard_data.pickle")

language = dashboard_data["language"]

doc = curdoc()
if language == "english":
    doc.title = "Explore What People Believe and Do in Response to CoViD-19"
elif language == "german":
    doc.title = "Was Menschen zur Corona-Epidemie wissen, erwarten und tun"


overview_tab = assemble_dashboard_components(**dashboard_data)
# corr_tab = create_corr_tab(dashboard_data["correlation"])
# timeline_tab = create_timeline_tab(dashboard_data["timeline"])
# tabs = Tabs(tabs=[overview_tab, corr_tab], name="tabs")
# doc.add_root(tabs)
doc.add_root(overview_tab)
