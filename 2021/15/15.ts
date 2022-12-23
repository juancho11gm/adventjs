import assert, { strict } from 'assert';

function checkSledJump(heights: number[]) {
  const firstHalf = heights.splice(0, heights.indexOf(Math.max(...heights)));
  const isUp = firstHalf.slice(1).every((l, i) => l > firstHalf[i]);
  const isDown = heights.slice(1).every((h, i) => h < heights[i]);
  return isUp && isDown && !!firstHalf.length && heights.length > 1
}

try {
  strict.equal(checkSledJump([1, 2, 3, 2, 1]), true);
  strict.equal(checkSledJump([0, 1, 0]), true);
  strict.equal(checkSledJump([0, 3, 2, 1]), true);
  strict.equal(checkSledJump([0, 1000, 1]), true);
  strict.equal(checkSledJump([2, 4, 4, 6, 2]), false);
  strict.equal(checkSledJump([1, 2, 3]), false);
  strict.equal(checkSledJump([1, 2, 3, 2, 1, 2, 3]), false);
} catch (error) {
  console.log(error)
}
