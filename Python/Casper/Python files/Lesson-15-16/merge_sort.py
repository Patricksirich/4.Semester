def mergeSort(list):

    print("Splitting: ", list)

    # State that if the length of the list is bigger than 1, split the list in two
    if len(list) > 1:
        
        mid = len(list)//2                          # mid-splitter is the length of the list divided by two
        left = list[:mid]                           # left half of list from index 0 to mid
        right = list[mid:]                          # right half of list from index mid to end

        # recursion
        mergeSort(left)
        mergeSort(right)

        i = 0                                       # counter for left list
        j = 0                                       # counter for right list
        k = 0                                       # counter for total list

        # while the counter i is smaller than the length of the left half of the list
        # and the counter j is smaller than the right half of the list
        while i < len(left) and j < len(right):
            
            if left[i] < right[j]:                  # if the index i of the left half is smaller than the right half of index j
                list[k] = left[i]                   # put index i of the left half into the index k of the list
                i = i+1                             # increment i to go to the next index i in the left list
            
            else:
                list[k] = right[j]                  # put element j of the right list on index k
                j = j+1                             # increment j to go to the next index j in the right list
            k = k+1                                 # increment k to go to the next list index

        while i < len(left):
            list[k] = left[i]                       # place index i from the left list on index k, which was incremented on line 37
            i = i+1                                 # increment i to go to the next element in the left list
            k = k+1                                 # increment k to go to the next index in the complete list

        while j < len(right):
            list[k] = right[j]                      # place index j from the right list on index k, which was incremented on line 37
            j = j+1                                 # increment j to go to the next element in the right list
            k = k+1                                 # increment k to go to the next index in the complete list

    print("Merging:   ", list)


list = [54, 26, 93, 17, 77, 31, 44, 55, 20]
mergeSort(list)
print(list)
