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
    types = {}
    for var in variables:
        if is_categorical_dtype(data[var]):
            types[var] = "Value"
        elif is_bool_dtype(data[var]):
            types[var] = "Share"
        else:
            types[var] = "Mean"
        provinces = _add_entries_for_one_variable(
            data=data,
            provinces=provinces,
            data_var=var,
            label=labels[var],
            typ=types[var],
        )

    geo_source = GeoJSONDataSource(geojson=json.dumps(provinces))
    return geo_source, types


def _add_entries_for_one_variable(data, provinces, data_var, label, typ):
    gb = data.groupby("prov")[data_var]
    nobs = gb.apply(len)

    if typ == "Value": # categorical
        values = gb.apply(lambda x: x.dropna().cat.codes.mean())
    else:
        values = gb.apply(lambda x: x.mean())

    color_dict = _get_color_dict(values)

    for prov_dict in provinces["features"]:
        prov_name = prov_dict["properties"]["name"]
        val = values[prov_name]
        if typ == "Value":
            val_str = f"{val:.1f} ({data[data_var].cat.categories[int(val)]})"
        elif typ == "Share":
            val_str = f"{100 * val:.0f}%"
        else:
            val_str = f"{val:.2f}"

        var_entries = {
            f"label_{data_var}": label,
            f"value_{data_var}": val_str,
            f"color_{data_var}": str(color_dict[val]),
            f"nobs_{data_var}": str(nobs[prov_name]),
        }
        prov_dict["properties"].update(var_entries)

    return provinces


def _get_color_dict(sr):
    linspace = np.linspace(sr.min() - 0.05, sr.max() + 0.05, 12)
    colors = get_colors("blue-yellow", 12)
    bins = pd.cut(sr, linspace)
    bin_to_color = {bin_: color for bin_, color in zip(bins.cat.categories, colors)}
    color_dict = {val: bin_to_color[bin_] for val, bin_ in zip(sr, bins)}
    return color_dict


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


def setup_map(geo_source, data_var, typ):
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
        ("No. Obs", f"@nobs_{data_var}"),
        ("Question", f"@label_{data_var}"),
    ]
    tooltips += [(typ, f"@value_{data_var}")]

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
