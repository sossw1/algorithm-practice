/*
**Note** This exercise demonstrates a more optimal solution of the same problem presented in a previously completed exercise in '/search-sort/find-duplicate.js'

Given an array of integers between 1 and n, of size n+1, write a function which
finds an integer that appears more than once in the array without modifying the
input array. Optimize the solution for space efficiency.

To start, imagine each item in the array as a node in a linked list, where each node has a value and an associated 'next' pointer.

  Idea 1: Search for a node that has 2 inbound edges. That node's index is the value of a duplicate.

  Idea 2: Traverse the array like a linked list, where each value in the input array points to the next index in the linked list.
    There are n+1 nodes with values between 1 and n, so none of the values can be n+1. In terms of positions, none of the values can point to the n+1th position (i.e. the nth index of the array). Make n the head (starting) index, then traverse like a linked list using the values of each node.

    In this traversal, cycles must necessarily exist. This can be proven by contradiction, similar to proving there must be a duplicate in this set of numbers.

    In order to find a node with two inbound pointers (like in idea 1), the first node we encounter that is part of a cycle must have two pointers. We know this is true because we start from outside of the cycle and then enter the cycle.

    To find this special node, first find the length of the cycle (l). We can do this by starting at the head and advancing n times, thus necessitating that we are inside a cycle. Using this position, advance until you get back to the same spot and find out how many steps it took, which is the cycle length. Then use two pointers, one at the head and one that is l spaces ahead, and advance them until they are at the same node.
*/

function findDuplicate(intArray) {
  const headIndex = intArray.length - 1;

  let currentIndex = headIndex;
  for(let i = 0; i < intArray.length - 1; i++) {
    currentIndex = intArray[currentIndex] - 1;
  }

  // Find cycle length
  const firstKnownInCycle = currentIndex;
  let cycleLength = 0;
  do {
    currentIndex = intArray[currentIndex] - 1;
    cycleLength++;
  } while (currentIndex !== firstKnownInCycle);

}
