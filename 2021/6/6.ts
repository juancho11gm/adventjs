import assert from 'assert';

function sumPairs(numbers: number[], result: number) {
  const map = new Map();
  const pairs: Pair = {};

  numbers.forEach((n, i) => {
    if (map.has(n)) pairs[map.get(n)] = [result - n, n];
    else map.set(result - n, i);
  });

  const [firstSortedByIndex] = Object.entries(pairs).sort(([key1], [key2]) => +key1 - +key2);
  return firstSortedByIndex?.[1] || null;
}

type Pair = {
  [key: string]: [number, number]
}

try {
  assert.deepEqual(sumPairs([3, 5, 7, 2], 10), [3, 7]);
  assert.deepEqual(sumPairs([-3, -2, 7, -5], 10), null);
  assert.deepEqual(sumPairs([0, 2, 2, 3, -1, 1, 5], 6), [1, 5]);
  assert.deepEqual(sumPairs([6, 7, 1, 2], 8), [6, 2]);

} catch (error) {
  console.log(error)
}
