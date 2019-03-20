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

board = Board()
board.display()
