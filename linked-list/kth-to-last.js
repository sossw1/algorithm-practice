/*
Write a function that takes an integer k and the head node of a singly-linked list and returns the kth to last node in the list.

  Idea 1: Walk through the array with two pointers that are k-1 apart until the second pointer hits the end of the list.
*/

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function kthToLastNode(head, k) {
  let leftNode = head;
  let rightNode = head;
  for (let i = 0; i < k - 1; i++) {
    if(rightNode.next) {
      rightNode = rightNode.next;
    } else {
      throw new Error('k is greater than the number of nodes');
    }
  }
  while (rightNode.next) {
    leftNode = leftNode.next;
    rightNode = rightNode.next;
  }
  return leftNode;
}
