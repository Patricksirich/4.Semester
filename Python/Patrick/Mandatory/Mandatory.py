import sys
import os
import subprocess
import glob
import urllib.request


#task 1 && 2
url = 'https://api.github.com/orgs/python-elective-2-spring-2019/repos?per_page=100' #URL for the API that we want to call
#url = input('Please enter the desired API: ')  #Dynamic URL selection
response = urllib.request.urlopen(url) #Calls the API
parse = response.read().decode('utf-8') #Make it readable
row = parse.split(',') #Splits it after every comma to create individual lines

url_list = []


if not os.path.exists('clones'): #Check if directory exists
        os.mkdir('clones') #Creates new directory
os.chdir('clones') #Changes directory to new

#Method to pull repo instead of clone if it already exists in the destination.
for folder_name in row:
        if 'name' in folder_name:
                folder_name = folder_name[8:-1]
        if os.path.exists(folder_name):
                os.chdir(folder_name)
                subprocess.run(['git', 'pull', 'origin', 'master'])
                os.chdir('..')
                        
if not os.path.exists(folder_name):
        for clone_url in row: #goes through all the lines
                if 'clone_url' in clone_url: #Find all lines that contains the string 'clone_url'
                        clone_url = clone_url[13:-1] #Remove the '"clone_url": ' and the final ", to ensure that only the URL is left
                        url_list.append(clone_url) #Add the URL to the list
                        subprocess.run(['git', 'clone', clone_url]) #Clone the repo in our newly created directory

readme = []
readmefull = []
for readmeFile in glob.glob('C:/Users/patri/Desktop/4.Semester/Python/Patrick/Mandatory/clones/*/readme.md'): #Searches for Readme.md files in every subfolder in the 'clones' folder
        content = open(readmeFile).read()

        readmefull.append(content) #Task #3
        #Task #4
        required = content.find('## Required reading') #Find the index of the string '## Required reading'
        supplementary = content.find('### Supplementary reading') #---||--- '### Supplementary reading'

        if required == -1: #If the README does not contain a '## Required reading' section it will skip that file. 
                continue

        requiredReading = content[required+19:supplementary] #Add the string to the list 20 spaces from the start index as '## Required reading ' 
                                                               #is 20 characters
        readme.append(requiredReading) #Add the result to the list that we have created 
        

#Task 5
os.chdir('..') #Change directory to one back
if not os.path.exists('curriculum'): #Checks if the new directory already exists
        os.mkdir('curriculum') #Creates the new directory
os.chdir('curriculum') #Change directory to what we just created

#Task 5
output_list = []
output_list.append("## Required reading:\n > By Patrick Sirich - Python elective 2019")
for long_string in readme:                
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

#Task 6
#push to my own github repo
os.chdir('..')
comment = input('Please enter a comment for the push: ')
subprocess.run(['git', 'commit', '-am', comment])
subprocess.run(['git', 'push', 'origin', 'master'])

print('JOBS DONE!!!!')