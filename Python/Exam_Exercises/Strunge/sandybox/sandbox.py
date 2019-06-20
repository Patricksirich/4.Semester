class Person:
    def __init__(self, age, name):
        self.age = age
        self.name = name

    def __repr__(self):
        return str(f'Person: {self.name}, Age: {self.age}')

    def __add__(self, object):
        return self, object

t1 = Person(25, 'John')
t2 = Person(35, 'Lars')
t3 = t1 + t2
print(t3)


peeps = Person(25, 'Lars')
print(peeps)
if peeps.age != 23:
    print(peeps.age)
    print(peeps.name)
if peeps.age == 25:
    peeps.age = 30
    print(peeps.age)
if peeps.name == 'Lars':
    peeps.age = peeps.age + 5
    peeps.name = 'Lorte_Lars'
    print(peeps.name)
    print('is: ', peeps.age, ' of age')

print(peeps)
