Instructions for the Covid Impact Lab Dashboard
================================================

Creating the dashboard data
---------------------------

First, you must create the dictionary with the aggregated data that will be passed to
the bokeh app. To do so, call:

`python process_dashboard_source_data.py`

and follow the CLI. The arguments required are:

- `lang`, the dashboard language. It can be either english or german.

- `out_dir`, the path to the output directory.

- `path/to/data`, the path to the Covid LISS datasets folder, which needs to
contain three datasets: Two, `background_data_merged.pickle` and
`covid_data_2020_03.pickle`, for the Group Differences tab, and one,
`liss_all_waves_data.pickle`, for the Labor Supply tab.
Note that the name "liss" must appear in `path/to/data`.

This will create pickle files in `out_dir/data_name/lang/`, where `data_name` is
"liss".

Running the dashboard
---------------------

To start the bokeh server run:

`python run_dashboard.py`

The CLI will ask for the path to the dashboard data previously created, which is
`out_dir/data_name/lang/`.
