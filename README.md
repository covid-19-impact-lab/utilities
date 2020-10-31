Instructions for the Covid Impact Lab Dashboard
================================================

Creating the dashboard data
---------------------------

First, you must create the dictionary with the aggregated data that will be passed to
the bokeh app. To do so, call the `from_data_to_dashboard.py` with the following arguments:

`python from_data_to_dashboard.py [lang] [path/to/data], [out_dir], [path/to/region/ids]`

`lang` can be either english or german.

`out_dir` path to the output directory

`path/to/data` must be the path to the Covid LISS dataset.

`path/to/region/ids` is the path to the regions identifiers. If not passed, mock regions
are created and you are warned about this.


This will create pickle files in out_dir/data_name/lang/


Running the dashboard
---------------------

To start the bokeh server run:

`python run_dashboard.py data_dir`

Example:

`python run_dashboard.py bld/liss/english`
