# Randomized order, no duplicates, appendable, not homogenous
testSet = {'1', '2', '3', '4', '5', 5, "Lars"}
# Ordered collection, mutable, appendable(add), not homogenous
testList = ['6', '7', '8', '9', '10', 11, 5+9, "Lars"]
# Immutable, not homogenous, not appendable
testTuple = ('Alpha', 'Beta', 'Gamma')
# Unordered, immutable, indexed collections
testDictionary = {'type': 'car', 'year': '1999'}

myList = [i for i in range(1,11) if i % 2 == 0]
myList[3] = None
print(myList)





