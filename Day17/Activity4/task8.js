// Task 8 : Implement a BinaryTree class with methods for inserting values and performing in-order trversal to display nodes .

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Insert a value into the binary tree
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Helper method to insert a node starting from a given root node
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            // Insert into the left subtree
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            // Insert into the right subtree
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Perform in-order traversal of the tree
    inOrderTraversal(node = this.root, result = []) {
        if (node !== null) {
            this.inOrderTraversal(node.left, result); 
            result.push(node.value);                 
            this.inOrderTraversal(node.right, result); 
        }
        return result;
    }

    
    displayInOrder() {
        const result = this.inOrderTraversal();
        console.log(result);
    }
}

// Example usage:
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

tree.displayInOrder(); 
