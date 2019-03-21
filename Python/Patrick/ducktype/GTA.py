from car import Car
from attributes import *
import attributes



def main():

    try:
        bmw = Car(Engine())
        bmw.run()

        triumph = Car(Pedal())
        triumph.run()

        swim = Car(Swim())
        swim.run()

    except AttributeError:
        print('you gone done fuckup')


if __name__ == "__main__":
    main()