from random import shuffle

card_ranks = ('A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K')       
card_suits = ('Hearts', 'Clubs', 'Diamonds', 'Spades')
card_values = {'A':1, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'J':11, 'Q':12, 'K':13} #Dictionary

deck = []

dealer_cards = []
player_cards = []


cards = []
value = 0
aces = 0


#Creates the deck with 52 cards
def create_deck():
    for suits in card_suits:
        for ranks in card_ranks:
            deck.append(ranks + " of " + suits)
#Shuffle the cards to create a random order in the deck
    shuffle(deck)
    print(deck)
    return deck

#Removes last card from the deck[] and return the value
def deal():
    single_card = deck.pop()
    return single_card
    
#Rules for dealing the cards
def player_deal():
    draw = input("Hit Y/N: ")

    if draw == "Y" or draw == "y":
        player_cards.append(deal())
        cards.append(player_cards)
        #value += card_values[player_cards.card_ranks]
        print(player_cards)
        player_deal()
        sum(player_cards)

    #if draw == "no":
        #dealer_deal()

create_deck()
player_deal()


if __name__ == "__main__":
    pass