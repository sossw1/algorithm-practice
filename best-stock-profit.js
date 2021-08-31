/* Given an array of stock prices where indexes correspond to minutes since
opening time, write a function that returns the best possible profit for one
purchase and one sale of stock without short-selling the stock. */

function bestProfit(priceArray) {
  /* Idea: Using greedy algorithm, walk through array and compare profit at each
  index to previous possible profit values and keep the better option.
  Time: O(n), Space: O(1) */

  // Must have an array with at least two prices
  if (priceArray.length < 2) {
    throw new Error('Must have at least 2 stock prices.')
  }

  let currentMinimum = priceArray[0];
  let currentHighestProfit = priceArray[1] - priceArray[0];

  for (let i = 1; i < priceArray.length; i++) {
    let currentPrice = priceArray[i];
    // Check if there is a new highest profit
    if(currentPrice - currentMinimum > currentHighestProfit) {
      currentHighestProfit = currentPrice - currentMinimum;
    }
    // Check if there is a new minimum price
    if(currentPrice < currentMinimum) {
      currentMinimum = currentPrice;
    }
  }
  return currentHighestProfit;
}
