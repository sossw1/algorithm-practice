// Write a function that returns a boolean indicating whether there are two
// distinct numbers in an array whose sum is a target value.

function findCombination(target, array) {
  // Idea 1: Nested loop to compare all combos
  // Time: O(n^2) Space O(1)

  // Idea 2: Sum implies difference from target. Using a set, we can tell if a
  // previous element is the difference between the target and the current value.
  // If not, add the number to the set if it is not already part of it.
  // Time: O(n) Space: O(n)

  const valuesSeen = new Set();
  for(let i=0; i<array.length; i++) {
    const firstValue = array[i];
    const matchingValue = target - firstValue;
    if(valuesSeen.has(matchingValue)) {
      return true;
    }
    valuesSeen.add(firstValue);
  }
  return false;
}
