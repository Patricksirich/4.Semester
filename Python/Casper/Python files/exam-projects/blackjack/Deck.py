class Deck:

    def __init__(self):
        self.cards = []

    # Build a new deck of 52 unique cards
    def build(self):
        for suit in ["Clubs", "Diamond", "Spades", "Hearts"]:
            for rank in range(1, 14):                                
                print("{} of {}".format(rank, suit))
    