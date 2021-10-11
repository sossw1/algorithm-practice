/*
Given the below Stack class, implement a new class MaxStack with a method getMax that returns the largest element in the stack without removing the item. Stacks will only contain integers.
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

class MaxStack extends Stack {
  // using Stack constructor by default
  
}
