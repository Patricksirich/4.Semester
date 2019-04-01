""" Calculater class that can add, subtrack, multiply and devide """

class Calculater:

    """ init takes 0 arguments """

    def __init__(self):

        # you should here create two instance variables
        # total and error_msg
        self.total = 0
        self.error_msg = ''

    def add(self, num):
        """ Add takes 1 argument an 'int' or 'float', 
            the number to add to 'total' """

        # Think of possible errors that could happen, 
        # and make tests for these errors
        # if type(num) not in [int, float]:
        #    raise ValueError('ADD ERROR')
        self.total += num

    def subtract(self, num):
        if type(num) not in [int, float]:
            raise ValueError('SUBTRACT ERROR')
        self.total -= num

    def multiply(self, num):
        if type(num) not in [int, float]:
            raise ValueError('MULTIPLY ERROR')
        self.total *= num

    def divide(self, num):
        if type(num) not in [int, float]:
            raise ValueError('DIVIDE ERROR')
        self.total /= num

    def __str__(self):
        return str(self.total)