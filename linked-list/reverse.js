/*
Write a function that takes the existing head of a linked list, reverses the list in place, and returns the new head of the list.

  Idea 1: Walk forward through list, reversing the pointer for each node.

    Efficiency
    Time: O(n)
    Space: O(1)
*/

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseList(head) {
  let previousNode = null;
  let currentNode = head;
  let nextNode = null;

  while(currentNode) {
    nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }

  return previousNode;
}
