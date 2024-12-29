class Stack {
    constructor() {
        this.stack = []; // Array to store stack elements
    }

    // Add an element to the top of the stack
    push(element) {
        this.stack.push(element);
    }

    // Remove and return the top element of the stack
    pop() {
        return this.stack.length > 0 ? this.stack.pop() : "Stack is empty";
    }

    // Return the top element without removing it
    peek() {
        return this.stack.length > 0 ? this.stack[this.stack.length - 1] : "Stack is empty";
    }

    // Check if the stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }

    // Return the size of the stack
    size() {
        return this.stack.length;
    }

    // Clear the stack
    clear() {
        this.stack = [];
    }
}

// Example usage
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element:", stack.peek()); // Output: 30
console.log("Stack size:", stack.size());  // Output: 3

console.log("Popped element:", stack.pop()); // Output: 30
console.log("Stack size:", stack.size());    // Output: 2

console.log("Is stack empty?", stack.isEmpty()); // Output: false
stack.clear();
console.log("Is stack empty after clearing?", stack.isEmpty()); // Output: true