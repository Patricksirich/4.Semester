import sys
import os
import subprocess
from urllib.request import Request, urlopen
import urllib.response
import glob

#the API we want to read from
url = ('https://api.github.com/orgs/python-elective-2-spring-2019/repos?per_page=100')
#Opening the API
res = urlopen(url)
#Decoding the API, making it readable
html = res.read().decode('utf-8')
#Split the text after each comma
lines = html.split(',')

#Initializing an empty list to hold the URL's we want to find
currentUrls = []

#statement to put clone URLs in list
for line in lines:
    if 'clone_url' in line:
        currentUrls.append(line[13:-1])

if not os.path.exists('clones'):
        os.mkdir('clones')
os.chdir('clones')

for folder_name in lines:
        if 'name' in folder_name:
                folder_name = folder_name[8:-1]
        if os.path.exists(folder_name):
                os.chdir(folder_name)
                subprocess.run(['git', 'pull', 'origin', 'master'])
                os.chdir('..')
        """else:
                i = 0
                while i < len(currentUrls):
                        subprocess.run(['git', 'clone', currentUrls[i]])
                        i += 1"""


readmeFiles = []
for readme in glob.glob('C:/Users/Callo/OneDrive/Skrivebord/GitHub/4.Semester/Python/Casper/Mandatory-1/*/*.md'):
        
        readmeContend = open(readme).read()
        readmeFiles.append(readmeContend)

readmeString = ''.join(readmeFiles)
print(readmeString)

requiredList = []
required = readme.find('##Required reading')
supplementary = readme.find('###Supplementary reading')

requiredReading = readmeContend[required+18:supplementary]
requiredList.append(requiredReading)

temp = ''.join(requiredList)

