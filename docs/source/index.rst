
COVID-19 Impact Lab Dashboard
=============================
The Covid Impact Lab Dashboard
================================

Installation
-------------

The package is available in the Anaconda Cloud.

The package relies on the covid-main environment.
To add the dashboard package to the environment use `pip install -e .` in the base
utilities folder.


Running the Dashboard
----------------------

To run the dashboard, there are two steps.

First, you must create the dictionaries with the aggregated data that will be passed to
the Bokeh app. To do so, call `process_dashboard_source_data.py`. You will be asked for
the following arguments:

- `Language`, which can be either `english` or `german`.
- `Path to dataset`, the path to the folder containing the Covid LISS datasets.
  The folder needs to contain three files, `background_data_merged.pickle` and
  `covid_data_2020_03.pickle` (for Group Differences Tab) and
  `liss_all_waves_data.pickle` (for Labor Supply Tab).
- `Path to the output directory`, where the dictionary of aggregate data should be
  saved.


This will generate `liss/{language}/dashboard_data_{suffix}.pickle`, where `suffix`
depends on the source LISS dataset, in the output directory you specified.

Secondly, you must start the Bokeh server passing the created pickle to it.
To do so, run `python run_dashboard.py`. You will be asked to specify the path
to the folder where the pickle files previously created resides.


Instructions for Uploading the Package to anaconda
---------------------------------------------------

Before uploading the package to the Anaconda Cloud, you need to bump the version.
This has to be done in the `__init__.py` in the outermost folder and in `setup.py`.

The package can be built and uploaded to anaconda using the command
`conda build . --user opensourceeconomics` in the main utilities repository.


Instructions for Adding a Component
-----------------------------------

.. toctree::
   :maxdepth: 1

   how_to_add_a_component

Instructions for Updating the Dashboard Data
--------------------------------------------

.. toctree::
   :maxdepth: 1

   how_to_update_dashboard_data
