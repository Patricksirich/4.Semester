import One
from One import greeting

import sys
import os
import subprocess
from urllib.request import urlopen
from urllib.error import HTTPError


try:
    #http://kea.dk
    url = input('Please specify the url you want to be downloaded : ')

    res = urlopen(url)
    html = res.read().decode('utf-8')

    file = open('kea.html', 'w')
    file.write(html)

    subprocess.run(['open', 'kea.html'])



except NameError:
    print('No no no')

except UnicodeDecodeError:
    print('Url does not exist')

except HTTPError:
    print('Some error')

except FileNotFoundError:
    print('File not found')


#print(type(html)) #Printer objektets datatype
#print(html) #Printer objektets indhold


sys.exit()


os.mkdir('XXX')
os.chdir('XXX')

subprocess.run(['pwdgit', 'clone', '#SKRIV CLONE URL HER'])

print(greeting())



One.main()