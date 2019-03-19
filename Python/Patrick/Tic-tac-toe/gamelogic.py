class gameLogic:
    from board import refreshBoard
    from player import *


    def gameStart():
        refreshBoard()
        placement = input("Place your piece: ")
        player.insert(placement, 'X')
        
        
    gameStart()



