""" Calculater class that can add, subtrack, multiply and devide """

class Calculator:

    """ init takes 0 arguments """

    def __init__(self):

        # you should here create two instance variables
        # total and error_msg
        self.total = 0
        self.error_msg = ''

    def add(self, num):
        #Add takes 1 argument an 'int' or 'float', 
        #the number to add to 'total'

        # Think of possible errors that could happen, 
        # and make tests for these errors      

        if type(num) not in [int, float]:
            
            raise ValueError('Invalid value! input must be an integer.')
        
        if num > 10000:

            raise OverflowError('Number too large!')    

        self.total += num         
        
    def subtrack(self, num):
        
        if type(num) not in [int, float]:

            raise ValueError('Invalid type!')

        try:
            self.total -= num
            
        except ValueError as v:
            print(v)
        
    
    def multiply(self, num):
        
        if type(num) not in [int, float]:
            
            raise ValueError('Invalid type!')
            
        try:
            self.total *= num
            
        except ValueError as v:
            print(v)

    def divide(self, num):

        if type(num) not in [int, float]:
            
            raise ValueError('Invalid type!')
            
        try:
            self.total /= num

        except ValueError as v:
            print(v)
            
    
    def __str__(self):
        
        return str(self.total)
