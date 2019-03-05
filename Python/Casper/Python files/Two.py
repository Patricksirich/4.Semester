import sys
import os
import subprocess
from urllib.request import urlopen
from urllib.error import HTTPError

while True:
    try:
        # https://github.com/python-elective-2-spring-2019
        url = input('Please specify the url you want to be downloaded : ')

        res = urlopen(url)
        html = res.read().decode('utf-8')

        file = open('kea.html', 'w')
        file.write(html)

        subprocess.run(['start', 'kea.html'])

        break


    except NameError:
        print('No no no')

    except UnicodeDecodeError:
        print('Some error')

    except HTTPError as err:
        print('Url does not exist')

    except FileNotFoundError:
        print('File not found')


# print(type(html)) #Printer objektets datatype
# print(html) #Printer objektets indhold


sys.exit()


os.mkdir('XXX')
os.chdir('XXX')

subprocess.run(['pwdgit', 'clone', '#SKRIV CLONE URL HER'])
