f = open('newtext.txt', 'a+')
i = 1
for i in range(0,2):
    f.write(f'Appended line: {i+1} \n')