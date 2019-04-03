# Exercise Bubble sort
# Create the code for a function that uses the bubble sort algorithm

l = [8, 2, 9, 5, 13, 82, 11, 666, 4]
swap = int
def bubble_sorting(l):

    swap = False
    while not swap:
        
        listLength = len(l)
        swap = True
        for i in range(listLength-1):
            if l[i] > l[i+1]:
                swap = False
                temp = l[i]
                l[i] = l[i+1]
                l[i+1] = temp
    return l

print(bubble_sorting(l))
