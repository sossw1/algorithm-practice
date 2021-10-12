/*
Implement a queue with two stacks. Your queue should have enqueue and dequeue methods and be FIFO. Assume you already have a stack implementation with push and pop methods operating in O(1) time.

  Idea 1: Enqueues push items to one stack while dequeues pop items from the other stack. When switching from an enqueue call to a dequeue call or vice versa, make sure items are transferred to the correct stack.

  Idea 2: Improve upon idea 1. When calling second/third/etc. dequeue/enqueue, simply push/pop from the same stack as the previous operation.
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