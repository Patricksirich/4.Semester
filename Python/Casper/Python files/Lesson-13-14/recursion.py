"""
print out all numbers from n down to zero.
do it with a recursive approach and after that the same with a loop
When this is done, you should change the code so it will print out 0 to n instead
(the numbers in ascending order)
"""

def number_recursion(n):

    if n == 0:
        print(0)

    else:
        number_recursion(n-1)
        print(n)

number_recursion(5)

def number_loop(n):
    
    sum = n

    for i in range(0, n):
        
        sum = sum-1
        print(i)

    return sum

number_loop(5)