class Queue:
    def __init__(self, maxSize):
        self.list = []
        self.maxSize = maxSize

    def __str__(self):
        values = [ str(x) for x in self.list ]
        return ' '.join(values)

    def size(self):
        return len(self.list)

    def isEmpty(self):
        if self.list == []:
            return True
        else:
            return False

    def enqueue(self, value):
        self.list.append(value)
        return "Enqueued successfully"
    
    def dequeue(self):
        self.list.pop(0)
        return "Dequeued successfully"

a=Queue(3)
a.enqueue(1)
a.enqueue(2)
a.enqueue(3)
a.dequeue()
a.dequeue()
# print(a)
print(a.size())


def a():
    b()
    print(1)

def b():
    c()
    print(2)

def c():
    print(3)

a()