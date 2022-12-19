import assert from 'assert';

function carryGifts(gifts: string[], maxWeight: number) {
  const giftsStr = gifts.join(' ');
  // \b for matching the start of a word
  // \w * for matching the any word with 0 or more spaces
  // {1, maxWeight} for matching between 1 and maxWeight characters
  // (?= |$) for matching space or end without including them
  const regex = new RegExp(`\\b(\\w *){1,${maxWeight}}(?= |$)`, 'g');
  return giftsStr.match(regex) || [];
}

try {
  assert.deepEqual(carryGifts(['game', 'bike', 'book', 'toy'], 10), ['game bike', 'book toy']);
  assert.deepEqual(carryGifts(['game', 'bike', 'book', 'toy'], 7), ['game', 'bike', 'book toy']);
  assert.deepEqual(carryGifts(['game', 'bike', 'book', 'toy'], 4), ['game', 'bike', 'book', 'toy']);
  assert.deepEqual(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6), ['toy', 'gamme', 'toy', 'bike']);
  assert.deepEqual(carryGifts(['toy', 'toy', 'toy', 'toy'], 2), []);


} catch (error) {
  console.log(error)
}

