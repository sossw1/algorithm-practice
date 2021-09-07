/*
Write a function that performs an in-place shuffle of an array. Make sure the
shuffle is uniform, meaning each item of the original array must have the same
probability of ending up in each spot in the final array.

  Idea 1: For each index in the array, get a random number that determines the
  new index that value should be swapped to.
    This did not produce a uniform shuffle.

  Idea 2: For each index in the new array, select a random element from the
  input array excluding previous indexes to swap to that index.
*/

function shuffle(array) {
  function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
  }

  function swap(array, firstIndex, secondIndex) {
    let placeholder = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = placeholder;
  }

  // Need at least 2 elements
  if(array.length < 2) return array;
  
  for(let i = 0; i < array.length; i++) {
    let randomIndex = getRandom(i, array.length - 1);
    swap(array, i, randomIndex);
  }

  return array;
}
