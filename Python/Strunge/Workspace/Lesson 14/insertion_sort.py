
#Trav. through 1 --> len(l)
def insertion_sort(l):
    for i in range(1, len(l)):
        #Shows steps pr. runthrough (except final swap)
        print(l)
        key = l[i]
        j = i - 1
        while j >= 0 and key < l[j]:
            l[j + 1] = l[j]
            j -= 1
        l[j + 1] = key
    #Shows the final swap (final result)
    print(l)


#Drivercode (test)
l = [2, 1, 5, 12, 7, 8]
l = [1, 2, 5, 12 ,7, 8]

insertion_sort(l)

#Shows final (vertical)
for i in range(len(l)):
    print(f'{l[i]}')