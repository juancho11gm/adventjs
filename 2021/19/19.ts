import assert from 'assert';

function learn(time: number, courses: number[]) {
  let maxSum = 0;
  let maxSumIndexes: number[] = [];
  courses.forEach((course, i) => {
    courses.forEach((otherCourse, j) => {
      const sum = course + otherCourse;
      const sumIsGreater = sum > maxSum && sum <= time;
      if (sumIsGreater && i !== j) {
        maxSum = sum;
        maxSumIndexes = [i, j];
      }
    })
  });
  return maxSumIndexes.length === 0 ? null : maxSumIndexes;
}

try {
  assert.deepEqual(learn(15, [2, 10, 4, 1]), [1, 2]);
  assert.deepEqual(learn(8, [8, 2, 1, 4, 3]), [3, 4]);
  assert.deepEqual(learn(10, [2, 3, 8, 1, 4]), [0, 2]);
  assert.deepEqual(learn(25, [10, 15, 20, 5]), [0, 1]);
  assert.deepEqual(learn(8, [8, 2, 1]), [1, 2]);
  assert.deepEqual(learn(8, [8, 2, 1, 4, 3]), [3, 4]);
  assert.deepEqual(learn(4, [10, 14, 20]), null);
  assert.deepEqual(learn(5, [5, 5, 5]), null);
} catch (error) {
  console.log(error)
}
