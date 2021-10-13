/*
Write a function that takes the first node in a singly-linked list and returns a boolean indicating whether the list contains a cycle.

  Idea 1: For each node, check if we've previously encountered it and otherwise add it to the list.

  Idea 2: Use two pointers, where one "slow" pointer traverses one node at a time, while a "fast" pointer traverses two nodes at a time. If they collide, we have a loop. If the "slow" pointer reaches the end (a null "next"), we terminate knowing there were no loops.
*/

function containsCycle(head) {

}
