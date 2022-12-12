import assert from 'assert';

function getGiftsToRefill(a1: string[], a2: string[], a3: string[]) {
  const uniqueList = (list: string[]) => new Set([...list])
  const allGifts = [...uniqueList(a1), ...uniqueList(a2), ...uniqueList(a3)];

  const totalNGifts = new Map();
  allGifts.forEach(gift => {
    const count = totalNGifts.get(gift) || 0;
    totalNGifts.set(gift, count + 1);
  });

  return [...totalNGifts].filter(gift => gift[1] === 1).map(gift => gift[0]);
}

try {
  assert.deepEqual(getGiftsToRefill(
    ['bici', 'coche', 'bici', 'bici'],
    ['coche', 'bici', 'muñeca', 'coche'],
    ['bici', 'pc', 'pc'],
  ),
    ['muñeca', 'pc']
  );
} catch (error) {
  console.log(error)
}