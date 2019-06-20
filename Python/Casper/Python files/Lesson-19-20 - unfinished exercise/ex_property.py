""" 
    Create a Triangle Class.
    The class should have internal attributes which should not be access from outside (private). They should be able to hold the length of each of the 3 sides. 
    
    You should implement a method that return the area of the triangle. 
    You should implement properties for each of the attributes, 
    
"""

class Triangle:

    def area(self, base, height):
        
        self.__base = base
        self.__height = height
        return (self.__base * self.__height)/2
    
    @property
    def base(self, base):
        self.__base = self.base

    @property
    def height(self):
        self.__height = self.height

t = Triangle()
print(t.area(10, 5))

    