How to Add a Component
======================

Intro
-----

To integrate a new component into the dashboard you need to add a folder (e.g.
`maps`) in `utilities/dashboard/components`. The code that generates your component
should be divided into three modules:

- plotting module (e.g. `mapplot.py`), containing functions that process
  a relatively "raw" dataset and returns the statistics to be displayed in the
  plot, and functions that generate the component's plot.

- `create_data.py`, containing functions that process the data (which may include
  metadata, such as descriptive text) needed to create your component and returns
  a dictionary of aggregate data.

- `create_component.py`, containing functions that generate your component, which
  may be a combination of plot and descriptive text, and possibly add callbacks
  to make it interactive. Note that in the current dashboard layout
  each component is displayed in a separate bokeh Tab.

When you run the dashboard, `from_data_to_dashboard.py` will process the raw data
and output the resulting dictionaries to a directory you specify.
Note that the current version of the dashboard uses data from different raw datasets,
which result in different dictionaries.
`run_dashboard.py` will then use those dictionaries as inputs and assemble the
components to create the dashboard.

Therefore, to integrate your component in the existing code, you need to:

  - **Update the data-processing step**, such that `from_data_to_dashboard.py`
    additionally returns the dictionary you need to generate your component,
  - **Update the dashboard-building step**, such that your component is displayed
    together with the already existing Tabs.

The two sections below contain more specific information on these two steps.
The two overarching rules are: Make sure that your changes do not affect the
already existing dashboard's components, and try to make your component as
independent as possible.


Data-processing
---------------

The result of this step will be a dictionary of aggregate data, to be passed
to the functions that actually generate your component.

The source files to process can be:

  - A **raw dataset**, for instance a version of the LISS data. It needs to be in a
    folder whose path contains the name of the dataset, for instance "liss".
  - **Metadata**, which may be  datasets containing additional information on the
    variables your component uses, for example a mapping between variables' names
    and "nice names" to display, or descriptive text.

To update the data-processing step, you may need to modify functions in three
modules: `from_data_to_dashboard.py`, `create_dashboard_data.py` and `shared.py`.

Changes in `from_data_to_dashboard.py`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This is the top module. To add a new component you need to:

  - Specify the path to the raw dataset to be processed, and add its name to the
    `dataDict` dictionary. Each dataset used for the dashboard needs to have
    a unique name, which will identify the associated dictionary of aggregated data.
  - Specify the path(s) to metadata files that should be loaded
    together with the raw dataset.
  - Specify a dictionary of arguments to be passed to `create_dashboard_data`.
    The arguments will depend on the files to process, as explained in the
    function docstring. You can add new arguments to the function if necessary.

Changes in `create_dashboard_data.py`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The function `create_dashboard_data` in `create_dashboard_data.py` returns a
dictionary of aggregate data which will contain **data specific to each component**
and **data shared across components**, for example menu labels or variables'
"nice names".

The former are generated via the component-specific functions in
`create_data.py`, while the latter are generated via functions in `shared.py`.

The distinction between the two is somewhat artificial, as data which are
currently not shared across components may become shared when a new one is added.

To add a new component you need to:

  - Add new arguments, if necessary.
  - Include the functions in `create_data.py`, so that the data specific
    to your component are added to the dictionary of aggregated data.

Changes in `shared.py`
~~~~~~~~~~~~~~~~~~~~~~

The functions in `shared.py` create data shared across components. In particular,
`create_general_variable_mappings` generates a dictionary that allows to look up
variables' metadata.

To add a new component you need to:

  - Add new arguments, if necessary.
  - Add new items to the dictionary, if necessary.


Dashboard-building
------------------
This step creates the dashboard. You will only need to modify the function
`assemble_dashboard_components` in `app/main.py`, integrating both the function
that create your component's Tab and the newly created data.
