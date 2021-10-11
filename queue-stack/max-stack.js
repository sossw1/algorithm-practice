/*
Given the below Stack class, implement a new class MaxStack with a method getMax that returns the largest element in the stack without removing the item. Stacks will only contain integers.

  Idea 1: Use a greedy algorithm by popping elements from the stack into another stack, which will be in reverse order, then pop from that stack back into the original stack so that order is maintained.

  Idea 2: Idea 1's implementation would result in recalculation every time it is called, even when the maximum does not change, since it is run just-in-time. To improve upon the runtime of O(n), we could determine if the maximum changes when any item is added or removed from the stack. Store the maximum in a new property. To maintain this property's accuracy, when we:
    (1) Add an item - we should check if the added item is greater than the previous maximum. If so, the new item's value becomes the new maximum.
    (2) Remove an item - we should check if we removed the maximum item. If we did, we should recalculate the new maximum which would be the next lowest value.
  
  Idea 3: To improve upon worst-case scenario O(n) of item removal from Idea 2, when a new maximum value is pushed to the stack we should store the previous item in a stack. Then, if we remove the new maximum value, we can simply pop from the stack of previous maximums.

    Efficiency
    Time: O(1)
    Space: O(m) where m is the number of operations performed on the stack
*/

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    if(!this.items.length) return null;
    return this.items.pop();
  }
  peek() {
    if(!this.items.length) return null;
    return this.items[this.items.length - 1];
  }
}

class MaxStack {
  constructor() {
    this.stack = new Stack();
    this.maxesStack = new Stack();
  }
  push(item) {
    this.stack.push(item);
    if(item >= this.maxesStack.peek() || this.maxesStack.peek() === null) {
      this.maxesStack.push(item);
    }
  }
  pop() {
    const item = this.stack.pop();
    // if stack item was max, remove it from top of maxesStack
    if(item === this.maxesStack.peek()) {
      this.maxesStack.pop();
    }
    return item;
  }
  getMax() {
    return this.maxesStack.peek();
  }
}
