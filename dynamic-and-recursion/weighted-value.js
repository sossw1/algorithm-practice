/*
Suppose you have infinite supply of a given set of coins, each with their own weight and value, but you can only carry a certain amount of weight. Write a function that returns the maximum value of the coins that could be carried with the given total weight.

  Idea 1: Compose array of best value by weight (index) bottom-up for each coin.

    Efficiency (where n = # coins, w = maximum weight)
    Time: O(n*w)
    Space: O(w)
*/

function maxCarriedValue(coinTypes, maxWeight) {
  // base case
  const bestValue = new Array(maxWeight + 1).fill(0);
  for(let coinIndex = 0; coinIndex < coinTypes.length; coinIndex++) {
    const coin = coinTypes[coinIndex];
    if(coin.weight === 0 && coin.value > 0) return Infinity;
    for(let i = coin.weight; i <= maxWeight; i++) {
      let remainingWeight = i - coin.weight;
      bestValue[i] = Math.max(bestValue[i], coin.value + bestValue[remainingWeight]);
    }
  }
  return bestValue[maxWeight];
}
