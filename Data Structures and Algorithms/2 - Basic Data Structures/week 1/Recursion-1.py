print("👇")

############################## - ##############################
# # If sorted? 1
# def sorted(a):
#   l=len(a)
  
#   # base case
#   if l <= 1:
#     return True
  
#   # condition
#   if a[0]>a[1]:
#     return False

#   # recursion
#   small_list=a[1:]
#   isSorted = sorted(small_list)

#   if isSorted:
#     return True
#   else:
#     return False


# ab=[1,2,3,4,5]
# print(sorted(ab))


############################## - ##############################
# # Sum of Array by recursion

# def sum(a):
#   l=len(a)
  
#   # base case
#   if l<=0:
#     return 0

#   # recursion
#   total=a[0]+sum(a[1:])

#   return total

# ab=[3,3,3]
# print(sum(ab))


############################## - ##############################
# # Check Number 1

# def check(a,x):
#     if len(a)==0:
#         return False
#     if a[0]==x:
#         return True
#     else:
#         return check(a[1:],x)

# ab=[1,2,3,4,5]
# print(check(ab,4))



############################## - ##############################
# # If sorted? 2

# def sorted(a,x):
#     if len(a)<=x+1:
#         return True
#     if a[x]>a[x+1]:
#         return False
#     return sorted(a,x+1)


# ab=[1,2,3,4,5]
# print(sorted(ab,0))


############################## - ##############################
# # Check Number 2

# def check(a,t,x):
#     if len(a)<=x:
#         return False
#     if a[x]==t:
#         return x,True
#     return check(a,t,x+1)


# ab=[1,2,3,4,5]
# print(check(ab,4,0))
