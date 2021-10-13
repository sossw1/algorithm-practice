/*
Write a function that deletes a node from a singly-linked list, given only a variable pointing to that node.

  Idea 1: Store the "next" pointer from the node that is to be deleted. Then, traverse through the linked list. Determine at each step if the next node would be the node to be deleted. Once this is true, change the current node's "next" pointer to stored pointer.
*/

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteNode(node) {

}
