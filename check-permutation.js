// Write an efficient function that checks whether any permutation of an input
// string is a palindrome. Assume the input string only include lowercase letters.

function checkPalindrome(str) {
  // Idea: palindromes have at most 1 character which occurs an odd number
  // of times. We can use a set to collect occurrences of letters. Loop through
  // the input string, check if the set has the letter. If so, remove the letter
  // from the set and if not, add it to the set. At the end, check if the set
  // contains multiple letters. If it contains 0 or 1 element, this can be
  // permutated into a palindrome.
  // Efficiency: Time O(n), Space O(n)

  
}
