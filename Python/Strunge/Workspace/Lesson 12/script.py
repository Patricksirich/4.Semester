from calculator import Calculator


def main():
    calc = Calculator()

    while True:

        inp = input(calc)

        try:
            if '+' in inp:
                temp = inp.split('+')
                calc.add(int(temp[-1]))
            elif '-' in inp:
                temp = inp.split('-')
                calc.subtrack(int(temp[-1]))
            elif '/' in inp:
                temp = inp.split('/')
                calc.divide(int(temp[-1]))
            elif '*' in inp:
                temp = inp.split('*')
                calc.multiply(int(temp[-1]))
            else:
                pass

        except ValueError as v:
                print(v)
        except OverflowError as v:
                print(v)

if __name__ == "__main__":
    main()