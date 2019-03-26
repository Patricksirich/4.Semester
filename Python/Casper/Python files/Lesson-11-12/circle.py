from math import pi

def area(r):

    if type(r) not in [int, float]:
        raise TypeError('You can only pass in numeric values!')

    if r < 0:
        raise ValueError('You can not have a circle with a negative radius')
    return pi * r**2


def main():
    list = [1, 0, -3, True, 'Hello', [1, 2, 3]]

    try:
        for value in list:
            print(f'Area of Circle with r = {value} is {area(value)}')
    except ValueError as v:
        print(v)
    except TypeError as v:
        print(v)


if __name__ == "__main__":
    main()