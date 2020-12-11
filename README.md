Instructions for the Covid Impact Lab Dashboard
================================================

Creating the dashboard data
---------------------------

First, you must create the dictionary with the aggregated data that will be passed to
the bokeh app. To do so, call:

`python from_data_to_dashboard.py`

and follow the CLI. The arguments required are:

- `lang`, the dashboard language. It can be either english or german.

- `out_dir`, the path to the output directory.

- `path/to/data`, the path to the Covid LISS datasets folder, which needs to
contain two datasets: One, "liss_single_wave_data.pickle", for the Maps and Group
Differences tabs, and one, "liss_all_waves_data.pickle", for the Labor Supply tab.
Note that the name "liss" must appear in `path/to/data`.

- `path/to/region/ids`, the path to the regions identifiers. If not passed, mock regions
are created and you are warned about this.

This will create pickle files in `out_dir/data_name/lang/`, where `data_name` is
"liss".

Running the dashboard
---------------------

To start the bokeh server run:

`python run_dashboard.py`

The CLI will ask for the path to the dashboard data previously created, which is
`out_dir/data_name/lang/`.
