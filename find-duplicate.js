/*
Given an array of integers between 1 and n, of size n+1, write a function which
finds an integer that appears more than once in the array without modifying the
input array. Optimize the solution for space efficiency.

  Idea 1: To use minimal space, sort the array first, then compare neighboring
  elements until a duplicate is found. O(1) space, O(n log n) time.
    Unfortunately, this would either require an additional array of size n in
    memory, or we would be modifying the input array.
  
  Idea 2: At each step, cut array size at midpoint value and check which half
  has the duplicate by checking size of array halves. Pidgeonhole the duplicate,
  repeating until array half size is 1.
*/

function findDuplicate(numbers) {
  let floor = 1;
  let ceiling = numbers.length - 1;

  while(floor < ceiling) {
    let midpoint = Math.floor((floor + ceiling) / 2);
    let lowerRangeFloor = floor;
    let lowerRangeCeiling = midpoint;
    let upperRangeFloor = midpoint + 1;
    let upperRangeCeiling = ceiling;

    let distinctInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;
    
    let itemsInLowerRange = 0;
    for(let i = 0; i < numbers.length; i++) {
      if(numbers[i] <= lowerRangeCeiling && numbers[i] >= lowerRangeFloor) {
        itemsInLowerRange += 1;
      }
    }

    if(itemsInLowerRange > distinctInLowerRange) {
      floor = lowerRangeFloor;
      ceiling = lowerRangeCeiling;
    } else {
      floor = upperRangeFloor;
      ceiling = upperRangeCeiling;
    }
  }
  return floor;
}
