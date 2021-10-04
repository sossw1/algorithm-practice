/*
Given a total and an array of integers representing coin denominations, write a function to find the number of ways to make the total with the coins of the available denominations.

  Idea 1: Recursively compose set of solutions iterating from 1 to total.

  Idea 2: Build an array for number of solutions from bottom up.
*/

function numCurrencyCombinations(denominations, total) {
  // base case
  const combinations = new Array(total + 1).fill(0);
  combinations[0] = 1;

  denominations.forEach(coin => {
    for(let currentTotal = coin; currentTotal <= total; currentTotal++) {
      const remainder = currentTotal - coin;
      combinations[currentTotal] += combinations[remainder];
    }
  });

  return combinations[total];
}
