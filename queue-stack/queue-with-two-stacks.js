/*
Implement a queue with two stacks. Your queue should have enqueue and dequeue methods and be FIFO. Assume you already have a stack implementation with push and pop methods operating in O(1) time.
*/

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    if(!this.items.length) {
      return null;
    } else {
      return this.items.pop();
    }
  }
}

class Queue {
  
}