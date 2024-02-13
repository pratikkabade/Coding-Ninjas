def print_numbers(n):
  if n > 0:
    print('bbb '+str(n))
    print_numbers(n - 1)    
    print('aaa '+str(n))
  return

print_numbers(10)
