# List comprehensions are a way to make a new list with a dataset and conditions in one line.
# Examples:

# A list is a collection of ordered, mutable data.
# A list does not need to be homogenous: it can contain ints, strings and calculations
testList = [1, 2, 'lars', 2+2]

# A set is unordered and unindexed.
testSet = {'1', '2', 3, 6/2}

# Tuples are like lists, but immutable.
testTuple = ('Anna', 'Bob', 'Clara', 8, 9+9)

# Dictionarys are unordered, mutable and indexed collections
testDictionary = {
    'type': 'car',
    'age': '20',
    'topSpeed': '120'
    } 


# 1.1
# Creates a list comprehension in the integer range 1 to 11, where the list only consists of even numbers.
myList = [i for i in range (1,11) if i % 2 == 0]
print(myList)

# 1.2
# Create a list comprehension that swaps two integers place
# NOT WORKING
thisList = [i for i in range (0,10)]

for i in thisList:
    if i == 3:
        temp = thisList[i]
        thisList[i] = thisList[i+1]
        thisList[i+1] = temp
        
        
print(thisList)

