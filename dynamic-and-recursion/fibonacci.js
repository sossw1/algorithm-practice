/*
Write a function fib that finds the nth number in the Fibonacci sequence.
*/

function fib(n) {
  // base case
  if(n === 0 || n === 1) {
    return n;
  }

  return result = fib(n-1) + fib(n-2);
}
