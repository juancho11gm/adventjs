import assert from 'assert';

function checkJump(heights: number[]) {
  const firstHalf = heights.splice(0, heights.indexOf(Math.max(...heights)));
  const isUp = firstHalf.slice(1).every((l, i) => l >= firstHalf[i]);
  const isDown = heights.slice(1).every((h, i) => h <= heights[i]);
  return isUp && isDown && !!firstHalf.length && heights.length > 1
}

try {
  assert.equal(checkJump([1, 3, 8, 5, 2]), true);
  assert.equal(checkJump([1, 7, 3, 5]), false);
  assert.equal(checkJump([2, 2, 2, 2]), false);
  assert.equal(checkJump([1, 3, 2, 5, 4, 3, 2, 1]), false);
  assert.equal(checkJump([1, 2, 3]), false);
} catch (error) {
  console.log(error)
}