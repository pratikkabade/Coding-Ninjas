print('\n'*5+"👇")

def print_numbers(n):
  if n > 0:
    print(n)
    print_numbers(n - 1)    
    print('asdsad')
    print(n)
  return

print_numbers(10)
