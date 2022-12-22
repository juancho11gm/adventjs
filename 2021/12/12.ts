import assert from 'assert';

function getMinJump(obstacles: number[]) {
  for (let jump = 2; ; jump++) {
    if (obstacles.every(obstacle => obstacle % jump !== 0)) return jump;
  }
}

try {
  assert.equal(getMinJump([5, 3, 6, 7, 9]), 4);
  assert.equal(getMinJump([2, 4, 6, 8, 10]), 7);
  assert.equal(getMinJump([1, 2, 3, 5]), 4);
  assert.equal(getMinJump([3, 7, 5]), 2);
  assert.equal(getMinJump([9, 5, 1]), 2);
} catch (error) {
  console.log(error)
}
