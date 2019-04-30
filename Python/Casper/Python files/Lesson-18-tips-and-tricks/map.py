# Take a list and run some task on each element in the list

# version 1
money = [10, 20, 30]

def double(m):
    return m*2

double_list = []

for i in money:
    double_list.append(double(i))


print(money)
print(double_list)

# version 2
money = [10, 20, 30]

x = list(map(double, money))
print(x)

# version 3
money = [10, 20, 30]

x = list(map(lambda x: x*20, money))
print(x)


