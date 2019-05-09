class MyNumbers:
    def __init__(self, *args):
        if len(args) > 1:
            self.start = args[0]
            self.end = args[1]
        else:
            self.start = 0
            self.end = args[0]


    def __iter__(self):
        return self

    def __next__(self):
        
        if self.start < self.end:
            x = self.start
            self.start += 1 
            return x
        else:
            raise StopIteration

     
    def __repr__(self):
        return self