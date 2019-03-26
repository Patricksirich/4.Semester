from math import pi

def area(r):
    return pi * r**2

print(area(2))

list = [1, 0, -3, True, 'Hello']

for value in list:
    print(f'Area of Circle with r = {value} is {area(value)}')
