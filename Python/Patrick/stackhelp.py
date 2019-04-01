import subprocess as sp

t = open('output.txt', 'w')

command = 'netstat -ano > output.txt'
cmd = command.split(' ')
t.write(str(cmd))
sp.call(cmd)
t.close