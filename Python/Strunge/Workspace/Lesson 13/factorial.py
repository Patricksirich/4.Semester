# 5! = 5*4*3*2*1 = 120

# Recursive function

def factorial(n):
    #base case
    if n == 0:
        return 1

    #recursive part of function
    else:
        return n * factorial(n-1)

print(factorial(5))

def factorial_loop(n):
    sum = n
    for i in range(1, n):
        sum = sum * i

    return sum

print(factorial_loop(5))
