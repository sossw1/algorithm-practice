/*
Write a function that takes an array of scores and the highest possible score and returns a sorted array of scores in less than O(n log n) time.

  Idea 1: Using a hash map (object) we can store how many times each value occurs, then walk through possible values again in order to write the ordered array. This takes up O(n) space but gets time down to O(n).
*/

function sortScores(arrayOfScores, highestPossibleScore) {
  const scores = {};
  const sortedScores = [];
  arrayOfScores.forEach((item) => {
    if(scores.hasOwnProperty([item])) {
      scores[item] += 1;
    } else {
      scores[item] = 1;
    }
  });
  
}
