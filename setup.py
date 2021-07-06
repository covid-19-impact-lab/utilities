from setuptools import find_packages
from setuptools import setup

p = find_packages()
print(p)

setup(
    name="utilities",
    version="0.4.2",
    description=(
        "Package with code that has to be shared across repos of covid-19-impact-lab"
    ),
    license="MIT",
    url="https://github.com/covid-19-impact-lab/covidlab-utilities",
    author="COVID-19 Impact Lab",
    author_email="klara.roehrl@gmail.com",
    packages=p,
    zip_safe=False,
    package_data={
        "utilities": [
            "dashboard/app/static/*.*",
            "dashboard/app/templates/*.html",
            "dashboard/*/*.txt",
            "dashboard/*/*.csv",
            "dashboard/*/*.yaml",
            "dashboard/*/*.py",
            "dashboard/components/intro_page/metadata/*/*.*",
            "dashboard/components/run_charts/metadata/*.*",
            "dashboard/components/boxplots/metadata/*.*",
            "dashboard/components/univariate_distributions/metadata/*.*",
        ],
    },
    include_package_data=True,
)
