# print out all numbers from n down to zero 
# Do it with a recursive approach and after that the same with a loop. 
# When this is done you should change the code so it will print out 0 to n instead
# (the numbers in accending order).


def number_recursion(n):
    if n == 0:
        print(0)
    else:
        print(n)
        number_recursion(n-1)

number_recursion(5)

def number_loop(n):
    sum = n
    for i in range(1, n):
        sum = sum * i
        print(sum)

number_loop(5)