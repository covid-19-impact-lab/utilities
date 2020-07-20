from setuptools import find_packages
from setuptools import setup

p = find_packages()
print(p)

setup(
    name="utilities",
    version="0.3.3",
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
            "dashboard/liss/provinces.geojson",
            "dashboard/gesis/provinces.geojson",
            "dashboard/*/*.txt",
            "dashboard/*/*.csv",
            "dashboard/*/*.yaml",
            "dashboard/*/*.py", ### WHY???
        ],
    },
    include_package_data=True,
)
