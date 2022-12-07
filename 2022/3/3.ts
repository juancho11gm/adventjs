import assert from 'assert';

function distributeGifts(packOfGifts: string[], reindeers: string[]) {
  const giftsWeight = packOfGifts.reduce((acc: number, gift: string) => acc + gift.length, 0);
  const reindeersCapacity = reindeers.reduce((acc: number, reindeer: string) => acc + (reindeer.length * 2), 0);
  return Math.floor(reindeersCapacity / giftsWeight);
}

try {
  assert.equal(distributeGifts(['a', 'b', 'c'], ['d', 'e']), 1);
} catch (error) {
  console.log(error)
}