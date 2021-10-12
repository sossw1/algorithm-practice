/*
Implement a queue with two stacks. Your queue should have enqueue and dequeue methods and be FIFO. Assume you already have a stack implementation with push and pop methods operating in O(1) time.

  Idea 1: Enqueues push items to one stack while dequeues pop items from the other stack. When switching from an enqueue call to a dequeue call or vice versa, make sure items are transferred to the correct stack.

  Idea 2: Improve upon idea 1. When calling second/third/etc. dequeue/enqueue, simply push/pop from the same stack as the previous operation.

  Idea 3: Enqueue to an IN stack, dequeue from an OUT stack. If the OUT stack is empty, move all items from the IN stack to the out stack one by one, then dequeue from OUT stack.

    Efficiency per m operations
    Time: Each item has O(1) time to enqueue and O(1) time to dequeue, so the total for m operations is O(m)
    Space: Worst case is all items are enqueued before any are dequeued, so O(m) space
*/

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    if (!this.items.length) {
      return null;
    } else {
      return this.items.pop();
    }
  }
}

class Queue {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }
  enqueue(item) {
    this.inStack.push(item);
  }
  dequeue() {
    if (!this.outStack.items.length) {
      while (this.inStack.items.length) {
        let current = this.inStack.pop();
        this.outStack.push(current);
      }
    }
    if (!this.outStack.items.length) {
      throw new Error('Cannot dequeue from an empty queue');
    }
    return this.outStack.pop();
  }
}
