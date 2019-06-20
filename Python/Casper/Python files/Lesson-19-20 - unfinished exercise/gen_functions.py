# Normal function
def my_generator_numbers(nums):
    result = []
    for i in nums:
        result.append(i*i)
    return result

my_numbers = my_generator_numbers([1, 2, 3, 4, 5])

print(my_numbers)

# Generator 
def my_generator_numbers2(nums):
    for i in nums:
        yield i*i

my_gen_num = my_generator_numbers([1, 2, 3, 4, 5])

for i in my_gen_num:
    print(i)


# Generator expression


my_list_comp = [i*i for i in [1, 2, 3, 4, 5]]
print(my_list_comp)

my_gen_exp = (i*i for i in [1, 2, 3, 4, 5])
print(my_gen_exp)

print(next(my_gen_exp), end=' ')
print(next(my_gen_exp), end=' ')
print(next(my_gen_exp), end=' ')
print(next(my_gen_exp), end=' ')
print(next(my_gen_exp))























