from car import Car
from attributes import Engine, Pedal
import attributes
from attributes import A


def main():

    try:
        bmw = Car(Engine())
        bmw.run()

        triumph = Car(Pedal())
        triumph.run()
    except AttributeError:
        print("This car will never run!!")
        
        classlist = (sorted(attributes.__dict__))
        print(classlist)


if __name__ == "__main__":
    main()
