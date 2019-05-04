def my_decorator(func):

    def wrapper(*args, **kwargs):

        print('This comes first')
        func(*args, **kwargs)
        print('This comes last')

    return wrapper

@my_decorator
def say_whee(sound, x):
    print(sound * x)


@my_decorator
def be_awesome():
    print(f'Hi xxx zusammen we are awesome')

say_whee('Reeeee!', 5)
be_awesome()

"""say_whee = my_decorator(say_whee)
say_whee()"""

"""
*args = tuple
**kwargs = dict
"""