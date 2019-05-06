# Copyright 2019 clbo@kea.dk
# Licensed under the Apache License, Version 2.0
# http://www.apache.org/licenses/LICENSE-2.0

# Basic Filter exercises
# Fill in the code for the functions below. main() is already set up
# to call the functions with a few different inputs,
# printing 'OK' when each function is correct.
# The starter code for each function includes a 'return'
# which is just a placeholder for your code.


# A. Get 'a' words
# Give a list of words, return a tuple of words containing the letter 'a'
# Use the filter function to solve this task.
def get_a_words(words):
    
    x = tuple(filter(lambda x: "a" in x, words))
    
    return x


# C. Filter un-even number
# Give a list of numbers, return a list of the un-even numbers
# from the original list. Use the filter function to solve this task.
def filter_uneven_numbers(num):
    
    y = list(filter(lambda y: y % 2, num))
    
    return y


# Simple provided test() function used in main() to print
# what each function returns vs. what it's supposed to return.
def test(got, expected):
    if got == expected:
        prefix = ' OK '
    else:
        prefix = '  X '
    print(f'{prefix} got: {got} expected: {expected}')


# Calls the above functions with interesting inputs.
def main():

    print('get_a_words')
    test(get_a_words(['aba', 'dd', 'the', 'abcda']), ('aba', 'abcda'))
    test(get_a_words(['aba', 'xyz', 'aa', 'x', 'bbb']), ('aba', 'aa'))
    test(get_a_words(['', 'x', 'xy', 'xyx', 'xx']), ())
    test(get_a_words(['aaa', 'be', 'abc', 'hello']), ('aaa', 'abc'))

    print('filter_uneven_numbers')
    test(filter_uneven_numbers([1, 2, 3, 4, 5, 6, 7]), [1, 3, 5, 7])
    test(filter_uneven_numbers([17, 121, 44, 55, 61]), [17, 121, 55, 61])
    test(filter_uneven_numbers([111, 108, 54, 27, 81]), [111, 27, 81])


if __name__ == "__main__":
    main()
