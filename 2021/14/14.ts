import assert, { strict } from 'assert';

function missingReindeer(ids: number[]) {
  let missing = ids.length;
  ids.sort((a, b) => a - b).every((val, i) => {
    if (val !== i) missing = i
    return val === i;
  });
  return missing;
}

try {
  strict.equal(missingReindeer([0, 2, 3]), 1);
  strict.equal(missingReindeer([5, 6, 1, 2, 3, 7, 0]), 4);
  strict.equal(missingReindeer([0, 1]), 2);
  strict.equal(missingReindeer([3, 0, 1]), 2);
  strict.equal(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]), 8);
  strict.equal(missingReindeer([0]), 1);


} catch (error) {
  console.log(error)
}
