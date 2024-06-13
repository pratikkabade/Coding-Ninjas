class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):                         # O(1)
        self.head = None
        self.tail = None
        self.length = 0


    def __str__(self):                          # O(n)
        temp_node = self.head
        result = ''
        while temp_node is not None:
            result += str(temp_node.data)
            if temp_node.next is not None:
                result += ' -> '
            temp_node = temp_node.next
        return result


    def append(self,data):                      # O(1)
        new_node = Node(data)
        self.length += 1
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        self.tail.next = new_node
        self.tail = new_node
        

    def prepend(self,data):                     # O(1)
        new_node = Node(data)
        self.length += 1
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        new_node.next = self.head
        self.head = new_node


    def insert(self,data,index):
        new_node = Node(data)
        self.length += 1
        if index == 0:                          # O(1)
            new_node.next = self.head
            self.head = new_node
        elif self.length <= index:              # O(1)
            self.tail.next = new_node
        elif index < 0:                         # O(n)
            prev_node = self.head
            for i in range(self.length + index - 1):
                prev_node = prev_node.next
            new_node.next = prev_node.next
            prev_node.next = new_node
        else:                                   # O(n)
            prev_node = self.head
            for i in range(index-1):
                prev_node = prev_node.next
            new_node.next = prev_node.next
            prev_node.next = new_node


    def traverse(self):                         # O(n)
        current = self.head
        while current is not None:
            print(current.data, end=' ')
            current = current.next


    def search(self,target):                    # O(n)
        current = self.head
        i=0
        while current.data != target:
            current = current.next
            i+=1
        print('\n' + str(i))


    def get(self,index):                        # O(n)
        current = self.head
        for i in range(index):
            current = current.next
        return current


    def set(self,index,data):                   # O(1)
        temp_node = self.get(index)
        temp_node.data = data


    def pop_first(self):                        # O(1)
        self.length -= 1
        popped_node = self.head
        self.head = self.head.next
        popped_node.next = None
        return popped_node


    def pop_last(self):                         # O(n)
        if self.length == 1:
            self.head = self.tail = None
        else:
            popped_node = self.tail
            temp_node = self.head
            while temp_node.next is not self.tail:
                temp_node = temp_node.next
            self.tail = temp_node
            temp_node.next = None
        self.length -= 1
        return temp_node

    def remove(self, index):                    # O(n)
        if index < 0 or self.length <= index:
            return None
        else:
            prev_node = self.get(index-1)
            popped_node = prev_node.next
            prev_node.next = prev_node.next.next
            popped_node.next = None
            self.length -= 1
        return popped_node.data


    def delete_all(self):                       # O(1)
        self.head = None
        self.tail = None
        self.length = 0


    def remove_mid(self):                       # O(n)
        slow = self.head
        fast = self.head.next
        while slow.next is not None and fast.next.next is not None:
            slow = slow.next
            fast = fast.next.next
        popped_node = slow.next
        slow.next = slow.next.next
        return popped_node.data

    def remove_duplicates(self):                # O(n)
        if self.head is None:
            return
        existing = set()
        current = self.head
        while current.next:
            if current.next.data in existing:
                current.next = current.next.next
                self.length -= 1
            else:
                existing.add(current.next.data)
                current = current.next


    def reverse(self):
        prev_node = None
        curr_node = self.head
 
        while curr_node is not None:
            next_node = curr_node.next
            curr_node.next = prev_node
            prev_node = curr_node
            curr_node = next_node
        return prev_node
                
    
def merge(l1, l2):
    new = LinkedList()
    d1 = l1.head
    d2 = l2.head
    while d1 and d2:
        if d1.data < d2.data:
            new.append(d1.data)
            d1 = d1.next
        else:
            new.append(d2.data)
            d2 = d2.next
    while d1:
        new.append(d1.data)
        d1 = d1.next
    while d2:
        new.append(d2.data)
        d2 = d2.next
    return new


a = LinkedList()
a.append(1)
a.append(2)
a.append(3)
a.append(4)
a.append(5)
print(a)

# a.prepend(6)
# a.insert(10,-2)
# a.traverse()
# a.search(10)
# print(a.get(4).data)
# a.set(2,40)
# print(a.pop_first().data)
# a.pop_last()
# print(a.remove(3))
# a.delete_all()
# print(a.remove_mid())
# a.remove_duplicates()

# b = LinkedList()
# b.append(1)
# b.append(6)
# b.append(7)
# print(b)
# print(merge(a,b))
# print(a.reverse().data)


print(a)