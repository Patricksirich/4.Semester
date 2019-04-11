"""Do the code for the merge sort algorithm
Step 1 − if it is only one element in the list it is already sorted, return.
Step 2 − divide the list recursively into two halves until it can no more be divided.
Step 3 − merge the smaller lists into new list in sorted order."""

l = [5, 4, 0, 6, 1, 3, 2]
print('Working with list of: ', l)

def mergeSort(l):
    print('Working on list:', l, "Splitting")
# Dividing into single elements lists, by slicing first/second from start to mid/mid to end.
# Repeat until len(l) is not bigger than 1.
    if len(l) > 1:
        mid = len(l)//2
        first = l[:mid]
        second = l[mid:]

# Call method on respective parts of list
        mergeSort(first)  # first half
        mergeSort(second)  # second half

# Starts at index 0 for later use in first / second.
        i = 0
        j = 0
# Starts at index 0 for final sorted list
        k = 0

# For as long as i is smaller than len(first) AND j is smaller than len(second):
        while i < len(first) and j < len(second):
# If first on i's place and lower than second on j's place, set i of first as k of l(listname), and increment i
            if first[i] < second[j]:
                l[k] = first[i]
                i = i+1
# Else other way around (j of second as k of l(listname))
            else:
                l[k] = second[j]
                j = j+1
# Increment k no matter what, as there will alway be added an element
            k = k+1


        while i < len(first):
# Place index i from the first list on index k, which was incremented on line 37
            l[k] = first[i]
# Increment i to go to the next element in the first list
            i = i+1
# Increment k to go to the next index in the complete list
            k = k+1

# While counter j is less than the length of the second list
        while j < len(second):
# Place index j from the second list on index k, which was incremented on line 37
            l[k] = second[j]
# Increment j to go to the next element in the second list
            j = j+1
# Increment k to go to the next index in the complete list
            k = k+1
    print("Working on list: ", l, "Merging")


mergeSort(l)
print('Finally: ', l)
