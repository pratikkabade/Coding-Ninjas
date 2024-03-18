class TreeNode():
    def __init__(self, data, children=[]):
        self.data = data
        self.children = children
    
    def __str__(self, level=0):
        res = ' - ' * level + str(self.data) + '\n'
        for c in self.children:
            res += c.__str__(level+1)
        return res
    
    def addChild(self, TreeNode):
        self.children.append(TreeNode)



drink = TreeNode('drink', [])
hot = TreeNode('hot', [])
cold = TreeNode('cold', [])
drink.addChild(hot)
drink.addChild(cold)
print(drink)

print('----------')

cof = TreeNode('coffee',[])
tea = TreeNode('tea',[])
hot.addChild(cof)
hot.addChild(tea)
beer = TreeNode('beer', [])
juice = TreeNode('juice', [])
cold.addChild(beer)
cold.addChild(juice)
print(drink)





