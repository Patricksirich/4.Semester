def do_twice(func):

    def wrapper(*args, **kwargs):
        func(*args, **kwargs)
        func(*args, **kwargs)

    return wrapper

@do_twice
def say_whee():
    return 'whee'

say_whee()