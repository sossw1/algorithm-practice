/*
Given an array of n+1 integers between 1 and n where each number appears once except a duplicate, find the duplicate.

  Idea 1: Using the triangular series from 1 to n, the sum should be [n(n-1)]/2 plus whichever number is the duplicate.
  
    Efficiency
    Time: O(n)
    Space: O(1)
*/

function findDuplicate(arrayOfInts) {
  const highestInt = arrayOfInts.length - 1;
  const sum = arrayOfInts.reduce((acc, curr) => acc + curr , 0);
  const sumOfUnique = (highestInt * (highestInt + 1)) / 2;
  return sum - sumOfUnique;
}
