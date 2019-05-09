""" 
    1. Create a Triangle Class.
    The class should have internal attributes which should not be access from outside (private). 
    They should be able to hold the length of each of the 3 sides. 
    You should implement a method that return the area of the triangle. 
    You should implement properties for each of the attributes, 
   
   Protocols
    2. Enable your Triangle class to
    Add another triangle to it. (tri1 + tri2). what should come out of this is up to you.
    The triangle should be able to tell its state, and it should be able to tell its length
"""

from ex_property import Triangle

tri1 = Triangle(20, 50)
tri2 = Triangle(5, 2)