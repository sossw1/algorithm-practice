/*
Write a function that takes an array of scores and the highest possible score and returns a sorted array of scores in less than O(n log n) time.

  Idea 1: Using a hash map (object) we can store how many times each value occurs, then walk through possible values again in order to write the ordered array. This takes up O(n) space but gets time down to O(n).

  Idea 2: Use an array for counting instead to improve time.
*/

function sortScores(arrayOfScores, highestPossibleScore) {
  const scoreCounts = new Array(highestPossibleScore + 1).fill(0);
  const sortedScores = [];
  arrayOfScores.forEach((item) => {
    scoreCounts[item] += 1;
  });
  
  for(let i = highestPossibleScore; i >= 0; i--) {
    for(let j = 0; j < scoreCounts[i]; j++) {
      sortedScores.push(i);
    }
  }
  return sortedScores;
}
