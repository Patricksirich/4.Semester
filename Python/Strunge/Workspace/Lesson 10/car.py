class Car:
    def __init__(self, engine):
        self.engine = engine

    def run(self):
        self.engine.turnOn()

    def __str__(self):
        return 'Something'