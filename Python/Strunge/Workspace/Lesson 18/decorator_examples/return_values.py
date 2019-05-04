def do_twice(func):
    def wrapper(*args, **kwargs):
        #func(*args, **kwargs)
        ## do something
        return func(*args, **kwargs)
        ## do something
        

    return wrapper

@do_twice
def say_whee():
    return '¤¤ Whee! ¤¤'

x = say_whee()
print(x)