const assert = require('assert');
// determine the area formed by the 4 points.
// The area is the width of the rectangle * the height
const RectangleArea = (strArr) => {
  const points = strArr.map(str => str.match(/\d+/g));
  const minX = points.map(point => point[0]).sort()[0];
  const minY = points.map(point => point[1]).sort()[0];
  const maxX = points
    .map(point => point[0])
    .sort()
    .reverse()[0];
  const maxY = points
    .map(point => point[1])
    .sort()
    .reverse()[0];
  return (maxX - minX) * (maxY - minY);
};

const a1 = '"(1 1)","(1 3)","(3 1)","(3 3)"'; // input
const r1 = '4'; // output
const t1 = RectangleArea(a1);
assert.strictEqual(t1, r1);
