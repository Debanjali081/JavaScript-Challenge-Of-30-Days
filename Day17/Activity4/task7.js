// Task 7 : Implement a TreeNode class to represent a node in binary tree with properties value,left and right.

class TreeNode {
    constructor(value) {
        this.value = value;   
        this.left = null;     
        this.right = null;   
    }
}

// Example usage:
const rootNode = new TreeNode(10);
rootNode.left = new TreeNode(5);
rootNode.right = new TreeNode(15);

rootNode.left.left = new TreeNode(3);
rootNode.left.right = new TreeNode(7);

rootNode.right.left = new TreeNode(12);
rootNode.right.right = new TreeNode(18);

console.log(rootNode);
