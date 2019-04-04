def factorial(n):
    #base case 
    if n == 1:
        return 1
    #recursive part of function
    else: return n*factorial(n-1)


print(factorial(5))


def factorial_loop(n):
    sum = n
    for i in range(1, n):
        sum = sum * i
        
    return sum

print(factorial_loop(1))

def number_recursion(n):
    if n == 0:
        print (n)
    else:
        print(n)
        number_recursion(n-1)