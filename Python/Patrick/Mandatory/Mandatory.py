import sys
import os
import subprocess
import re
import glob
import urllib.request
from urllib.request import urlopen
from urllib.error import HTTPError


        # https://python-elective-2-spring-2019.github.io/
url = 'https://api.github.com/orgs/python-elective-2-spring-2019/repos?per_page=100'
response = urlopen(url)
parse = response.read().decode('utf-8')
row = parse.split(',')

array = []
clone_url = []

if not os.path.exists('clones'):
        os.mkdir('clones')

os.chdir('clones')

for x in row:
    if 'clone_url' in x:
        x = x[13:-1]
        print(x)
        array.append(x)
        subprocess.run(['git', 'clone', x])

readme = []
readmefull = []
for readmeFile in glob.glob('C:/Users/patri/Desktop/4.Semester/Python/Patrick/Mandatory/clones/*/readme.md'):
        content = open(readmeFile).read()

        required = content.find('## Required reading')
        supplementary = content.find('### Supplementary reading')

        requiredReading = content[required+18:supplementary]
        readme.append(content)
        readmefull.append(requiredReading)

print(readmefull)

#print(readme)  