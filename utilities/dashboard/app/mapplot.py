import json
import numpy as np
import pandas as pd
from bokeh.models import GeoJSONDataSource
from utilities.colors import get_colors
from bokeh.plotting import figure
from bokeh.models import HoverTool, Div
from pandas.api.types import is_categorical_dtype, is_bool_dtype, is_numeric_dtype
from pathlib import Path
from bokeh.layouts import Column
from bokeh.layouts import Row


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
        binned = var.endswith("_binned")
        var_nice_name = nice_names[var]
        sr = data[var[:-7]] if binned else data[var]
        if is_categorical_dtype(sr):
            types[var_nice_name] = "Mean"  # Most Common for mode
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
        cats = data[data_var].cat.categories
    elif is_categorical_dtype(data[data_var]):
        values = gb.apply(lambda x: x.cat.codes.replace(-1, np.nan).mean())
        cats = data[data_var].cat.categories
    else:
        values = gb.apply(lambda x: x.mean())
        cats = [data[data_var].min(), data[data_var].mean(), data[data_var].max()]

    color_dict, legend_colors = _get_color_dict(values, data[data_var])

    for prov_dict in provinces["features"]:
        prov_name = prov_dict["properties"]["name"]
        val = values[prov_name]
        if typ == "Most Common":
            val_str = val
        elif typ == "Share":
            val_str = f"{100 * val:.0f}%"  # noqa
        elif is_categorical_dtype(data[data_var]):
            val_str = f"{val:.2f} ({cats[int(val)]})"
        elif data_var.startswith("p_"):  # mean probability
            val_str = f"{val:.0f}%"
        else:
            val_str = f"{val:.2f}"

        no_str_name = _compatible_str(nice_name)
        var_entries = {
            f"label_{no_str_name}": label,
            f"value_{no_str_name}": val_str,
            f"color_{no_str_name}": str(color_dict[val]),
            f"nobs_{no_str_name}": str(nobs[prov_name]),
            f"legend_colors_{no_str_name}": legend_colors,
        }
        prov_dict["properties"].update(var_entries)

    return provinces


def _get_color_dict(sr, full_data):
    if is_categorical_dtype(sr):
        categories = sr.cat.categories
        if sr.cat.ordered:
            colors = get_colors("blue-yellow", len(categories))
        else:
            colors = get_colors("categorical", len(categories))

        color_dict = {cat: col for cat, col in zip(categories, colors)}
        legend_colors = [(cat, col) for cat, col in zip(categories, colors)]

    elif is_numeric_dtype(sr):
        colors = get_colors("blue", 12)[::-1]
        if is_categorical_dtype(full_data):
            full_data = full_data.cat.codes.replace(-1, np.nan).dropna()
        q40 = full_data.quantile(0.25)
        q60 = full_data.quantile(0.75)
        min_ = min(q40, sr.min())
        max_ = max(q60, sr.max())
        linspace = np.linspace(min_ - 0.01, max_ + 0.01, 12)
        bins = pd.cut(sr, linspace)
        bin_cats = bins.cat.categories
        bin_to_color = {bin_: color for bin_, color in zip(bin_cats, colors)}
        color_dict = {val: bin_to_color[bin_] for val, bin_ in zip(sr, bins)}
        legend_colors = [(f"{bin_.mid:.2f}", bin_to_color[bin_]) for bin_ in bin_cats]
    else:
        raise AssertionError(f"{sr.name} is neihter categorical nor numeric")
    return color_dict, legend_colors


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
    var_nice_name = _compatible_str(var_nice_name)

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

    # add legend
    style_dict = {"text-align": "center", "vertical-align": "middle"}
    props_dict = json.loads(geo_source.geojson)["features"][0]["properties"]
    text_and_colors = props_dict[f"legend_colors_{var_nice_name}"]
    legend_entries = []
    entry_width = int(p.plot_width / len(text_and_colors))

    for x, c in text_and_colors:
        style_dict["color"] = c
        label_entry = Div(text=f"<b> {x} <b>", style=style_dict, width=entry_width)
        legend_entries.append(label_entry)

    legend_text = Row(*legend_entries, align="end", margin=(0, 25, 0, 0))
    layout = Column(p, legend_text)
    return layout


def _styled_map_figure():
    p = figure(
        x_axis_location=None, y_axis_location=None, name="map", toolbar_location=None,
    )
    p.outline_line_color = None
    p.grid.grid_line_color = None
    return p


def _compatible_str(s):
    to_replace = {
        "ä": "ae",
        "ö": "oe",
        "ü": "ue",
        " ": "_",
        "Ä": "Ae",
        "Ö": "Oe",
        "Ü": "Ue",
        "ß": "ss",
        ".": "_",
        "/": "_",
        ":": "_",
        "(": "_",
        ")": "_",
        "-": "_",
    }
    new_s = s
    for k, v in to_replace.items():
        new_s = new_s.replace(k, v)
    return new_s
