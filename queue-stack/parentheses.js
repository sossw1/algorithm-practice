/*
Write a function that, given a sentence that may contain nested parentheses and the index of an opening parenthesis, finds the corresponding closing parenthesis.

  Idea 1: Traverse the string to the right of the given opening position, checking for opening or closing parentheses. We want to use LIFO approach to know when nested sets of parentheses are closed. Use a counter to track how many unclosed parentheses have been encountered and return the position when this becomes zero.
  
    Efficiency
    Time: O(n)
    Space: O(1)
*/

function findCloseParenthesis(string, openingPosition) {
  let numOpenParentheses = 1;
  for (let position = openingPosition + 1; position <= string.length; position++) {
    let char = string[position];
    if (char === '(') {
      numOpenParentheses += 1;
    } else if (char === ')') {
      numOpenParentheses -= 1;
      if (numOpenParentheses === 0) {
        return position;
      }
    }
  }
  throw new Error('No closing parenthesis');
}
