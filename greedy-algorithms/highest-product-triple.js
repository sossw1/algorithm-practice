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
  
  Idea 3: Greedy walk through array for the highest product of three, which will
  be the result of the highest number times either the product of the two next
  highest numbers or the two lowest numbers. Track these intermediate values
  along the way.

  Time: O(n), Space: O(1)
*/

function findHighestProductTriple(arrayOfInts) {
  // Test if input at least 3 integers
  if (arrayOfInts.length < 3) {
    throw new Error('Must input at least 3 integers');
  }

  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);

  let highestProductTwo = arrayOfInts[0] * arrayOfInts[1];
  let lowestProductTwo = arrayOfInts[0] * arrayOfInts[1];

  let highestProductThree = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  for (let i = 2; i < arrayOfInts.length; i++) {
    // check current value's two products against current highest result
    // update highest and lowest products
    // update highest and lowest numbers

    let current = arrayOfInts[i];
    // Check if we have a new highest triple using the current number
    highestProductThree = Math.max(
      highestProductThree,
      current * highestProductTwo,
      current * lowestProductTwo
    );

    // Check if we have a new highest product of two
    highestProductTwo = Math.max(
      highestProductTwo,
      current * highest,
      current * lowest
    );

    // Check if we have a new lowest product of two
    lowestProductTwo = Math.min(
      lowestProductTwo,
      current * highest,
      current * lowest
    );

    // Check if we have a new highest value
    highest = Math.max(highest, current);

    // Check if we have a new lowest value
    lowest = Math.min(lowest, current);

  }
  return highestProductThree;
}
