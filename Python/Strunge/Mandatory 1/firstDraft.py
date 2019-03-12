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
    if '"name"' in name:
        name = name[8:-1]
        print(name + 'TEST')
    if os.path.exists(name):
        os.chdir(name)
        subprocess.run(['git', 'pull', 'origin', 'master'])
        os.chdir('..')

#Check evt en else statement--
for folderName in lines:
    if 'clone_url' in folderName:
        pathName = folderName[62:-5]
        if not os.path.exists(pathName):
            print(folderName + 'TEST')
            cloneUrl = folderName[13:-1]
            urls.append(cloneUrl)
            subprocess.run(['git', 'clone', cloneUrl])
            

for rmFile in glob.glob('C:/Users/Bruger/Desktop/4.Semester/Python/Strunge/Mandatory 1/*/readme.md'):
    content = open(rmFile).read()

    readmefull.append(content)

    requiredReading = content.find('## Required reading') 
    suppReading = content.find('### Supplementary reading')

    if not requiredReading == -1:
        readme = content[requiredReading + 19:suppReading]
        readmeFinal.append(readme)

if not os.path.exists('curicullum'):
    os.mkdir('curicullum')
os.chdir('curicullum')

for string in readmeFinal:
    for smallString in string.split('*'):
        smallString = '*' + smallString[0:].strip()
        if smallString in readmeFinal:
            print(smallString + ' Already exists..')
            continue
        if len(smallString) < 2:
            continue
        smallString.capitalize()
        #if smallString[3].islower():
         #   smallString[3].upper()

        outputList.append(smallString)

file = open('Required_reading.md', 'w')
stringFinal = "\n".join(sorted(outputList))
file.write(stringFinal)
file.close()

comment = input('Comment: ')
#subprocess.run(['git', 'add', 'curicullum'])
subprocess.run(['git', 'commit', '-am', comment])
subprocess.run(['git', 'push', 'origin', 'master'])

