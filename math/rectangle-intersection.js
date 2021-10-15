/*
Given two rectangles as the coordinates of the bottom left corner and their width and height, write a function that outputs their intersection in the same format.

  Idea 1: Find range of overlap for both X and Y values. If there is no overlap for either range, then the rectangles do not intersect. If they only intersect at a point, then the intersection of the rectangles is a line or a point. Otherwise, their intersection is a rectangle.
*/


class Rectangle {
  constructor(leftX, bottomY, width, height) {
    this.leftX = leftX
    this.bottomY = bottomY
    this.width = width
    this.height = height
  }
}

function intersection(rectangleA, rectangleB) {

}
