from Deck import *
from random import shuffle

class Game:

    newDeck = Deck()
    newDeck.build()
    shuffle(newDeck.cards)

if __name__ == "__main__":
    pass
    
