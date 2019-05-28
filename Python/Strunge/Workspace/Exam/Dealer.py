from Deck import Deck

class Dealer:
    def __init__(self, hand, isUser, isreveal):
        self.hand = hand
        self.isUser = isUser
        self.isReveal = isreveal

    def dealCards(self):
        return Deck.deck.pop()
    
    def checkSum(self):
        sum = 0
        for i in self.hand:
            if i.number == 'J' or 'Q' or 'K':
                sum += 10

            elif i.number == 'A':
                sum += 1

            else:
                sum += int(i.number)

        return sum
