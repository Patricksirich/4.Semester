import random
from Cards import Cards

class Deck:
    deck = []

    def createDeck(self):
        deckValues = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        deckSuits = ['Hearts', 'Spades', 'Diamonds', 'Clubs']

        for suit in deckSuits:
            for number in deckValues:
                self.deck.append(Cards(suit, number))

        random.shuffle(self.deck)
d = Deck()
d.createDeck()
print(d.deck)