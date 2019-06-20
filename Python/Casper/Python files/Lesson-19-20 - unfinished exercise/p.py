class P:

    def __init__(self, x):
        self.x = x
    
    @property
    def x(self):
        return self.x
    
    @x.setter
    def x(self, x):

        if x > 1000:
            self.__x = 1000
        elif x < 0:
            self.__x = 0
        else:
            self.__x = x

    def __len__(self):
        return self.x

    def __repr__(self):
        return str(self.x)

    def __add__(self, p):
        self.x = self.x + p