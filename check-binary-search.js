/*
Problem: Write a function to check if a binary tree is a valid binary search tree.

  Idea 1: At each node, check if the value fits within bounds. Use DFS, since it is likely in most cases to take less space than BFS.
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

function isBinarySearchTree(rootNode) {
  
}
