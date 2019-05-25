from random import shuffle

#Our sets for the cards
card_ranks = ('A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K')       
card_suits = ('Hearts', 'Clubs', 'Diamonds', 'Spades')
#A dictionary translating our cards into the correct values
card_values = {'A':11, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'J':10, 'Q':10, 'K':10} #Dictionary

#The shuffled deck
deck = []

#Dealer and players hands
dealer_cards = []
player_cards = []

#Global variables to check the value of dealer and players cards
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

#Checks the card's value so that we can do a sum of the cards in the hand
def card_value(card_name):
    card_rank = card_name.split(" of ")
    return card_values[card_rank[0]]

#Checks whether the picked card is an Ace and either add 1 or the predefined value
def check_for_ace(card_name, current_value):
    print(card_name.split(" of ")[0])
    print("Current value for ACE: ", current_value)
    if card_name.split(" of ")[0] == "A" and current_value + 11 > 21:
        return_value = 1
    else:
        return_value = card_value(card_name)
    return return_value


#Rules for dealing the cards as a player
def player_deal(player_value_local = player_value_global):
    playing = True
    current_value = player_value_local

    #While loop to ensure that the player gets as many hits as he wants
    while playing == True:
        draw = input("Hit Y/N: ")

        #If player chooses yes
        if draw == "Y" or draw == "y":
            player_cards.append(deal())
            player_value_local = 0
            #Iterate through the player_cards list so that we can check the sum and add the new card
            for i in player_cards:
                player_value_local += check_for_ace(i, current_value)

            print("local: ", player_value_local, "global: " , player_value_global)
            print(player_cards)
            current_value = player_value_local

        #Check is sum is over 21
        if player_value_local > 21:
            print("Player has busted")
            playing = False

        #If player wish to stand, break the loop    
        if draw == "N" or draw == "n":
            playing = False

    #Return the local variable in the function so that we can change the global variable
    return player_value_local

#Rules for dealing the cards for the player
def dealer_deal(dealer_value_local = dealer_value_global):
    current_value = dealer_value_local
    print(dealer_value_local)
    #Forever loop so that we don't have to take any actions
    #Rules of blackjack states that dealer must hit when sum <= 16
    while True:
        dealer_cards.append(deal())
        dealer_value_local = 0
        #Iterate through dealer_cards and find the value so that we can check the sum of the cards - also checks for aces
        for i in dealer_cards:
            dealer_value_local += check_for_ace(i, current_value)
        print(dealer_value_local)
        current_value = dealer_value_local

        #check if dealer goes above 16, if true then break the loop
        if dealer_value_local > 16:
            break

    #Return the local variable in the function so that we can change the global variable
    return dealer_value_local

#Function to start the game
def start_game():
    #Ensures that we can touch the global variables for our function calls
    global player_value_global
    global dealer_value_global

    #Add 2 cards to dealer and player in the correct order of the blackjack rules
    dealer_cards.append(deal())
    player_cards.append(deal())
    dealer_cards.append(deal())
    player_cards.append(deal())

    #Iterate through dealer_cards and find the value so that we can check the sum of the cards
    #TODO: check for aces!
    for i in dealer_cards:
        dealer_value_global += card_value(i)
    print(dealer_cards[0] + "    [HIDDEN CARD]")

    #Iterate through player_cards and find the value so that we can check the sum of the cards
    #TODO: check for aces!
    for i in player_cards:
        player_value_global += card_value(i)
    print(player_cards[0] + "    " + player_cards[1])
    print("You currently have: ", player_value_global)

    #Call the player_deal() function, now the player can play
    player_value_global = player_deal(player_value_local = player_value_global)
    print("player value (global) 1: ", player_value_global)

    #When the player is done playing, call dealer_deal() function, now the dealer plays
    dealer_value_global = dealer_deal(dealer_value_local = dealer_value_global)

#Call function create_deck() to create the deck as the first thing
create_deck()
#Call the start_game() function to start the game
start_game()

if __name__ == "__main__":
    pass