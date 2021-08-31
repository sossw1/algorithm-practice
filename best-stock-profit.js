/* Given an array of stock prices where indexes correspond to minutes since
opening time, write a function that returns the best possible profit for one
purchase and one sale of stock without short-selling the stock. */

function bestProfit(priceArray) {
  /* Idea: Using greedy algorithm, walk through array and compare profit at each
  index to previous possible profit values and keep the better option.
  Time: O(n), Space: O(1) */

  // Must have an array with at least two prices
  if (priceArray.length < 2) {
    return null;
  }

  let currentMinimum = priceArray[0];
  let currentHighestProfit = priceArray[1] - priceArray[0];

  for (let i = 1; i < priceArray.length; i++) {
    let currentPrice = priceArray[i];
    // check for new global minimum
    if (currentPrice < currentMinimum) {
      let previousMinimum = currentMinimum;
      currentMinimum = currentPrice;
      // if new global min found, use previous global min in profit calculation
      if (previousMinimum - currentPrice > currentHighestProfit) {
        currentHighestProfit = currentPrice - previousMinimum;
      }
      // if no new global min found, check profit with current global min
    } else if (currentPrice - currentMinimum > currentHighestProfit) {
      currentHighestProfit = currentPrice - currentMinimum;
    }
  }
  return currentHighestProfit;
}
