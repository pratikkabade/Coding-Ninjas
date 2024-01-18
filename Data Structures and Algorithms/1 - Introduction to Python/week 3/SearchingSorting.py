##################################### - #####################################

# # Code: Binary Search
# #ar=[0,1,2,3,4, 5, 6]
# arr=[1,2,4,6,8,11,18]
# n=1

# low=0
# high=len(arr)

# while True:
#     x=(low+high)//2
#     if arr[x]==n:
#         print(arr[x],x)
#         break
#     elif arr[x]>n:
#         low=low
#         high=low+(high)//2
#         if high==low==0:
#             print(-1)
#             break
#     elif arr[x]<n:
#         print('go high')
#         low=low+(high)//2
#         high=high
#         if ((low+high)//2)>len(arr):
#             print(-1)
#             break


##################################### - #####################################

# # Code: Assignment - Push Zero to End

# a=[2,0,0,1,3,0,0]
# b=a
# m=0
# n=len(a)-1
# for i in range(len(a)):
#     if a[i]==0:
#         b[n]=0
#         n=n-1
#     else:
#         b[m]=a[i]
#         m=m+1

# print(b)




##################################### - #####################################

# # Code: Assignment - Rotate Array

# arr=[1,2,3,4,5,6,7]
# n=8
# n=n%len(arr)
# arr2=[]
# for i in range(n):
#     arr2.insert(len(arr2),arr[i])
# for i in range(len(arr)-n):
#     arr[i]=arr[i+n]
# for i in range(n):
#     arr[len(arr)-n+i]=arr2[i]
# print(arr)



##################################### - #####################################

# # Code: Assignment - 












##################################### - #####################################

# # Code: Assignment - Sort 0 1 2 

# arr=[2, 0, 1, 2, 1, 0]

# low=0
# high=len(arr)-1
# mid=0

# while mid<=high:
#     if arr[mid]==0:
#         arr[low],arr[mid]=arr[mid],arr[low]
#         low=low+1
#         mid=mid+1

#     elif arr[mid]==1:
#         mid=mid+1

#     else:
#         arr[mid],arr[high]=arr[high],arr[mid]
#         high=high-1

# print(arr)




##################################### - #####################################

# # Code: Assignment - Sum of Two Arrays

# a=[6, 2, 4]
# b=[7, 5, 6]
# c=[]
# m=len(c)

# # convert array to string and then to int
# def convertion(arr):
#     s=''
#     for i in range(len(arr)):
#         s=s+str(arr[i])
#     num=int(s)
#     return num

# a=convertion(a)
# b=convertion(b)
# sum=a+b

# # add it in c
# while sum>0:
#     x=sum%10
#     sum=sum//10
#     c.insert(m,x)

# print(c)