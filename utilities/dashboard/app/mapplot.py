import json
import numpy as np
import pandas as pd
from bokeh.models import GeoJSONDataSource
from utilities.colors import get_colors
from bokeh.plotting import figure
from bokeh.models import HoverTool
from pandas.api.types import is_categorical_dtype, is_bool_dtype


def prepare_map_data(data, variables, nice_names, labels, data_name):
    """Prepare the map data for one group.

    Args:
        data (pd.DataFrame): The dataset that contains variable and background_variables.
        variables (list): Names of apd.Categorical variables of which the shares are calculated.
        bg_vars (list): pd.Categorical variables with background characteristics.
        nice_names (dict): Maps variables to nice names
        labels (dict): Maps variables to labels

    """
    provinces = _load_map_coordinates(data_name=data_name)
    for var in variables:
        provinces = _add_entries_for_one_variable(
            data=data,
            provinces=provinces,
            data_var=var,
            label=labels[var],
        )
    geo_source = GeoJSONDataSource(geojson=json.dumps(provinces))
    return geo_source


def setup_map(geo_source, data_var):
    p = _styled_map_figure()

    renderer = p.patches(
        "xs",
        "ys",
        source=geo_source,
        fill_color={"field": f"color_{data_var}"},
        fill_alpha=0.7,
        line_color="white",
        line_width=0.5,
    )

    tooltips = [
        ("Province", "@name"),
        ("Most Common Answer", f"@mode_{data_var}"),
        ("Question", f"@label_{data_var}"),
        ("No. Obs", f"@nobs_{data_var}"),
    ]
    hover = HoverTool(tooltips=tooltips, renderers=[renderer])
    p.tools.append(hover)
    return p


def _styled_map_figure():
    p = figure(
        x_axis_location=None,
        y_axis_location=None, name="map",
        toolbar_location=None,
    )
    p.outline_line_color = None
    p.grid.grid_line_color = None
    return p


def _add_entries_for_one_variable(data, provinces, data_var, label):
    color_dict = _get_color_dict(data[data_var].dropna())
    for prov_dict in provinces["features"]:
        prov_name = prov_dict["properties"]["name"]
        prov_sr = data.query(f"prov == '{prov_name}'")[data_var].dropna()
        mode = prov_sr.mode()[0]
        var_entries = {
            f"mode_{data_var}": str(mode),
            f"color_{data_var}": str(color_dict[mode]),
            f"label_{data_var}": label,
            f"nobs_{data_var}": str(len(prov_sr)),
        }
        prov_dict["properties"].update(var_entries)

    return provinces


def _load_map_coordinates(data_name):
    """Load and prepare the geo data.

    source for the Netherlands:
    https://www.webuildinternet.com/2015/07/09/geojson-data-of-the-netherlands/

    source for Germany:
    https://public.opendatasoft.com/explore/dataset/landkreise-in-germany/export/
    """
    with open(f"{data_name}/provinces.geojson", "r") as f:
        provinces = json.load(f)

    if data_name == "liss":
        # change Friesland (Fryslân) to Friesland
        for i, element in enumerate(provinces["features"]):
            if element["properties"]["name"] == "Friesland (Fryslân)":
                element["properties"]["name"] = "Friesland"
    else:
        raise NotImplementedError("Only LISS data supported at the moment.")

    return provinces


def _get_color_dict(sr):
    if is_categorical_dtype(sr):
        sorted_cats = sr.cat.categories
        sorted_cats = sr.unique()
        colors = get_colors("blue-yellow", len(sorted_cats))
        color_dict = {name: color for name, color in zip(sorted_cats, colors)}
    else:
        linspace = np.linspace(sr.min() - 0.2, sr.max() + 0.2, 12)
        colors = get_colors("blue-yellow", 12)
        bins = pd.cut(sr, linspace)
        bin_to_color = {bin_: color for bin_, color in zip(bins.cat.categories, colors)}
        color_dict = {val: bin_to_color[bin_] for val, bin_ in zip(sr, bins)}
    return color_dict
