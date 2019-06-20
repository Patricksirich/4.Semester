def bisect_search(l, e):
    """ takes a list of integers and an integer to search for
        Returns true if element is in list, False if not """

    def bisect_search_helper(l, e, low_index, high_index):

        # if only 1 element in list
        if high_index == low_index:
            # return true if the 1 element is = e
            return l[low_index] == e # True

        # get the index of the middle element of the list
        mid = (low_index + high_index)//2 # int

        # check if the middle element is the right element
        if l[mid] == e:
            return True

        # if middle element value is > e, then the element can only be 
        # in the low indexed list 
        elif l[mid] > e:
            if low_index == mid:  # nothing left to search - if a list is of 2 elements then the middle would be index 0
                return False
            else:
                return bisect_search_helper(l, e, low_index, mid - 1) # low part of the list

        # if middle element value is < e then the element can only be 
        # in the high indexed list
        else:
            return  bisect_search_helper(l, e, mid + 1, high_index) # hiogh part of the list

    if len(l) == 0:
        return False
    else:
        return bisect_search_helper(l, e, 0, len(l) - 1)