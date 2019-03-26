from math import pi

def area(r):
    if r < 0:
        raise ValueError('You can not have a circle with a negative radius')
    return pi * r**2


def main():
    list = [1, 0, -3, True, 'Hello']

    for value in list:
        print(f'Area of Circle with r = {value} is {area(value)}')


if __name__ == "__main__":
    main()