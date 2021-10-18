/*
Given two rectangles as the coordinates of the bottom left corner and their width and height, write a function that outputs their intersection in the same format.

  Idea 1: Find range of overlap for both X and Y values. If there is no overlap for either range, then the rectangles do not intersect. If they only intersect at a point, then the intersection of the rectangles is a line or a point. Otherwise, their intersection is a rectangle.

    Efficiency
    Time: O(1)
    Space: O(1)
*/


class Rectangle {
  constructor(leftX = null, bottomY = null, width = null, height = null) {
    this.leftX = leftX
    this.bottomY = bottomY
    this.width = width
    this.height = height
  }
}

function findRangeOverlap(point1, length1, point2, length2) {
  const lowerBound = Math.max(point1, point2);
  const upperBound = Math.min(point1 + length1, point2 + length2);
  if(lowerBound < upperBound) {
    return {
      startPoint: lowerBound,
      overlapLength: upperBound - lowerBound
    };
  } else {
    return {
      startPoint: null,
      overlapLength: null
    };
  }
}

function intersection(rectA, rectB) {
  const overlapX = findRangeOverlap(rectA.leftX, rectA.width, rectB.leftX, rectB.width);
  const overlapY = findRangeOverlap(rectA.bottomY, rectA.height, rectB.bottomY, rectB.height);

  if (!overlapX.overlapLength || !overlapY.overlapLength) {
    return new Rectangle();
  } else {
    return new Rectangle(overlapX.startPoint, overlapY.startPoint, overlapX.overlapLength, overlapY.overlapLength);
  }
}
