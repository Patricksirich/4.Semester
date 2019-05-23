class Card:
    
    def __init__(self, suit, rank):
        self.suit = suit
        self.rank = rank
    
    # Method that takes a cards rank and suit and returns it
    def showCard(self):
        print("{} of {}".format(self.rank, self.suit))