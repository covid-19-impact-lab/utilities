"""
usage: bokeh serve run_dashboard.py --show --args path/to/overview_tab_data_dict.json


"""
import json
import sys

from bokeh.models import Tabs
from bokeh.plotting import curdoc
from create_overview_tab import create_overview_tab
from create_timeline_tab import create_timeline_tab


def dashboard_app(doc, overview_tab_data_path, timeline_tab_data=None):
    """Start the dashboard visualizing data.

    Args:
        doc (bokeh Document)
        overview_tab_data (str or Pathlib.path): path to a json dictionary of the form:
            "groups": ["Risk of getting and spreadin", ....],
            "topics": ["core econ", "no econ", ....],
            "topic_to_groups": {"topic1": ["some group", "some other group"]},
            "group_to_header": {"group1": "some header", ...}
            "group_to_plot_type": {"group_1": "barplot"},
            "background_vars": ["gender", ...],
            "plot_data": {nested dict},
            "group_to_variables": {group1: [var1, var2], ...},
            "variable_to_label": {var1: label1, ...},
        timeline_tab_data
        no_browser (bool, optional): If True the dashboard does not open in the browser.
        port (int, optional): Port where to display the dashboard.

    """


# =====================================================================================
overview_tab_data_path = sys.argv[1]
with open(overview_tab_data_path, "r") as f:
    overview_tab_data = json.load(f)

timeline_tab_data = None

doc = curdoc()
doc.title = "Hello, let's look at some data :-)"

overview_tab = create_overview_tab(**overview_tab_data)
timeline_tab = create_timeline_tab(timeline_tab_data)
tabs = Tabs(tabs=[overview_tab, timeline_tab], name="tabs")
doc.add_root(tabs)
