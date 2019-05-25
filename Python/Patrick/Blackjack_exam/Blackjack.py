from random import shuffle

card_ranks = ('A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K')       
card_suits = ('Hearts', 'Clubs', 'Diamonds', 'Spades')
card_values = {'A':1, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'J':11, 'Q':12, 'K':13} #Dictionary

deck = []

dealer_cards = []
player_cards = []

cards = []

player_value_global = 0
dealer_value_global = 0
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

def card_value(card_name):
    card_rank = card_name.split(" of ")
    return card_values[card_rank[0]]
    

#Rules for dealing the cards
def player_deal(player_value_local = player_value_global):
    draw = input("Hit Y/N: ")

    if draw == "Y" or draw == "y":
        player_cards.append(deal())
        cards.append(player_cards)
        for i in player_cards:
            player_value_local += card_value(i)
        print("local: ", player_value_local, "global: " , player_value_global)
        print(player_cards)
        player_deal(player_value_local = player_value_global)
        sum(player_cards)

    if draw == "no":
        dealer_deal()
    
    return player_value_local

def dealer_deal(dealer_value = dealer_value_global):
    pass

create_deck()
player_value_global = player_deal(player_value_local = player_value_global)

if __name__ == "__main__":
    pass