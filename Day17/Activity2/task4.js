// Task 4 : Use the Stack class to reverse a string by pushing all characters onto the stack and then popping off them .

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Function to reverse a string using the Stack class
function reverseString(str) {
    const stack = new Stack();

    // Push all characters of the string onto the stack
    for (let char of str) {
        stack.push(char);
    }

    // Pop all characters off the stack and build the reversed string
    let reversedStr = '';
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

// Example usage:
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlroW ,olleH"
