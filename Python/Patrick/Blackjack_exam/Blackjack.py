from random import shuffle

card_ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
card_suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
deck = []

#Creates the deck with 52 cards
def create_deck():
    for i in card_suits:
        for j in card_ranks:
            deck.append(j + ' ' + i)
#Shuffle the cards to create a random order in the deck
    shuffle(deck)
    print(deck)
    return deck
    




create_deck()

if __name__ == "__main__":
    pass