/*
Given an undirected graph of friends in a network find a shortest route for a message from a sender to a recipient. Return an array of friends that make up this path.

  Idea 1: Breadth-first search for the recipient, storing paths where the endpoint node has not been previously encountered in order to avoid cycles.

  Idea 2: Breadth-first search for the recipient, but instead of storing paths we store for each node which node came before it in the graph traversal. By using an object to store this data, we can use the keys to also track which nodes have been previously encountered in order to avoid cycles.

  Exceptions:
    1) If there is no path from the sender to the recipient, return null
    2) If the sender or the recipient are not in the graph, throw an error
*/

function reconstructPath(previousNodes, end) {
  const reversedShortestPath = [];
  let currentNode = end;
  while(currentNode !== null) {
    reversedShortestPath.push(currentNode);
    currentNode = previousNodes[currentNode];
  }
  return reversedShortestPath.reverse();
}

function findShortestPath(graph, start, end) {

}
