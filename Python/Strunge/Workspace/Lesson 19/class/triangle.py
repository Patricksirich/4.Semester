class Triangle:

    def __init__(self, height, base):
        self.__height = height
        self.__base = base

    def area(self, height, base):
        return (self.__height * self.__base) / 2

    @property
    def height(self):
        return self.__height

    @property
    def base(self):
        return self.__base
    
    @height.setter
    def height(self, height):
        self.__height = height

    @base.setter
    def base(self, base):
        self.__base = base

t = Triangle(10, 5)
t2 = Triangle(20, 5)
print(t.area(10, 5))
print(t2.area(20, 5))

def __add__(self):
    return self.area + self.area


    