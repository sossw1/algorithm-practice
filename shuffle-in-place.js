/*
Write a function that performs an in-place shuffle of an array.

Idea 1: For each index in the array, get a random number that determines the new
index that value should be swapped to.
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
  
  for(let i = 0; i < array.length; i++) {
    let newIndex = getRandom(0, array.length - 1);
    swap(array, i, newIndex);
  }

  return array;
}
