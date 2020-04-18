import json
import numpy as np
import pandas as pd
from bokeh.models import GeoJSONDataSource
from utilities.colors import get_colors
from bokeh.plotting import figure
from bokeh.models import HoverTool
from pandas.api.types import is_categorical_dtype, is_bool_dtype, is_numeric_dtype
from pathlib import Path


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
        binned = var.endswith('_binned')
        var_nice_name = nice_names[var]
        sr = data[var[:-7]] if binned else data[var]
        if is_categorical_dtype(sr):
            types[var_nice_name] = "Most Common"
        elif is_bool_dtype(sr):
            types[var_nice_name] = "Share"
        else:
            types[var_nice_name] = "Mean"
        provinces = _add_entries_for_one_variable(
            data=data,
            provinces=provinces,
            data_var=var[:-7] if binned else var,
            nice_name=var_nice_name,
            label=labels[var],
            typ=types[var_nice_name],
        )

    geo_source = GeoJSONDataSource(geojson=json.dumps(provinces))
    return geo_source, types


def _add_entries_for_one_variable(data, provinces, data_var, label, typ, nice_name):
    gb = data.groupby("prov")[data_var]
    nobs = gb.apply(len)

    if typ == "Most Common":  # categorical
        dtyp = data[data_var].dtype
        values = gb.apply(lambda x: x.mode()[0]).astype(dtyp)
    else:  # boolean and
        values = gb.apply(lambda x: x.mean())

    color_dict = _get_color_dict(values)

    for prov_dict in provinces["features"]:
        prov_name = prov_dict["properties"]["name"]
        val = values[prov_name]
        if typ == "Most Common":
            val_str = val
        elif typ == "Share":
            val_str = f"{100 * val:.0f}%"
        elif data_var.startswith('p_'): # mean probability
            val_str = f"{val:.0f}%"
        else: # mean and not probability
            val_str = f"{val:.0f}"

        no_str_name = nice_name.replace(" ", "_")
        var_entries = {
            f"label_{no_str_name}": label,
            f"value_{no_str_name}": val_str,
            f"color_{no_str_name}": str(color_dict[val]),
            f"nobs_{no_str_name}": str(nobs[prov_name]),
        }
        prov_dict["properties"].update(var_entries)

    return provinces


def _get_color_dict(sr):
    if is_categorical_dtype(sr):
        if sr.cat.ordered:
            colors = get_colors("blue-yellow", len(sr.cat.categories))
        else:
            colors = get_colors("categorical", len(sr.cat.categories))
        color_dict = {cat: col for cat, col in zip(sr.cat.categories, colors)}
    elif is_numeric_dtype(sr):
        colors = get_colors("blue-yellow", 12)
        linspace = np.linspace(sr.min() - 0.05, sr.max() + 0.05, 12)
        bins = pd.cut(sr, linspace)
        bin_to_color = {bin_: color for bin_, color in zip(bins.cat.categories, colors)}
        color_dict = {val: bin_to_color[bin_] for val, bin_ in zip(sr, bins)}
    else:
        raise AssertionError(f"{sr.name} is neihter categorical nor numeric")
    return color_dict


def _load_map_coordinates(data_name):
    """Load and prepare the geo data.

    source for the Netherlands:
    https://www.webuildinternet.com/2015/07/09/geojson-data-of-the-netherlands/

    source for Germany:
    https://public.opendatasoft.com/explore/dataset/landkreise-in-germany/export/
    """
    dashboard_path = Path(__file__).resolve().parent.parent
    with open(dashboard_path / data_name / "provinces.geojson", "r") as f:
        provinces = json.load(f)

    if data_name == "liss":
        # change Friesland (Fryslân) to Friesland
        for i, element in enumerate(provinces["features"]):
            if element["properties"]["name"] == "Friesland (Fryslân)":
                element["properties"]["name"] = "Friesland"
    else:
        raise NotImplementedError("Only LISS data supported at the moment.")

    return provinces


def setup_map(map_data, group, var_nice_name):
    translations = map_data["tooltips"]
    geo_source = map_data[group][0]
    typ = map_data[group][1][var_nice_name]
    var_nice_name = var_nice_name.replace(" ", "_")

    p = _styled_map_figure()

    renderer = p.patches(
        "xs",
        "ys",
        source=geo_source,
        fill_color={"field": f"color_{var_nice_name}"},
        fill_alpha=0.7,
        line_color="white",
        line_width=0.5,
    )

    tooltips = [
        (translations["Province"], "@name"),
        (translations["No. Obs"], f"@nobs_{var_nice_name}"),
        (translations["Question"], f"@label_{var_nice_name}"),
        (translations[typ], f"@value_{var_nice_name}"),
    ]

    hover = HoverTool(tooltips=tooltips, renderers=[renderer])
    p.tools.append(hover)
    return p


def _styled_map_figure():
    p = figure(
        x_axis_location=None, y_axis_location=None, name="map", toolbar_location=None,
    )
    p.outline_line_color = None
    p.grid.grid_line_color = None
    return p
