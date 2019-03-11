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

if not os.path.exists('clones'):
        os.mkdir('clones')
os.chdir('clones')
"""
#This method pulls the repo instead of cloning it, if it exists the folder is on the specified path
for folder_name in lines:
        if 'name' in folder_name:
                folder_name = folder_name[8:-1]
        if os.path.exists(folder_name):
                os.chdir(folder_name)
                subprocess.run(['git', 'pull', 'origin', 'master'])
                os.chdir('..')

#if the path does not exist, clone the repository
if not os.path.exists(folder_name):
        for clone_url in lines:
                if 'clone_url' in clone_url:
                        currentUrls.append(clone_url[13:-1]) #slice the line, so that it only contains the URL we need.
                        subprocess.run(['git', 'clone', currentUrls])
"""

#Time to find all the .md files, put them in a list, and find the 'Required reading'
readmeFiles = []
readmeFull = []
for readme in glob.glob('C:/Users/Callo/OneDrive/Skrivebord/GitHub/4.Semester/Python/Casper/Mandatory-1/clones/*/readme.md'):
        
        readmeContend = open(readme).read()             #open every readme file
        readmeFiles.append(readmeContend)               #put every readme file in the readmeFiles list
        start = readmeContend.find('## Required reading')     #the beginning of the text we want from the readme file
        end = readmeContend.find('### Supplementary reading') #the end of the text we want from the readme file

        #if a readme file does not contain a required reading section, the method will skip the file
        if start == -1:
                continue
        
        requiredReading = readmeContend[start+19:end]

        readmeFull.append(requiredReading)

temp = ''.join(readmeFull)
print(temp)










