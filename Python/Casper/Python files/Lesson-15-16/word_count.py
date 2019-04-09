import sys
import time
import math
import random


text = sys.argv[1]
elm = sys.argv[2]

f = open(text)
text = f.read()
list = text.split()


def liniear_search(l, e):
    number = 0
    for i in range(len(l)):
        if l[i] == e:
            number += 1
    return number


def liniear_search_sorted(l, e):
    number = 0
    for i in range(len(l)):
        if l[i] == e:
            number += 1
        if l[i] > e:
            return number
    return number


def bubble_sort(L):
    swap = False
    while not swap:
        #print('bubble sort: ' + str(L))
        swap = True
        for j in range(1, len(L)):
            if L[j-1] > L[j]:
                swap = False
                temp = L[j]
                L[j] = L[j-1]
                L[j-1] = temp
    return L

# Monkey Sort


def is_sorted(l):
    for i in range(len(l)-1):
        if l[i] > l[i+1]:
            return False
    return True


def bogo_sort(l):
    while not is_sorted(l):
        random.shuffle(l)


print()
start = time.time()
# linear search for unsorted list
num = liniear_search(list, elm)
print('linear search on unsorted')
print('========')

print(f'{elm} was in the file {num} times')
end = time.time()
print('The scripts execusion time was', format(end - start, '.6f'), 'seconds')
print('========')

print()
print('Bubble Sort')
print('========')

start = time.time()
sorted_list = bubble_sort(list)
end = time.time()

print('The scripts execusion time was', format(end - start, '.6f'), 'seconds')
print('========')

print()
print('linear search on sorted')
print('========')

start = time.time()
num = liniear_search_sorted(sorted_list, elm)
end = time.time()
print(f'{elm} was in the file {num} times')
print('The scripts execusion time was', format(end - start, '.6f'), 'seconds')
print('========')

start = time.time()
# linear search for unsorted list
num = liniear_search(sorted_list, elm)
print()
print('linear search on sorted list with unsorted function')
print('========')
print(f'{elm} was in the file {num} times')
end = time.time()
print('The scripts execusion time was', format(end - start, '.6f'), 'seconds')
print('========')


start = time.time()
print()
print('sorted() - (Python build in function)')
print('========')
sorted(list)
end = time.time()
print('The scripts execusion time was', format(end - start, '.6f'), 'seconds')
print('========')


start = time.time()
print()
print('Insertion sort - (not implemented)')
print('========')
end = time.time()
print('The scripts execusion time was', format(end - start, '.6f'), 'seconds')
print('========')


start = time.time()
print()
print('Monkey sort  - (not implemented)')
print('========')
end = time.time()
print('The scripts execusion time was', format(end - start, '.6f'), 'seconds')
print('========')

start = time.time()
print()
print('Merge sort - (not implemented)')
print('========')
end = time.time()
print('The scripts execusion time was', format(end - start, '.6f'), 'seconds')
print('========')

start = time.time()
print()
print('Tim sort - (not implemented)')
print('========')
end = time.time()
print('The scripts execusion time was', format(end - start, '.6f'), 'seconds')
print('========')
