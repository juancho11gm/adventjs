import assert from 'assert';

function carryGifts(gifts: string[], maxWeight: number) {
  const getTotal = (str: string) => str.replace(/\s+/g, '').length;

  return gifts.reduce((accum: string[], gift: string, index: number) => {
    const firstGift = index === 0;
    const fitsInPack = gift.length <= maxWeight;

    if (firstGift && fitsInPack) {
      accum.push(gift)
      return accum;
    }

    const lastPack = accum[accum.length - 1];
    const totalGift = getTotal(lastPack + gift);

    if (totalGift <= maxWeight) {
      accum[accum.length - 1] = `${lastPack} ${gift}`;
    } else if (gift.length <= maxWeight) {
      accum.push(gift);
    }

    return accum;
  }, []);
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

