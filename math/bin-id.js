/*
Given an array of IDs which contains many duplicate integers and one unique integer, find the unique integer.

  Idea 1: Use a map to store the number of occurrences of integers in the array. Then return the key which has the value of 1.

  Idea 2: We can reduce the storage needed to produce the same runtime of O(n) as idea 1. Starting with 0, use XOR on all the integers in the array. Using XOR with the same integer twice will cancel out, so the remaining integer should be the unique one.
*/

function findUnique(arrayOfIds) {
  let unique = 0;
  arrayOfIds.forEach(id => {
    unique = unique ^ id;
  });
  return unique;
}
