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
  // Store root node with bounds
  const nodes = [];
  nodes.push({
    node: rootNode,
    upperBound: Number.POSITIVE_INFINITY,
    lowerBound: Number.NEGATIVE_INFINITY
  });

  while(nodes.length) {
    const { node, lowerBound, upperBound } = nodes.pop();
    if((node.value < lowerBound) || (node.value > upperBound)) {
      // node value out of bounds
      return false;
    }
    
  }
}
