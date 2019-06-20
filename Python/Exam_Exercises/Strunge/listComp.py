
thisList = [i for i in range(1,11)]
temp1 = []
temp2 = []
for i in thisList:
    if i == 1:
        #thisList[i-1] = 10
        temp1 = thisList[i-1] 

    if i == 10:
        #thisList[i-1] = 1
        temp2 = thisList[i-1]

thisList[0] = temp2
thisList[9] = temp1

#print(thisList)

