def binSrc(a,l,h,t):
  if l<0 or len(a)<h or t not in a:
    return -1
  mid=(l+h)//2
  if a[mid]==t:
    return mid
  if a[mid]<t:
    return binSrc(a,mid,h,t)
  else:
    return binSrc(a,l,mid,t)
arr=[1,2,3,4,5]
print(binSrc(arr,0,len(arr),5))


def mergSrt(a):
  if len(a)<2:
    return a
  
  m=len(a)//2
  L=a[:m]
  R=a[m:]

  mergSrt(L)
  mergSrt(R)

  i=j=k=0

  while i<len(L) and j<len(R):
    if L[i]<R[j]:
      a[k]=L[i]
      i+=1
    else:
      a[k]=R[j]
      j+=1
    k+=1

  while i<len(L):
    a[k]=L[i]
    i+=1
    k+=1
    
  while j<len(R):
    a[k]=R[j]
    j+=1
    k+=1

  return a
    
arr=[4,2,3,1,0]
print(mergSrt(arr))


def qS(a,l,h):
  pass

arr=[2,4,6,1,8,5]
print(qS(arr,0,len(arr)))


arr=[2,4,5,3,3]

def mul(a,i):
  if i==len(a):
    return 1
  if a[i]%2!=0:
    return mul(a,i+1)*a[i]
  else:
    return mul(a,i+1)

print(mul(arr,0))