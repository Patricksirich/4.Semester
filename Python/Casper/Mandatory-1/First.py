import sys
import os
import subprocess
from urllib.request import Request, urlopen
import urllib.response

url = ('https://api.github.com/orgs/python-elective-2-spring-2019/repos?per_page=100')
res = urlopen(url)
html = res.read().decode('utf-8')

urls = []
lines = html.split(',')

for line in lines:
    if 'clone_url' in line:
        urls.append(line[13:-1])

print(urls)   

subprocess.run(['git', 'clone', urls])

if __name__ == "__main__":
    pass


