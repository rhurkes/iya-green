import requests
import json
import re

r = requests.get('http://weather.noaa.gov/pub/SL.us008001/DF.c5/DC.textf/DS.lsrnw/ls-lt')
lines = r.content.split(',')
for line in lines:
	parts = line.split(r'\s+')
	print parts[0]
