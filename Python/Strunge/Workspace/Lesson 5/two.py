import one

from one import greeting

import sys
import os
import subprocess
from urllib.request import urlopen
from urllib.error import HTTPError

while True:
    try:

        #https://github.com/python-elective-2-spring-2019/Lesson-05-Python-Utilities-and-Modules

        url = input('Please specify the url you want to download: ')
        res = urlopen(url)
        html = res.read().decode('utf-8')

        file = open('kea.html', 'w')
        file.write(html)

        subprocess.run(['open', 'kea.html'])

        break

    except NameError:
        print('NO!')

    except HTTPError as err:
        print('url does not exist please type in a valid url: ', err)
        continue

    # print(html)

    # print(html)

    # os.mkdir('XXX')
sys.exit()
os.chdir('XXX')

subprocess.run(['git', 'clone', 'https://github.com/python-elective-2-spring-2019/Lesson-05-Python-Utilities-and-Modules.git'])


print(greeting())

one.main()
