/*
Suppose you have infinite supply of a given set of coins, each with their own weight and value, but you can only carry a certain amount of weight. Write a function that returns the maximum value of the coins that could be carried with the given total weight.

  Idea 1: Compose array of best value by weight (index) bottom-up for each coin.
*/

function maxCarriedValue(coinTypes, maxWeight) {
  // base case
  const bestValue = new Array(maxWeight + 1).fill(0);

}
