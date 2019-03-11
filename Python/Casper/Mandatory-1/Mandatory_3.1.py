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
                        subprocess.run(['git', 'clone', clone_url])


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

#We will now insert the required reading content into a new file.
#First we will check if our folder, the 'curriculum' folder, exists

os.chdir('..')                          #go 1 level up
if not os.path.exists('curriculum'):    #check if directory exists
        os.mkdir('curriculum')          #create directory if not
os.chdir('curriculum')                  #change directory to the 'curriculum' folder

#Now we will collect the data in a list, that further down will be written to a required_reading file
output_list = []
output_list.append('## Required Reading:')
for long_string in readmeFull:
        for single_string in long_string.split('*'):
                single_string = '*' + single_string[0:]
                single_string = single_string.strip()

                if single_string in output_list :
                        print(single_string + '     : Already exists.')
                        continue
                
                if len(single_string) < 5:
                        continue
                
                if single_string[3].islower():
                        single_string = single_string[0:3] + single_string[3].upper() + single_string[4:]

                output_list.append(single_string)

#now we create a file where the required reading should be written to
file = open('Required_reading.md', 'w')         #create a new file that are able to write to
long_string = "\n".join(sorted(output_list))    #sort the list
file.write(long_string)                         #write to the file
file.close()                                    #close the file

#finally i push the required reading to my github
os.chdir('..')
comment = input('Insert a comment for the push: ')
subprocess.run(['git', 'commit','-am', comment])
subprocess.run(['git', 'push', 'origin', 'master'])







