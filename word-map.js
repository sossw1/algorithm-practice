/*
Write a function that takes a long string and returns a map, where the keys are
words and the values are the number of times the words occurred.
*/

function wordMap(inputString) {
  /*
  For each word of the input string, accumulate on a key inside the map while
  creating new keys for words that have not yet occurred in the string. Make
  sure to skip over spaces, periods, etc.

  Idea: Use array's built in split method to retrieve array of words and
  punctuation, then toLowerCase, then run through array.

  Idea 2: Going through array, slice out words between spaces/punctuation, then
  add/increment key in the map.
  */

  // Helper function to check if letter
  function isLetter(char) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet.includes(char);
  }

  let currentWordStart = 0;
  let currentWordLength = 0;
  const words = new Map();

  for (let i = 0; i < inputString.length; i++) {
    let currentChar = inputString[i];
    if(isLetter(currentChar)) {
      // start word slices on first letter
      if(currentWordLength === 0) {
        currentWordStart = i;
      }
      currentWordLength += 1;
    } else {
      if(currentWordLength === 0) {
        continue;
      }
      const word = inputString.slice(currentWordStart, currentWordStart + currentWordLength).toLowerCase();
      if(words.has(word)) {
        words.set(word, words.get(word) + 1)
      } else {
        words.set(word, 1);
      }
      currentWordLength = 0;
    }
  }
  return words;
}
