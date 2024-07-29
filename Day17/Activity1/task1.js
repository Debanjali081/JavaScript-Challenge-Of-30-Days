// Task 1 : Implement a Node class to represent in a linked list with properties value and next. 

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


const firstNode = new Node(5);
const secondNode = new Node(10);
firstNode.next = secondNode;

console.log(firstNode.value); // Output: 5
console.log(firstNode.next.value); // Output: 10
