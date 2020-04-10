import json
from bokeh.models import GeoJSONDataSource
from utilities.colors import get_colors
from bokeh.plotting import figure
from bokeh.models import HoverTool

def prepare_data(data, variables, nice_names, labels, provinces, prov_var):
    for var in variables:
        provinces = _add_mode_and_color_for_one_variable(
            data=data, provinces=provinces, prov_var=prov_var, data_var=var)
    return provinces


def _add_mode_and_color_for_one_variable(data, provinces, prov_var, data_var):
    # color palette
    sorted_cats = data[data_var].cat.categories
    colors = get_colors(palette="ordered", number=len(sorted_cats))
    color_dict = {name: color for name, color in zip(sorted_cats, colors)}

    # add data
    for prov_dict in provinces['features']:
        prov_name = prov_dict["properties"]["name"]
        prov_data = data.query(f"{prov_var} == '{prov_name}'")
        mode = prov_data[data_var].mode()[0]
        prov_dict["properties"][f"mode_{data_var}"] = mode
        prov_dict["properties"][f"color_{data_var}"] = color_dict[mode]

    return provinces

def setup_plot(provinces, data_var):
    geo_source = GeoJSONDataSource(geojson=json.dumps(provinces))
    p = figure(
        title="mock data",
        x_axis_location=None,
        y_axis_location=None,

    )
    p.grid.grid_line_color = None

    renderer = p.patches(
        'xs', 'ys', source=geo_source,
        fill_color={'field': f'color_{data_var}'},
        fill_alpha=0.7,
        line_color="white",
        line_width=0.5,
    )

    tooltips = [("Province", "@name"), ("Most Common Answer", f"@mode_{data_var}")]
    hover = HoverTool(tooltips=tooltips, renderers=[renderer])
    p.tools.append(hover)
    return p