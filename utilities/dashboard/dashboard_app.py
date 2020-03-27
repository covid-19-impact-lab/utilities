"""
usage: bokeh serve run_dashboard.py --show --args path/to/overview_tab_data_dict.json

"""
import json
import sys

from bokeh.models import Tabs
from bokeh.plotting import curdoc
from create_overview_tab import create_overview_tab
from create_timeline_tab import create_timeline_tab


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
