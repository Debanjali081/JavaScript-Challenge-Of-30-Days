// Task 9 : Write a recursive function to perform an in-order traversal of a binary tree.Log the result for a few test cases.

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function inOrderTraversal(root) {
    if (root === null) {
        return [];
    }
    return [...inOrderTraversal(root.left), root.value, ...inOrderTraversal(root.right)];
}

// Test cases
const testCase1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const testCase2 = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6, new TreeNode(5), new TreeNode(7)));
const testCase3 = new TreeNode(10, null, new TreeNode(20, new TreeNode(15), null));

console.log(inOrderTraversal(testCase1)); // Output: [2, 1, 3]
console.log(inOrderTraversal(testCase2)); // Output: [1, 2, 3, 4, 5, 6, 7]
console.log(inOrderTraversal(testCase3)); // Output: [10, 15, 20]
