class Node:
    def __init__(self, value = None):
        self.value = value
        self.next = None
 
class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
    
    def append(self, d):
        new = Node(d)
        if self.head:
            self.tail.next = new
            self.tail = new
        else:
            self.head = self.tail = new

    def __str__(self):
        cur = self.head
        while cur:
            print(cur.value)
            cur = cur.next
        return 'done'

class Stack:
    def __init__(self, maxSize):
        self.list = []
        self.maxSize = maxSize
    
    def __str__(self):
        values = self.list.reverse()
        values = [ str(x) for x in self.list ]
        return '\n'.join(values)

    def isEmpty(self):
        if self.list == []:
            return True
        else:
            return False

    def isFull(self):
        if len(self.list) == self.maxSize:
            return True
        else:
            return False

    def push(self, value):
        if self.isFull():
            return "Error: Maxsize"
        else:
            self.list.append(value)
            return "Pushed successfully"
    
    def pop(self):
        if self.isEmpty():
            return "Nothing to Pop"
        else:
            self.list.pop()
            return "Popped successfully"

    def delete(self):
        self.list = None
        return "Deleted successfully"

    def convert(self,ll):
        cur = ll.head
        while cur:
            self.push(cur.value)
            cur = cur.next


print('-------------------')
# a = Stack(3)
# a.push(1)
# a.push(2)
# print(a.push(3))
# print(a.push(4))
# print(a)
b=LinkedList()
b.append(1)
b.append(2)
b.append(3)
b.append(4)
print(b)
a=Stack(3)
a.convert(b)
print(a)