

def factorial(n):
    # Base case
    if n == 1:
        return 1

    # recursive part of function
    else:
        return n * factorial(n-1)


print(factorial(5))

def factorial_loop(n):
    
    sum = n

    for i in range(1, n):
        
        sum = sum * i

    return sum

print(factorial_loop(5))