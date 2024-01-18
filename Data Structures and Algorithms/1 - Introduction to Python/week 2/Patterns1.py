##################################### - #####################################

# # Code: Reverse Number pattern# # Code: Triangular number pattern
# # 1
# # 22
# # 333
# # 4444

# n=4
# i=1

# while i <=n:
#     print(str(i)*i, end="")
#     print()
#     i=i+1



##################################### - #####################################

# # Code: Reverse Number pattern
# # 1
# # 21
# # 321
# # 4321

# n=4
# i=1

# while i<=n:
#     j=1
#     while j<=i:
#         print((i-j+1),end="")
#         j=j+1
#     print()
#     i=i+1



##################################### - #####################################

# # Code: Reverse Number pattern
# # A
# # BC
# # CDE
# # DEFG
# # EFGHI

# n=5
# i=1
# c=64

# while i<=n:
#     j=1
#     while j<=i:
#         print(chr(i+j-1+c),end='')
#         j=j+1
#     print()
#     i=i+1


##################################### - #####################################

# # Code: Interesting Alphabets
# # C
# # CB
# # CBA

# n=7
# i=1
# c=64

# while i<=n:
#     j=1
#     while j<=i:
#         print(chr(n-j+1+c),end='')
#         j=j+1
#     print()
#     i=i+1



##################################### - #####################################
################################ ASSIGNMENTS ################################
##################################### - #####################################

# # Code: Assignment 1 - Number Pattern 1
# # 1
# # 11
# # 111
# # 1111

# n=4
# i=1

# while i<=n:
#     j=1
#     while j<=i:
#         print(str(1),end='')
#         j=j+1
#     print()
#     i=i+1



##################################### - #####################################

# # Code: Assignment 2 - Number Pattern 2
# # 1
# # 11
# # 202
# # 3003

# n=4
# i=1

# while i<=n:
#     j=1
#     if i <3:
#         print(str(1)*i, end="")
#     else:
#         print((i-1),end='')
#         while j<=(i-2):
#             print(str(0)*j, end="")
#             j=j+1
#         print((i-1),end='')
#     print()
#     i=i+1



##################################### - #####################################

# # Code: Assignment 3 - Number Pattern 3
# # 1
# # 11
# # 121
# # 1221

# n=4
# i=1

# while i<=n:
#     j=1
#     if i < 3:
#         print(str(1)*i,end='')
#     else:
#         print(1,end='')
#         while j <= (i-2):
#             print(str(2),end='')
#             j=j+1
#         print(1,end='')
#     i=i+1
#     print()



##################################### - #####################################

# # Code: Assignment 4 - Number Pattern
# # 1234
# # 123
# # 12
# # 1

# n=4
# i=1

# while i<=n:
#     j=1
#     while j<=(n-i+1):
#         print(j,end='')
#         j=j+1
#     i=i+1
#     print()



##################################### - #####################################

# # Code: Assignment 5 - Aplha Pattern
# # A
# # BB
# # CCC

# n=3
# i=1
# c=64

# while i<=n:
#     j=1
#     while j<=i:
#         print(chr(i+c), end='')
#         j=j+1
#     print()
#     i=i+1