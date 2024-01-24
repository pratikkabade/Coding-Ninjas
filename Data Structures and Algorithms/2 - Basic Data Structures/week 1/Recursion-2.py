print("👇")
############################## - ##############################
# # remove x

# a="axsdxdsa"

# def removeX(s):
#     if len(s)==0:
#         return s
#     if s[0]=='x':
#         return removeX(s[1:])
#     return s[0]+removeX(s[1:])

# print(removeX(a))


############################## - ##############################
# # remove duplicates

# a='aaaabbcd'

# def removeD(s):
#     if len(s)==1 or len(s)==0:
#         return s
#     if s[0]==s[1]:
#         return removeD(s[1:])
#     return s[0]+removeD(s[1:])

# print(removeD(a))


############################## - ##############################
# # binary search recurively

def binSearch(a,l,h,t):
    mid=(l+h)//2
    if l>h:
        return -1
    if a[mid]==t:
        return mid
    if a[mid]>t:
        return binSearch(a,l,mid,t)
    if a[mid]<t:
        return binSearch(a,mid,h,t)
    else:
        return -1

#a =[0,1,2,3,4,5]
arr=[1,2,3,4,5,6]
print(binSearch(arr,0,len(arr),5))