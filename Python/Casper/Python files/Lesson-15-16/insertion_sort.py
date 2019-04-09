# Traverse though l to len(l)

def insertion_sort(l):

    for i in range(1, len(l)):
        
        print(l)
        
        key = l[i]

        j = i-1

        while j >= 0 and key < l[j]:
            l[j+1] = l[j]
            j-=1
        l[j+1] = key
    
    print(l)


# Driver code to test above
l = [12, 11, 13, 5, 6, 19, 2]

insertion_sort(l)