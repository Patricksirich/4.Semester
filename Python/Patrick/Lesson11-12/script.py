from calculater import Calculater


def main():
    calc = Calculater()

    while True:

        inp = input(calc)

        if '+' in inp:
            temp = inp.split('+')
            calc.add(int(temp[-1]))
        elif '-' in inp:
            temp = inp.split('-')
            calc.subtract(int(temp[-1]))
        elif '/' in inp:
            temp = inp.split('/')
            calc.divide(int(temp[-1]))
        elif '*' in inp:
            temp = inp.split('*')
            calc.multiply(int(temp[-1]))
        else:
            pass


if __name__ == "__main__":
    main()