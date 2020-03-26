from setuptools import find_packages
from setuptools import setup

setup(
    name="utilities",
    version="0.0.3",
    description=(
        "Package with code that has to be shared across repos of covid-19-impact-lab"
    ),
    license="MIT",
    url="https://github.com/covid-19-impact-lab/covidlab-utilities",
    author="COVID-19 Impact Lab",
    author_email="janos.gabler@gmail.com",
    packages=find_packages(),
    zip_safe=False,
    package_data={
        "utilities": ["covid19_data_description.csv", "test_data_cleaning.ipynb"]
    },
    include_package_data=True,
)
