/*
Given an array of integers between 1 and n, of size n+1, write a function which
finds an integer that appears more than once in the array without modifying the
input array. Optimize the solution for space efficiency.

  Idea 1: To use minimal space, sort the array first, then compare neighboring
  elements until a duplicate is found. O(1) space, O(n log n) time.
    Unfortunately, this would either require an additional array of size n in
    memory, or we would be modifying the input array.
  
  Idea 2: At each step, cut array size at midpoint value and check which half
  has the duplicate by checking size of array halves. Pidgeonhole the duplicate,
  repeating until array half size is 1.
*/

function findDuplicate(arrayOfInts) {

}
