/*
You are given an array of words that has been sorted alphabetically and then
'rotated' at a random index where the two pieces of the array are swapped. Write
a function that finds this rotation point.

  Idea 1: Since the array is sorted aside from the rotation, we can loop through
  the array and check if each word is greater than the previous word.

  Idea 2: At each step, compare first word of current selection to the middle
  word to see if the rotation point is to the left or right.
*/

function findRotationPoint(arrayOfWords) {
  let lowerBound = -1;
  let upperBound = arrayOfWords.length;
  let firstWord = arrayOfWords[0];
  while(lowerBound + 1 < upperBound) {
    let middleIndex = Math.floor((upperBound + lowerBound) / 2);
    // check if guess is the rotation point
    if(arrayOfWords[middleIndex] < arrayOfWords[middleIndex - 1]) {
      return middleIndex;
    }
    // determine whether rotation point is left or right of guess
    if(arrayOfWords[middleIndex] > firstWord) {
      // search right
      lowerBound = middleIndex;
      firstWord = arrayOfWords[middleIndex];
    } else {
      // search left
      upperBound = middleIndex;
    }
  }
  return 0;
}
