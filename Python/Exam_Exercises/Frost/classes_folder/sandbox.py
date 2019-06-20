class Person:

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __repr__(self):
        return str(f'Subject: {self.name}, age: {self.age}')

    def __add__(self, object):
        return self, object

p1 = Person('Casper', 12)
p2 = Person('Christian', 2)
p3 = p1 + p2
print(p3)