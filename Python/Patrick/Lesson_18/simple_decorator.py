def my_decorator(func):

    def wrapper(*args, **kwargs):

        print('this comes first')
        func(*args, **kwargs)
        print('this coems last')

    return wrapper

@my_decorator
def say_whee(sound, x):
    print(sound * x)

@my_decorator
def be_awesome():
    print(f'Hi xxx together we are awesome')

say_whee('uuuuuh', 2)
be_awesome()

"""
x = my_decorator(say_whee)
x()
"""