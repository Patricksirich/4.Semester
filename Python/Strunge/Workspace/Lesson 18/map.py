
# Ver. 1
money = [10, 20, 30]

def double(m):
    return m * 2

double_list = []

for i in money:
    double_list.append(double(i))

print(money)
print(double_list)

# Ver. 2
money = [10, 20, 30]

#TODO Check duplicate
#def double(m):
#    return m * 2

x = list(map(double, money))
print(x)

# Ver. 3
money = [10, 20, 30]

x = list(map(lambda x: x*2, money))
print(x)

# Python, java
sorted() # tim sort

# Selection sort hvis listen er mindre end 64 elementer