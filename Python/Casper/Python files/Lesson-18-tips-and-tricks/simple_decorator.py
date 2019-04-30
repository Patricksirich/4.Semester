def my_decorator(func):

    def wrapper(*args, **kwargs):

        print('This comes first')
        func(*args, **kwargs)
        print('This comes second')

    return wrapper

@my_decorator
def say_whee(sound, x):
    print(sound * x)
    print(x)

def be_awesome(name):
    print(f'Hi {name}, together we are awesome')

say_whee('Uuuuhhhh\n', 2)
be_awesome('Lars')

"""
say_whee = my_decorator(say_whee)
say_whee()
"""

"""
*args = tuple
**kwargs = dict
"""
