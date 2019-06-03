import random
from Cards import Cards

class Deck:
    deck = []
    def __init__(self, deck):
        self.deck = deck

    # Create deck with suits and numbers
    def createDeck(self):
        deckValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        deckSuits = ['♥', '♠', '♦', '♣']

        # Make 1 of each card
        for suit in deckSuits:
            for number in deckValues:
                self.deck.append(Cards(suit, number))

        # Shuffle to randomize the deck
        random.shuffle(self.deck)
        return self.deck