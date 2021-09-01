/*
Given an array of integers, find the highest product that can be produced
with three of them.

  Idea: Sorting and selecting three highest integers

  Idea 2: Greedy walk through array, storing in another array and updating
  when a value exceeds one of the current three highest values

  NOTE: We care about the magnitude of negative numbers. For instance, in the
  array [-10, -5, 1, 2, 3], the best resulting product is: (-10)*(-5)*3 = 150
  Therefore, we can't simply pick the highest three numbers and multiply.

  NOTE: We also need to consider cases with 0
  
  Idea 3: Greedy walk through array for the three highest and three 
  lowest numbers, then decide what combination is best.
*/

function findHighestProductTriple(arrayOfInts) {
  
}
