""" Calculater class that can add, subtrack, multiply and devide """

class Calculator:

    """ init takes 0 arguments """

    def __init__(self):

        # you should here create two instance variables
        # total and error_msg
        self.total = 0
        self.error_msg = ''

    def add(self, num):     

        if type(num) not in [int, float]:
            raise ValueError('Invalid value! input must be an integer.')
        
        if num > 10000:

            raise OverflowError('Number too big!')    

        self.total += num
        
    def subtrack(self, num):
        
        if type(num) not in [int, float]:

            raise ValueError('Invalid type!')

        self.total -= num
            
        
    
    def multiply(self, num):
        
        if type(num) not in [int, float]:
            
            raise ValueError('Invalid type!')

        self.total *= num

    def divide(self, num):

        if type(num) not in [int, float]:
            
            raise ValueError('Invalid type!')
            
        self.total /= num
            
    
    def __str__(self):
        
        return str(self.total)
