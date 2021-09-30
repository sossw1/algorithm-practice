/*
Given an undirected graph of friends in a network find a shortest route for a message from a sender to a recipient. Return an array of friends that make up this path.

  Idea 1: Breadth-first search for the recipient, storing paths where the endpoint node has not been previously encountered in order to avoid cycles.

  Idea 2: Breadth-first search for the recipient, but instead of storing paths we store for each node which node came before it in the graph traversal. By using an object to store this data, we can use the keys to also track which nodes have been previously encountered in order to avoid cycles.
*/

function findShortestPath(graph, start, end) {

}
