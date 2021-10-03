/*
Write a function fib that finds the nth number in the Fibonacci sequence.
*/

function fib(n) {
  // base case
  if(n === 0 || n === 1) {
    return n;
  }

  let result = 1;
  let previousResult = 1;
  let twoResultsAgo = 0;
  for(let i = 2; i <= n; i++) {
    result = previousResult + twoResultsAgo;
    twoResultsAgo = previousResult;
    previousResult = result;
  }
  return result;
}
