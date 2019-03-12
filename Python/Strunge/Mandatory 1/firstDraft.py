import sys
import os
import subprocess
from urllib.request import urlopen
import urllib.error
import urllib.response
from urllib.error import HTTPError
import glob

url = 'https://api.github.com/orgs/python-elective-2-spring-2019/repos?per_page=100'
res = urlopen(url)
html = res.read().decode('utf-8')

lines = html.split(',')
urls = []
readmeFinal = []
readmefull = []
outputList = []

for name in lines:
# Define name from API (slice)
    if '"name"' in name:
        name = name[8:-1]
        print(name + ' ****TEST****')
# Check if path exists, if so do pull 
    if os.path.exists(name):
        os.chdir(name)
        subprocess.run(['git', 'pull', 'origin', 'master'])
        os.chdir('..')

for folderName in lines:
# Check if "clone_url" is part of string (line)
    if 'clone_url' in folderName:
# Make pathname for "if not" -remove all but path from API
        pathName = folderName[62:-5]
# Check if path exists already, if so do not enter clone
        if not os.path.exists(pathName):
            print(folderName + '****TEST****')
# Slice foldename so the "clean" url is present
            cloneUrl = folderName[13:-1]
# Add to list
            urls.append(cloneUrl)
# Clone process
            subprocess.run(['git', 'clone', cloneUrl])
            

for rmFile in glob.glob('C:/Users/Bruger/Desktop/4.Semester/Python/Strunge/Mandatory 1/*/readme.md'):
# Make content to the readable version of the file
    content = open(rmFile).read()
# Add to list
    readmefull.append(content)
# Make slicing points for later use (so we can find only what we need)
    requiredReading = content.find('## Required reading') 
    suppReading = content.find('### Supplementary reading')
# Check if readme file is empty (default value = -1)
    if not requiredReading == -1:
# Use predefined slicepoints
        readme = content[requiredReading + 19:suppReading]
# Add to list
        readmeFinal.append(readme)

# Check if directory is already created, else create it
if not os.path.exists('curicullum'):
    os.mkdir('curicullum')
os.chdir('curicullum')

for string in readmeFinal:
# Split on bulletpoints
    for smallString in string.split('*'):
# Create new bulletpoints in the beginning & remove whitespace
        smallString = '*' + smallString[0:].strip()
        if smallString in readmeFinal:
            print(smallString + ' Already exists..')
            continue
# Ignore "empty" lines
        if len(smallString) < 2:
            continue
        #smallString.capitalize()
        #if smallString[3].islower():
         #   smallString[3].upper()

        outputList.append(smallString)
# Create new .md fil with writeability
file = open('Required_reading.md', 'w')
# Make a final with a sorted version of outputlist
stringFinal = "\n".join(sorted(outputList))
# Write the stringfinal to the file
file.write(stringFinal)
file.close()

comment = input('Comment: ')
#subprocess.run(['git', 'add', 'curicullum'])
subprocess.run(['git', 'commit', '-am', comment])
subprocess.run(['git', 'push', 'origin', 'master'])

