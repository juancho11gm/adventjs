import assert from 'assert';

function dryNumber(dry: number, numbers: number) {
  const arr = Array.from({ length: numbers }, (_, index) => index + 1);
  return arr.filter(n => n.toString().includes(`${dry}`));
}

try {
  assert.deepEqual(dryNumber(1, 15), [1, 10, 11, 12, 13, 14, 15])
  assert.deepEqual(dryNumber(2, 20), [2, 12, 20])
} catch (error) {
  console.log(error)
}

