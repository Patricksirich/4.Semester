class Card:
    
    # make a function that takes two cards from the deck class and returns it
    def __init__(self, suit, rank):
        self.suit = suit
        self.rank = rank

    def showCard(self):
        print("{} of {}".format(self.rank, self.suit))
    
