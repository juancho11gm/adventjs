import assert from 'assert';

function getOptimalPath(path: number[][]) {
  return path.reduceRight((previous, current) => {
    return current.map((val, index) => {
      return val + Math.min(previous[index], previous[index + 1])
    })
  })[0];
}

try {

  //       0
  //      / \
  //     7   4
  //    / \ / \
  //   2   4   6
  //  / \ / \ / \
  // 9   4   1   3
  assert.deepEqual(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]), 8)

} catch (error) {
  console.log(error)
}