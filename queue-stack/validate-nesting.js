/*
Write a function that determines whether or not an input string's opening and closing parentheses, brackets and braces are nested properly.

  Idea 1: Iterate through the string using LIFO strategy to check any encountered closing symbol matches the most recent opening symbol. Use a stack to store opening symbols.

    Efficiency
    Time: O(n)
    Space: O(n)
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
  const openingSymbols = new Stack();
  let matchingOpeningSymbol = null;
  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    switch (character) {
      case '(':
      case '{':
      case '[':
        openingSymbols.push(character);
        break;
      case ')':
        matchingOpeningSymbol = '(';
        opening = openingSymbols.pop();
        if (opening === matchingOpeningSymbol) {
          break;
        } else {
          return false;
        }
      case '}':
        matchingOpeningSymbol = '{';
        opening = openingSymbols.pop();
        if (opening === matchingOpeningSymbol) {
          break;
        } else {
          return false;
        }
      case ']':
        matchingOpeningSymbol = '[';
        opening = openingSymbols.pop();
        if (opening === matchingOpeningSymbol) {
          break;
        } else {
          return false;
        }
      default:
        break;
    }
  }
  return openingSymbols.items.length ? false : true;
}
