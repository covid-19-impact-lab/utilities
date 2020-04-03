from bokeh.layouts import layout
from bokeh.plotting import curdoc
from bokeh.models import Toggle
from jinja2 import Environment, FileSystemLoader
import os
from bokeh.models import ColumnDataSource, Column, Panel, Tabs
from bokeh.plotting import figure



default_toggle = Toggle(label="Default Toggle")

layout = layout([[default_toggle]])


env = Environment(loader=FileSystemLoader(os.getcwd()))
curdoc().template = env.get_template("minimal_index.html")

curdoc().add_root(layout)
