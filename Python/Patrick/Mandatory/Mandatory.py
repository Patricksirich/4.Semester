import sys
import os
import subprocess
import re
import glob
import urllib.request
from urllib.request import urlopen
from urllib.error import HTTPError


#Opgave 1 og 2
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
x = 1   #Testing purpose
for readmeFile in glob.glob('C:/Users/patri/Desktop/4.Semester/Python/Patrick/Mandatory/clones/*/readme.md'):
        content = open(readmeFile).read()

        readmefull.append(content) #Opgave #3

        required = content.find('## Required reading') #-----> OPGAVE #4
        supplementary = content.find('### Supplementary reading')       

        if required == -1:
                continue

        #print('REQUIRED: ' + str(x) + str(readmeFile) + ' REQUIRED: ' + str(required))                  #Print for at se hvilken readme den arbejder i + indexet for ## Required reading
        #print('SUPPLEMENTARY: ' + str(x) + str(readmeFile) + ' SUPPLEMENTARY: ' + str(supplementary))   #Print for at se hvilken readme den arbejder i + indexet for ### Supplementary reading
        x+= 1
        requiredReading = content[required+18:supplementary]
        readme.append(requiredReading) #<-----
        
os.chdir('..')
os.mkdir('curriculum')
os.chdir('curriculum')
output_list = []
for long_string in readmefull:
        for one_line in long_string.split("/n"):
                        output_list.append(one_line.capitalize())

file = open('Required_reading', 'w')
for one_line in sorted(output_list):
        file.write(one_line)


#print(readmefull)
#print(readme)