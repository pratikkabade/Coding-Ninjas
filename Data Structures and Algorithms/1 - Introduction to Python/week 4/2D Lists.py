def spiralPrint(mat, nRows, mCols):
    top=0
    down=nRows
    left=0
    right=mCols

    arr=[]
    dir=0

    while top<down and left<right:
        if dir==0:
            for i in range(left,right):
                arr.append(mat[top][i])
            top+=1
        elif dir==1:
            for i in range(top,down):
                arr.append(mat[i][right-1])
            right-=1
        elif dir==2:
            for i in range(right-1,left-1,-1):
                arr.append(mat[down-1][i])
            down-=1
        else:
            for i in range(down-1,top-1,-1):
                arr.append(mat[i][left])
            left+=1
        dir=(dir+1)%4
    
    for i in range(len(arr)):
        print(arr[i],end=' ')


mm=[[1,2,3],
    [4,5,6],
    [7,8,9]]
n=4
m=3

spiralPrint(mm,n,m)