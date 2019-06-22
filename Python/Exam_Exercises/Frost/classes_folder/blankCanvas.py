f = open('bank.txt', 'w')

money = 1000

f.write(f'Your account: {money}')

with open('bank.txt', 'w') as f:
    f.write('Your new balance')