import sys
import os
import subprocess
from urllib.request import Request, urlopen
import urllib.response
import glob

url = ('https://api.github.com/orgs/python-elective-2-spring-2019/repos?per_page=100')
res = urlopen(url)
html = res.read().decode('utf-8')

currentUrls = []
lines = html.split(',')

for line in lines:
    if 'clone_url' in line:
        currentUrls.append(line[13:-1])

i = 0
"""
while i < len(currentUrls):

    subprocess.run(['git', 'clone', currentUrls[i]])
    i += 1
"""

readmeFiles = []
for readme in glob.glob('C:/Users/Callo/OneDrive/Skrivebord/GitHub/4.Semester/Python/Casper/Mandatory-1/*/*.md'):
        
        readmeContend = open(readme).read()
        readmeFiles.append(readmeContend)




readmeString = ''.join(readmeFiles)


##print required reading ud. Find ud af at lave en delimiter
points = readmeString.split(' ')
requiredFiles = []
for point in points:
        if 'Required reading' in point:
                requiredFiles.append(point)

requiredString = ''.join(requiredFiles)
print(requiredString)
