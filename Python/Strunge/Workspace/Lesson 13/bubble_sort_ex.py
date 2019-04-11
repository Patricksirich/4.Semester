# Exercise Bubble sort
# Create the code for a function that uses the bubble sort algorithm

l = [4, 7, 1, 3, 2]

def bubble_sort(l):
    swap = False
    while not swap:
        #swaps = 0 --> return true
        length = len(l)
        swap = True
        #Also sorts in alphabetical eg. Strings
        for i in range(length-1):
            if l[i] > l[i+1]:
                swap = False
                temp = l[i]
                l[i] = l[i+1]
                l[i+1] = temp
    return l
                


print(bubble_sort(l))

#swapping 1:
#temp = l[0]
#l[0] = l[1]
#l[1] = temp

#l[0], l[1] = l[1], l[0]

#swapping 2:
#l[i], l[i-1] = l[i-1], l[i]