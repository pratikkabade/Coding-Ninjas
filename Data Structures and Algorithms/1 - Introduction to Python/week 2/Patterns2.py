##################################### - #####################################

# # Code: Inverted number pattern
# # 4444
# # 333
# # 22
# # 1

# n=4
# i=1

# while i<=n:
#     j=1
#     while j<=(n-i+1):
#         print(str(n-i+1), end="")
#         j=j+1
#     print()
#     i=i+1



##################################### - #####################################

# # Code: Mirror number pattern
# #   1
# #  12
# # 123

# n=5
# i=1

# while i<=n:
#     sp=1
#     j=1
#     while sp<=(n-i):
#         print('-',end='')
#         sp=sp+1
#     while j<=i:
#         print(j,end='')
#         j=j+1
#     print()
#     i=i+1



##################################### - #####################################

# # Code: 

n=5
n2=int(n/2)+1
i=1

while i<=n2:
    j=1
    while j<=n2:
        print(j,end='')
        j=j+1
    print()
    i=i+1