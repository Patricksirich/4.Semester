from car import Car
from attributes import * 
from attributes import Pedal
from attributes import Swim
from attributes import A
import attributes

def main():

    try:

        bmw = Car(Engine())
        bmw.run()

        triumph = Car(Pedal())
        triumph.run()

        test = Car(Swim())
        test.run()
    except AttributeError:
        print('You did a bad...')

        classList = sorted(attributes.__dict__)
        print(classList)


if __name__ == "__main__":
    main()