from random import shuffle

card_ranks = {'A':1, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'J':11, 'Q':12, 'K':13}
card_suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
deck = []

#Creates the deck with 52 cards
def create_deck():
    for i in card_suits:
        for j in card_ranks:
            deck.append(j + ' of ' + i)
#Shuffle the cards to create a random order in the deck
    shuffle(deck)
    print(deck)
    return deck

#Removes 1 card from the deck and return the value
def deal():
    single_card = deck.pop()
    print(single_card)
    return single_card
    

create_deck()
deal()


if __name__ == "__main__":
    pass