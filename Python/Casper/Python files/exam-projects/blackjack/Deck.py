class Deck:

    # Make two arrays with rank and suit, and shuffle a deck with 52 cards in it (no duplicates)
    
    # Initialize class with an empty dictionary and the build method
    def __init__(self):
        self.cards = []

    # Build a new deck of 52 unique cards
    def build(self):
        for i in ["Clubs", "Diamond", "Spades", "Hearts"]:
            for j in range(1, 14):
                print(j)
    
deck = Deck()
deck.build()