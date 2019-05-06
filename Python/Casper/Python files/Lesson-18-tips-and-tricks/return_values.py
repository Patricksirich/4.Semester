def do_twice(func):
    def wrapper(*args, **kwargs):
        # Do something
        return func(*args, **kwargs)

        # Do something else
    

@do_twice
def say_whee():
    return 'Whee'

x = say_whee()
print(x)