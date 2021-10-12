/*
Write a function that determines whether or not an input string's opening and closing parentheses, brackets and braces are nested properly.

  Idea 1: Iterate through the string using LIFO strategy to check any encountered closing symbol matches the most recent opening symbol. Use a stack to store opening symbols.
*/

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    if (!this.items.length) return null;
    return this.items.pop();
  }
}

function isNestingValid(string) {

}
