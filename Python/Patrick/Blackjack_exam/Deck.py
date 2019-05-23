#1-13
#Hearts
#Clubs
#Diamonds
#Spades

from random import shuffle

#create cards and card type to create 52

card_ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
card_suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
deck = []

#creates the deck with 52 cards
def create_deck():
    for i in card_suits:
        for j in card_ranks:
            deck.append(j + ' ' + i)
    return deck

#calls the create_deck method and shuffles the cards into our deck array
deck = create_deck()
shuffle(deck)