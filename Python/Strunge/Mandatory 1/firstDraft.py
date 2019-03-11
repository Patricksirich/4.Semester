import sys
import os
import subprocess
from urllib.request import urlopen
import urllib.error
import urllib.response
from urllib.error import HTTPError


url = 'https://api.github.com/orgs/python-elective-2-spring-2019/repos?per_page=100'
res = urlopen(url)
html = res.read().decode('utf-8')

# print(html)
count = 0
lines = html.split(',')
urls = []
# print(lines)

for line in lines:
    if 'clone_url' in line:
        urls.append(line[13:-1])

        count += 1
        print(count)

i = 0
while i < len(urls):
    print(urls[i])
    subprocess.run([
        'git', 'clone', urls[i]])
    i += 1

# print(urls)
#subprocess.run([
#    'git', 'clone', urls])
