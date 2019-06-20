# Ask a user for name and age, and address to the user the year he/she will turn 100.

name = input('Please enter your name: ')
age = input('Please enter your age: ')
year = 2019

for i in range( int(age), 100):
    year += 1

printXTimes = input("How many times would you like to se the message?: ")

for i in range(0, int(printXTimes)):
    print(f'{name}, you will be 100 years old in the year {year}')
    