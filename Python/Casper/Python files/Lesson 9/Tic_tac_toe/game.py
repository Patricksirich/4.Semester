import random
import os

class Board:

    def __init__(self):
        self.cells = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    
    def display(self):
        print('===========')
        print(" %s | %s | %s " % (self.cells[1], self.cells[2], self.cells[3]))
        print('-----------')
        print(" %s | %s | %s " % (self.cells[4], self.cells[5], self.cells[6]))
        print('-----------')
        print(" %s | %s | %s " % (self.cells[7], self.cells[8], self.cells[9]))
        print('===========')

    def update_cell

board = Board()

# welcome message
def print_header():
    print("Welcome to Tic-tac-toe!\n")

#Clear the screen
def refresh_screen():
    os.system("clear")

    print_header()

    board.display()

refresh_screen()

while True:
    refresh_screen()

    #Get X input
    x_choice = int(raw_input("\nX) Please choose a field from 1-9. >"))

    #Update board
    board.update_cell(x_choice, "X")