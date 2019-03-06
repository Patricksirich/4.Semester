import One
from One import greeting

import sys
import os
import subprocess
from urllib.request import urlopen
from urllib.error import HTTPError

while True:

    try:
        # https://python-elective-2-spring-2019.github.io/
        url = input('Please specify the url you want to be downloaded : ')

        res = urlopen(url)
        html = res.read().decode('utf-8')

        file = open('kea.html', 'w')
        file.write(html)

        subprocess.run(['open', 'kea.html'])

        break

    except NameError:
        print('No no no')

    except UnicodeDecodeError:
        print('Url does not exist')

    except HTTPError as err:
        print('url does not exist, please type in a valid one!')

    except FileNotFoundError:
        print('File not found')


sys.exit()


os.mkdir('XXX')
os.chdir('XXX')

subprocess.run(['pwdgit', 'clone', '#SKRIV CLONE URL HER'])

print(greeting())



One.main()