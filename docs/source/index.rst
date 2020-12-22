
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

To run dashboard, there are two steps.

First, you must create the dictionaries with the aggregated data that will be passed to
the bokeh app. To do so, call `from_data_to_dashboard.py`. You will be asked for
the following arguments:

`Language`, which can be either english or german.

`Path to dataset`, the path to the folder containing the Covid LISS datasets
(as the dashboard is currently displaying data from multiple sources).

`Path to the output directory`, where the dictionary of aggregate data should be saved.

`Path to regions` (optional), the path to the regions' identifiers. Only Hans-Martin
has the true region codes. If no third argument is passed, mock regions are created
and you are warned about this.

This will generate `liss/{lang}/dashboard_data_{suffix}.pickle`, where `suffix`
depends on the source LISS dataset, in the output directory you specified.

Secondly, you must start the bokeh server passing the created pickle to it. To do so, run
`python run_dashboard.py`. You will be asked to specify the path to the folder
where the pickle files previously created resides.


Instructions for Uploading the Package to anaconda
---------------------------------------------------

Before uploading the package to the anaconda cloud, you need to bump the version.
This has to be done in the `__init__.py` in the outermost folder and in `setup.py`.

The package can be built and uploaded to anaconda using the command
`conda build . --user opensourceeconomics` in the main utilities repository.


Instructions for Adding a Component
-----------------------------------

.. toctree::
   :maxdepth: 1

   how_to_add_a_component
