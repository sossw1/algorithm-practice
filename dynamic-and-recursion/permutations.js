/*
Write a recursive function for generating all permutations of an input string, returning them as a set.

  Idea 1:
  Can achieve all permutations by running swaps sequentially.
  1
  12, 21, (12 is a repeat)
  123, 132, 312, 321, 231, 213, (123 is a repeat)
  1234, 1243, 1423, 4123, 4132, 4312, 3412, 3421, 3241, 2341, 2314, 2134, (1234 is a repeat)

  Swap sequentially from right to left until repeat (original string encountered. For a string of length n, swap n and n-1 position, n-1 and n-2 position, ..., 1 and 2 position. Repeat n times. Results in n(n-1) which is O(n^2) operations. This is not able to be made recursive.

  Idea 2: Split into smaller subproblems.
  For example to find permutations of 'dogs', find permutations of dog and then place 's' in each other spot ('sdog','dsog','dosg','dogs').

  Efficiency
    Time: O(n!)
    Space: O(n!)
*/

function getPermutations(string) {
  if(string.length < 2) {
    return new Set(string);
  }

  const resultSet = new Set();
  const firstChar = string.charAt(0);
  const remainingString = string.slice(1);
  const remainingStringPermutations = getPermutations(remainingString);

  remainingStringPermutations.forEach(string => {
    for(let i = 0; i <= string.length; i++) {
      const result = string.slice(0,i) + firstChar + string.slice(i);
      resultSet.add(result);
    }
  });
  return resultSet;
}
