##################################### - #####################################

# # Code: Reverse array

# n='1 2 3 4'
# arr=[]
# arr.extend(n.split())
# arr2=[]
# a=len(arr)-1
# for i in range(len(arr)):
#     arr2.extend(arr[a])
#     a=a-1

# print(arr2)


##################################### - #####################################

# # Code: swap number

# n='1,2,3,4'
# arr=[]
# arr.extend(n.split(','))

# for i in range(0, len(arr), 2):
#     temp=arr[i]
#     arr[i]=arr[i+1]
#     arr[i+1]=temp

# print(arr)



##################################### - #####################################

# # Code: Assignment: Unique number

# n='1 2 1 1 2'
# arr=[]
# arr.extend(n.split())

# for i in range(len(arr)):
#     if arr.count(arr[i])<2:
#         print(arr[i])


##################################### - #####################################

# # Code: Assignment: Duplicate number

# arr=[3, 2, 5, 5, 7, 3]

# for i in range(0,len(arr)):
#     for j in range(0,len(arr)):
#         if i!=j and arr[i]==arr[j]:
#             print(arr[i],end=' ')
#             # arr.pop(i)
#             # break



##################################### - #####################################

# # Code: Assignment: Find intersection of two array

# arr1=[3, 2, 5, 5, 7, 3]
# arr2=[5, 2, 1]

# for i in range(0, len(arr1)):
#     for j in range(0, len(arr2)):
#         if arr1[i]==arr2[j]:
#             print(arr1[i],end=' ')
#             arr2.pop(j)
#             break


##################################### - #####################################

# # Code: Assignment: Pair sum

# arr1=[3, 2, 5, 5, 7, 3]
# n=10
# s=0

# for i in range(0,len(arr1)):
#     for j in range(0,len(arr1)):
#         if arr1[i]+arr1[j]==n:
#             s=s+1
#             print(arr1[i],arr1[j])
#             break
# print(s)



##################################### - #####################################

# # Code: Assignment: Sort 0 1
# arr=[0, 1, 0, 0, 1, 1, 1]
# arr0=[]
# arr1=[]
# for i in range(0,len(arr)):
#     if arr[i]==0:
#         arr0.insert(len(arr0),0)
#     else:
#         arr1.insert(len(arr1),1)
# arr=[]
# arr.extend(arr0)
# arr.extend(arr1)
# OR 
# arr.sort()
# print(arr)


##################################### - #####################################

# # Code: Assignment: Pair Sum

# n=[1,2,3,4,5,0,0]
# tgt=5
# s=0

# for i in range(len(n)):
#     for j in range(i,len(n)):
#         if tgt==n[i]+n[j]:
#             s=s+1

# print(s)

##################################### - #####################################

# # Code: Assignment: Triplet Sum

n=[1,2,3,4,5,1,0]
tgt=5
s=0

for i in range(len(n)):
    for j in range(i,len(n)):
        for k in range(j,len(n)):
            if i!=j!=k and tgt==n[i]+n[j]+n[k]:
                s=s+1
                # print(n[i],n[j],n[k])

print(s)


