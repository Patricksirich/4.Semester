from random import shuffle

card_ranks = ('A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K')       
card_suits = ('Hearts', 'Clubs', 'Diamonds', 'Spades')
card_values = {'A':11, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'J':10, 'Q':10, 'K':10} #Dictionary

deck = []

dealer_cards = []
player_cards = []

cards = []

player_value_global = 0
dealer_value_global = 0

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

#
def card_value(card_name):
    card_rank = card_name.split(" of ")
    return card_values[card_rank[0]]

def check_for_ace(card_name, current_value):
    print(card_name.split(" of ")[0])
    print("Current value for ACE: ", current_value)
    if card_name.split(" of ")[0] == "A" and current_value + 11 > 21:
        return_value = 1
    else:
        return_value = card_value(card_name)
    return return_value


#Rules for dealing the cards
def player_deal(player_value_local = player_value_global):
    playing = True
    current_value = player_value_local
    while playing == True:
        draw = input("Hit Y/N: ")
    
        if draw == "Y" or draw == "y":
            player_cards.append(deal())
            player_value_local = 0
            for i in player_cards:
                player_value_local += check_for_ace(i, current_value)
            print("local: ", player_value_local, "global: " , player_value_global)
            print(player_cards)
            current_value = player_value_local

        if player_value_local > 21:
            print("Player has busted")
            playing = False
            
        if draw == "N" or draw == "n":
            playing = False

    return player_value_local

def dealer_deal(dealer_value_local = dealer_value_global):
    current_value = dealer_value_local
    print(dealer_value_local)
    while True:
        dealer_cards.append(deal())
        dealer_value_local = 0
        for i in dealer_cards:
            dealer_value_local += check_for_ace(i, current_value)
        print(dealer_value_local)
        current_value = dealer_value_local
        if dealer_value_local > 16:
            break

    return dealer_value_local

def start_game():
    global player_value_global
    global dealer_value_global

    dealer_cards.append(deal())
    player_cards.append(deal())
    dealer_cards.append(deal())
    player_cards.append(deal())

    for i in dealer_cards:
        dealer_value_global += card_value(i)
    print(dealer_cards[0] + "    [HIDDEN CARD]")
    
    for i in player_cards:
        player_value_global += card_value(i)
    print(player_cards[0] + "    " + player_cards[1])
    print("You currently have: ", player_value_global)

    player_value_global = player_deal(player_value_local = player_value_global)
    print("player value (global) 1: ", player_value_global)

    dealer_value_global = dealer_deal(dealer_value_local = dealer_value_global)

create_deck()
start_game()


if __name__ == "__main__":
    pass