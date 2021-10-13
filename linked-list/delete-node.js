/*
Write a function that deletes a node from a singly-linked list, given only a variable pointing to that node.

  Idea 1: Store the "next" pointer from the node that is to be deleted. Then, traverse through the linked list. Determine at each step if the next node would be the node to be deleted. Once this is true, change the current node's "next" pointer to stored pointer.

    Efficiency
    Time: O(n)
    Space: O(1)

    Note: A faster method can accomplish this in O(1) time by reassigning value of the input node to the next node and next for the input node to the next's next instead of deleting it. However, this may cause side effects elsewhere in our code since it would effectively delete the next node instead and alter the input node. See the function deleteNodeRisky() below.
*/

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteNode(node) {
  const pointer = node.next;
  let current = node;
  while (current.next.value !== node.value) {
    current = current.next;
  }
  current.next = pointer;
}

function deleteNodeRisky(node) {
  if (node.next) {
    node.value = node.next.value;
    node.next = node.next.next;
  } else {
    throw new Error('Cannot delete the last node with this technique')
  }
}
