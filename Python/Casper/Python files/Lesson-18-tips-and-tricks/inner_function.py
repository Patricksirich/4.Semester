def parent():

    def first_child():
        print("Hi, i'm Casper, i'm the first child")

    def second_child():
        print("Hi, i'm Anna, i'm the second child")

    num = 1
    
    if num == 1:
        return first_child()

    else:
        return second_child()

parent()