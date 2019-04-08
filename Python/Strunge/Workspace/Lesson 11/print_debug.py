def add_number_x_times(num, x):

    print("i'm in the function")
    
    for i in range(x):
        num += num
        print(num)
        
    
    return num

add_number_x_times(10, 90)