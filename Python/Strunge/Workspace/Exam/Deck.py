import random
from Cards import Cards

class Deck:
    def __init__(self, deck):
        self.deck = deck

    def createDeck(self):
        deckValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        deckSuits = ['♥', '♠', '♦', '♣']

        for suit in deckSuits:
            for number in deckValues:
                self.deck.append(Cards(suit, number))

        random.shuffle(self.deck)