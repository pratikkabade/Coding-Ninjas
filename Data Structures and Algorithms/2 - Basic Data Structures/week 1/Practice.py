# Reverse string 1
def rev(s,i):
  if len(s)==i:
    return ''
  return rev(s,i+1)+s[i]

print(rev('123',0))

# Reverse string 2
def rev2(s):
    n=len(s)
    if n==0:
        return ''
    if n==1:
        return s
    L=s[0]
    R=s[n-1]
    return R + rev2(s[1:n-1]) + L

print(rev2('abcde'))

# check palindrome 1

def pal(s):
    n=len(s)
    if n==0:
        return ''
    if n==1:
        return s
    L,R=s[0],s[n-1]
    return R+pal(s[1:n-1])+L

str='12121'
print(pal(str)==str)


# check palindrome 2

def pal2(s):
    n=len(s)
    if n<=1:
        return True
    if s[0]==s[n-1]:     
        return pal2(s[1:n-1])
    return False

print(pal2(str))


# check max 1

def max(a,i=0):
    if i==len(a):
        return None, None
    x,y=max(a,i+1)
    if x==None or a[i]>x:
        x,y=a[i],i
    return x,y    

arr=[2,46,1,8,9,5]
print(max(arr))


# check max 2D

# def max2D(a,i=0):
#     if i==len(a):
# TODO


# find max
def maX(a):
    if len(a)==0:
        return 
    return findMax(0,len(a)-1,a)

def findMax(l,h,a):
    if l==h:
        return a[l]
    mid = (l+h)//2
    return max(findMax(l,mid,a),findMax(mid+1,h,a))

print(maX([1,4,2,6,45,8,68,46]))