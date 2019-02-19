import sys

def hello(name):
  if name == 'Alice':
    name += '?????????'
  else:
    call_a_non_xixstin_function() 
  
  name += '!!!!!!'
  print(name)

# Define a main() function that prints a little greeting.
def main(): 
  hello(sys.argv[1])

# This is the standard boilerplate that calls the main() function.
if __name__ == '__main__':
  main()