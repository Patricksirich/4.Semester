from Deck import Deck

class Dealer:
    hand = []
    isUser = False
    isReveal = False

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
