def parent(num):
    def first_child():
        print('Hi im Claus, I am first in line')

    def secon_child():
        print('Hi im Anna, I am second in line')

    if num == 1:
        return first_child
    else:
        return secon_child