/*
Write a function that performs an in-place shuffle of an array.
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
  
}
