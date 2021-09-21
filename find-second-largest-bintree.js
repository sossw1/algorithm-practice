/*
Write a function that finds the second largest element in a binary search tree.

  Idea 1: Use depth-first search approach to find the largest node value until a leaf is reached, at which point its parent should be the second-largest value in a binary search tree.
    Time: O(depth) which is O(log n) if the tree is balanced and O(n) otherwise
    Space: O(1) since we only store the current node and it's ancestor's value
*/

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }
  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function findLargest(rootNode) {
  let current = rootNode;
  while (current) {
    if (!current.right) return current.value;
    current = current.right;
  }
}

function findSecondLargest(rootNode) {
  // check if at least 2 nodes
  let current = rootNode;
  while (current) {
    if (!current.right && current.left) {
      // current is largest and has left subtree, return largest in left subtree
      return findLargest(current.left);
    }

    if (
      // if current node is parent of largest node, return its value
      current.right
      && !current.right.left
      && !current.right.right
    ) {
      return current.value;
    }

    // case: current is parent of right subtree, move right
    current = current.right;
  }
}
