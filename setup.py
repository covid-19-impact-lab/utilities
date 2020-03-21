from setuptools import find_packages
from setuptools import setup

setup(
    name="utilities",
    version="0.0.1",
    description="Package with code that has to be shared across repos of covid-19-impact-lab",
    license="MIT",
    url="https://github.com/covid-19-impact-lab/covidlab-utilities",
    author="COVID-19 Impact Lab",
    author_email="janos.gabler@gmail.com",
    packages=find_packages(),
    zip_safe=False,
    # package_data={"estimagic": ["optimization/algo_dict.json"]},
    # include_package_data=True,
)
