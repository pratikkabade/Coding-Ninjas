# DOUBLY LINKED LIST
class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
        self.prev = None
    
    def __str__(self):
        return f'{self.prev.data} -> {self.data} -> {self.next.data}'

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0


    def append(self, data):
        new_node = Node(data)
        self.length += 1
        if not self.head:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.prev = self.tail
            self.tail.next = new_node
            new_node.next = None
            self.tail = new_node


    def prepend(self, data):
        new_node = Node(data)
        self.length += 1
        if not self.head:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head = new_node


    def traverse(self):
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()


    def reverse(self):
        current = self.tail
        while current:
            print(current.data, end=' ')
            current = current.prev
        print()


    def pop_first(self):
        popped_node = self.head
        self.head = self.head.next


    def pop_last(self):
        popped_node = self.tail
        self.tail = self.tail.prev
        self.tail.next = None

    def search(self,value):
        current = self.head
        i=0
        while current:
            if current.data == value:
                return i
            else:
                i += 1
                current = current.next
        return -1


    def __str__(self):
        res = ''
        current = self.head
        while current:
            res += str(current.data)
            if current.next:
                res += ' <-> '
            current = current.next
        return res
        

a = DoublyLinkedList()
a.append(1)
a.append(2)
a.append(3)
a.prepend(10)
a.prepend(20)
a.append(5)
print(a)    
print(a.search(10))

