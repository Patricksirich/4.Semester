class A:
    
    #Class attributes
    xxx = 'Christian'


    
    # Constructor and instance attributes
    def __init__(self, name):
        self._name = name

    def getName(self):
        return self._name

    def __str__(self):
        return "[" + self._name + "," + self.xxx + "]"

    def __len__(self):
        return 123


class B:
    pass
