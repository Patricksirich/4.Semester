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
                        
if not os.path.exists(folder_name):
        for clone_url in lines: #goes through all the lines
                if 'clone_url' in clone_url: #Find all lines that contains the string 'clone_url'
                        clone_url = clone_url[13:-1] #Remove the '"clone_url": ' and the final ", to ensure that only the URL is left
                        currentUrls.append(clone_url) #Add the URL to the list
                        subprocess.run(['git', 'clone', clone_url]) #Clone the repo in our newly created directory

readmeFiles = []
for readme in glob.glob('C:/Users/Callo/OneDrive/Skrivebord/GitHub/4.Semester/Python/Casper/Mandatory-1/clones/*/readme.md'):
        
        readmeContend = open(readme).read()
        start = readmeContend.find('## Required reading')
        end = readmeContend.find('### Supplementary reading')

        if start == -1:
                continue
        
        requiredReading = readmeContend[start+19:end]

        readmeFiles.append(requiredReading)

temp = ' '.join(readmeFiles)

os.chdir('..')

if not os.path.exists('curriculum'):
        os.mkdir('curriculum')
os.chdir('curriculum')

output_list = []
output_list.append("## Required reading:")
for long_string in readmeFiles:                
        for single_line in long_string.split("*"): #Splits it into singlelines so we can check for duplicates
                single_line = '*' + single_line[0:] # Add a '*' to the beginning of the string to make it a bulletpoint
                single_line = single_line.strip() #Removes all unnecessary whitespaces
                
                if single_line in output_list: #Checks if the line is a duplicate (does not work)
                        print(single_line + '     :Exists!')
                        continue

                if len(single_line) < 5: #Skips empty lines
                        continue

                if single_line[3].islower(): #changes lower-case to upper case (only checks the 3rd char of the string) and then adds the rest of the string
                        single_line = single_line[0:3] + single_line[3].upper() + single_line[4:]

                single_line.replace('  ', ' ').replace('   ', ' ').replace('    ', ' ').replace('     ', ' ') #Removes consecutive whitespaces (2, 3, 4 or 5)
                
                output_list.append(single_line)

file = open('Required_reading.md', 'w') #Create new file 
large_string = "\n".join(sorted(output_list)) #Sorts the list
file.write(large_string) #Writes to the file
file.close() #Close the file for good practice

os.chdir('..')
comment = input('Please enter a comment for the push: ')
subprocess.run(['git', 'commit', '-am', comment])
subprocess.run(['git', 'push', 'origin', 'master'])