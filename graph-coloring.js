/*
Write a function to find a graph coloring for an undirected graph with N nodes and M edges with maximum node degree D using at most D+1 colors.

  Idea 1: For each node, assign a color that is not already assigned to one of its neighbors. This is an iteration rather than a search (BFS/DFS).
*/

class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

function findColoring(graph, colors) {
  graph.forEach(node => {
    // check if node has a loop edge
    if(node.neighbors.has(node)) {
      throw new Error(`Legal coloring impossible for node with loop: ${node.label}`);
    }

    
  });
}
