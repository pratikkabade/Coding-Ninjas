# multiplication rec

def mul(a,b):
    if b==0:
        return 0
    return a + mul(a,b-1)

print(mul(3,5))


# addition

def ad(n):
    if n==0:
        return 0
    return n%10 + ad(n//10)

print(ad(11))


# count zero

def c(str,tot=0):
    l=len(str)
    if l==0:
        return tot
    if str[0]=='0':
        tot+=1
    return c(str[1:],tot)    

print(c('100001'))



# max (OUT OF BOX)

def max(a,i=0):
    if len(a)==i:
        return None, None
    x,y=max(a,i+1)
    if x==None or a[i]>x:
        x,y=a[i],i
    return x,y        

arr=[2,46,1,8,99,5]
print(max(arr))



# convert str to int
def conv(s,i=0):
    n=len(s)
    if n==0:
        return i
    i+=(int(s[0])*(10**n))
    return conv(s[1:],i)

print(conv('0123'))


# pair star

def pair(s,a=''):
    n=len(s)
    if n<=1:
        a+=s[0]
        return a
    a+=s[0]
    if s[0]==s[1]:
        a+='*'
    return pair(s[1:],a)

print(pair('abccb'))


# check AB

def chck(s):
    n=len(s)
    if n<=1:
        return True
    
    if s[0]=='a' and (s[1]=='a' or s[1:3]=='bb'):
        return chck(s[3:])
    chck(s[1:])
    return False

print(chck('aabbaabb'))


# steps

def step(n,a=1):
    if n==0:
        return 0
    # two step
    