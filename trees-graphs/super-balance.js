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
  
  // accumulate unique depths
  const depths = [];
  const nodes = [[treeRoot, 0]]
  while(nodes.length) {
    const nodePair = nodes.pop();
    const [node, depth] = nodePair;
    if(!node.left && !node.right) {
      if(depths.indexOf(depth) < 0) {
        depths.push(depth);
        // If we have more than 2 unique leaf depths, or two leaf depths differ by more than 1, the binary tree is not superbalanced
        if(
          (depths.length > 2) ||
          (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
        ) {
          return false
        }
      }
    } else {
      // we don't have a leaf, continue on
      if(node.left) {
        nodes.push([node.left, depth + 1]);
      }

      if(node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }
  return true;
}
