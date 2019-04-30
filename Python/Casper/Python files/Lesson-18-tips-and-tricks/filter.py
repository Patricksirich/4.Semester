# Filter funktionen filtrerer en liste ud fra en condition

num = list(range(-5, 5))

x = tuple(filter(lambda x: x < 0, num))

print(num)
print(x)