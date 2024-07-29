// Task 2 : Implement a LinkedList class with methods to add a node to the end , remove a node from the end , and display all nodes.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add a node to the end of the list
    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Remove a node from the end of the list
    remove() {
        if (!this.head) {
            console.log('List is empty');
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        let previous = null;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
    }

    // Display all nodes in the list
    display() {
        if (!this.head) {
            console.log('List is empty');
            return;
        }

        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage:
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.display(); // Output: 1, 2, 3

list.remove();
list.display(); // Output: 1, 2
