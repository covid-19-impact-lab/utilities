"""
usage: bokeh serve run_dashboard.py --show --args path/to/overview_tab_data_dict.pickle

"""
import pickle
import sys
from pathlib import Path
from bokeh.plotting import curdoc
from utilities.dashboard.app.create_overview_tab import create_overview_tab

template_dir = Path(__file__).resolve().parent

dashboard_data_path = sys.argv[1]
with open(dashboard_data_path, "rb") as f:
    dashboard_data = pickle.load(f)

doc = curdoc()
if dashboard_data["overview"]["nth_str"] == "Nothing":
    doc.title = "Explore What People Believe and Do in Response to CoViD-19"
elif dashboard_data["overview"]["nth_str"] == "Nichts":
    doc.title = "Was Menschen zur Corona-Epidemie wissen, erwarten und tun"

overview_tab = create_overview_tab(**dashboard_data["overview"])
# corr_tab = create_corr_tab(dashboard_data["correlation"])
# timeline_tab = create_timeline_tab(dashboard_data["timeline"])
# tabs = Tabs(tabs=[overview_tab, corr_tab], name="tabs")
# doc.add_root(tabs)
doc.add_root(overview_tab)
