/*
Write a function to check if a binary tree is "superbalanced", meaning the difference between the depth of any two leaf nodes is no greater than one.

  Idea 1: Using breadth-first search (BFS), find the least-depth leaf node, then determine whether any branch has nodes beyond the next-lowest level.

  Idea 2: Using depth-first search (DFS), we compare leaf depths and store the minimum leaf depth for comparison. DFS is more likely to fail faster than BFS, which helps improve the best-case scenario.
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

function isSuperBalanced(treeRoot) {
  if(!treeRoot) {
    return true;
  }
  
}
