################ - ################ - ################
# # BINARY TREE USING LINKED LIST


import Queue as queue

class BinaryTree:
    def __init__(self, data):
        self.data = data
        self.leftChild = None
        self.rightChild = None

# drink = BinaryTree('drink')

# hot = BinaryTree('hot')
# drink.leftChild = hot

# cold = BinaryTree('cold')
# drink.rightChild = cold

# cof = BinaryTree('coffee')
# tea = BinaryTree('tea')
# hot.leftChild = cof
# hot.rightChild = tea

# beer = BinaryTree('beer')
# juice = BinaryTree('juice')
# cold.leftChild = beer
# cold.rightChild = juice


drink = BinaryTree('1')

hot = BinaryTree('2')
drink.leftChild = hot

cold = BinaryTree('3')
drink.rightChild = cold

cof = BinaryTree('4')
tea = BinaryTree('5')
hot.leftChild = cof
hot.rightChild = tea

beer = BinaryTree('6')
juice = BinaryTree('7')
cold.leftChild = beer
cold.rightChild = juice

def preOrderTraversal(rootNode, level=0):
    if not rootNode:
        return
    print(' - '*level, rootNode.data)
    preOrderTraversal(rootNode.leftChild, level++1)
    preOrderTraversal(rootNode.rightChild, level++1)

# preOrderTraversal(drink)

print('============================================')

def inOrderTraversal(rootNode,level=0):
    if not rootNode:
        return
    inOrderTraversal(rootNode.leftChild, level++1)
    print(' - '*level, rootNode.data)
    inOrderTraversal(rootNode.rightChild, level++1)

# inOrderTraversal(drink)

print('============================================')

def postOrderTraversal(rootNode,level=0):
    if not rootNode:
        return
    postOrderTraversal(rootNode.leftChild, level++1)
    postOrderTraversal(rootNode.rightChild, level++1)
    print(' - '*level, rootNode.data)

# postOrderTraversal(drink)

print('============================================')

def levelOrderTraversal(rootNode,level=0):
    if not rootNode:
        return
    q = queue.Queue()
    q.enqueue(rootNode)
    while not q.isEmpty():
        root = q.dequeue()
        print(root.value.data)
        if root.value.leftChild:
            q.enqueue(root.value.leftChild)
        if root.value.rightChild:
            q.enqueue(root.value.rightChild)


# levelOrderTraversal(drink)

print('============================================')

def searchBT(rootNode, value, index=0):
    if not rootNode:
        return -1
    q = queue.Queue()
    q.enqueue(rootNode)
    i=0
    while not q.isEmpty():
        root = q.dequeue()
        if root.value.data == str(value):
            return 'yes', i
        if root.value.leftChild:
            q.enqueue(root.value.leftChild)
        if root.value.rightChild:
            q.enqueue(root.value.leftChild)
        i+=1
    return 'not present'

# print(searchBT(drink, 4))

print('============================================')

def insertNodeBT(rootNode, newNode):
    if not rootNode:
        rootNode = newNode
    q=queue.Queue()
    q.enqueue(rootNode)
    while not q.isEmpty():
        root = q.dequeue()
        if root.value.leftChild is not None:
            q.enqueue(root.value.leftChild)
        else:
            root.value.leftChild = newNode
            return 'inserted'
        if root.value.rightChild is not None:
            q.enqueue(root.value.rightChild)
        else:
            root.value.rightChild = newNode
            return 'inserted'

eight = BinaryTree('8')
nine = BinaryTree('9')
# print(insertNodeBT(drink, eight))
# print(insertNodeBT(drink, nine))
# inOrderTraversal(drink)

print('============================================')

def deepestNode(rootNode):
    if not rootNode:
        return 
    q = queue.Queue()
    q.enqueue(rootNode)
    while not q.isEmpty():
        rootNode = q.dequeue()
        if rootNode.value.leftChild:
            q.enqueue(rootNode.value.leftChild)
        if rootNode.value.rightChild:
            q.enqueue(rootNode.value.rightChild)
    return rootNode.value

def deleteNodeBT(rootNode):
    if not rootNode:
        return 
    q=queue.Queue()
    q.enqueue(rootNode)
    pop = deepestNode(rootNode)
    while not q.isEmpty():
        rootNode=q.dequeue()
        if pop == rootNode.value :
            rootNode.value = None
            return
        if rootNode.value.leftChild:
            if rootNode.value.leftChild is pop:
                rootNode.value.leftChild=None
                return
            else:
                q.enqueue(rootNode.value.leftChild)
        if rootNode.value.rightChild:
            if rootNode.value.rightChild is pop:
                rootNode.value.rightChild=None
                return
            else:
                q.enqueue(rootNode.value.rightChild)

# deleteNodeBT(drink)
# deleteNodeBT(drink)
# inOrderTraversal(drink)


print('============================================')

def changeToDepth(rootNode, d=0):
    if not rootNode:
        return

    rootNode.data=d
    changeToDepth(rootNode.rightChild, d+1)
    changeToDepth(rootNode.leftChild, d+1)


# changeToDepth(drink)
# inOrderTraversal(drink)


print('============================================')

def findHeight(rootNode):
    if not rootNode:
        return 0

    R=findHeight(rootNode.rightChild)
    L=findHeight(rootNode.leftChild)
    if L<R:
        return R+1
    else:
        return L+1
    

# print(findHeight(drink))


print('============================================')

def greaterX(rootNode, x):
    if not rootNode:
        return 0
    else:
        L=greaterX(rootNode.leftChild,x)
        R=greaterX(rootNode.rightChild,x)
        if int(rootNode.data) > int(x):
            return 1+L+R
        else:
            return L+R


# inOrderTraversal(drink)
# print(greaterX(drink, 0))



print('============================================')

def sumNodes(rootNode):
    if not rootNode:
        return 0
    
    
    return int(rootNode.data)+sumNodes(rootNode.leftChild)+sumNodes(rootNode.rightChild)


# inOrderTraversal(hot)
# print(sumNodes(hot))





print('============================================')

def isPresent(rootNode,x):
    if not rootNode:
        return False

    if int(rootNode.data)==x:
        return True

    l=isPresent(rootNode.leftChild,x)
    r=isPresent(rootNode.rightChild,x)
    
    return l or r


# inOrderTraversal(drink)
# print(isPresent(drink,5))




################ - ################ - ################
# # BINARY TREE USING LIST
# class BinaryTree:
#     def __init__(self,data):
#         self.data = data
#         self.leftChild = None
#         self.rightChild = None

    