##################################### - #####################################

# # Code: Assignment: Print the pattern

n=4
s=1
for i in range(1,n+1):
    for j in range(s,s+n):
        print(j,end=' ')
    print()
    if i<(n//2+1):
        s=(2*n)+s
    
    elif i>(n//2+1):
        s=s-(2*n)
    
    else:
        if n%2==0:
            s=s-n
        else:
            s=s-n