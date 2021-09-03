/*
Given an array of integers, return an array where the value at each index is the
product of all values in the given array except the value at the corresponding
index. Do not use division in the algorithm.
Ex: f([1, 2, 3]) = [6, 3, 2]

  Idea 1: Walk forward through array. At each step, accumulate product of prior
  indexes. Then walk backward through array, accumulating product of later
  indexes. Multiply the corresponding values and store in a new array.
*/

function getProductOfAllIntsExceptAtIndex(arrayOfInts) {
  // resultArray accumulates products of indexes prior to current index
  let resultArray = [];
  let productBefore = 1;
  for(let i = 0; i < arrayOfInts.length; i++) {
    resultArray.push[productBefore];
    productBefore *= arrayOfInts[i];
  }
  
}
