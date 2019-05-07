def parent(num):

    def first_child():
        print('Hi Im Claus, I am the first in line')

    def second_child():
        print('Hi Im Anna, I am the second in line')

    
    if num == 1:
        first_child()
    else:
        second_child()