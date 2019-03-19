class A:

    # Class attributes
    xxx = 'Test'

    

    # constructor and instance
    def __init__(self, name):
        self.name = name

    def getName(self):
        return self.name

    def __str__(self):
        return "[" + self.name + ", " + self.xxx + "]"

    def __len__(self):
        return 1234


class B:
    pass