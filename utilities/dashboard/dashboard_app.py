"""
usage: bokeh serve run_dashboard.py --show --args path/to/overview_tab_data_dict.pickle

"""
import pickle
import sys
from pathlib import Path

from bokeh.models import Tabs
from bokeh.plotting import curdoc
from jinja2 import Environment
from jinja2 import FileSystemLoader

from utilities.dashboard.create_overview_tab import create_overview_tab
from utilities.dashboard.create_timeline_tab import create_timeline_tab

template_dir = Path(__file__).resolve().parent

overview_tab_data_path = sys.argv[1]
with open(overview_tab_data_path, "rb") as f:
    overview_tab_data = pickle.load(f)

timeline_tab_data = None

doc = curdoc()

env = Environment(loader=FileSystemLoader(template_dir))
curdoc().template = env.get_template("index.html")

doc.title = "The LISS Dataset"

overview_tab = create_overview_tab(**overview_tab_data)
timeline_tab = create_timeline_tab(timeline_tab_data)
tabs = Tabs(tabs=[overview_tab, timeline_tab], name="tabs")

doc.add_root(tabs)
