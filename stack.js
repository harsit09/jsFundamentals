class Stack {
    constructor() {
        this.items = []; // Array to store stack elements
    }

    // Add an element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Remove and return the top element of the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Return the top element without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the stack
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
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

stack.clear();
console.log("Is stack empty?", stack.isEmpty()); // Output: true