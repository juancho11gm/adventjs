import assert from 'assert';

function listGifts(letter: string) {
  const gifts = letter.split(' ').filter(s => s && !s.includes('_'));
  return gifts.reduce((accum: Gift, current) => {
    accum[current] = accum[current] + 1 || 1
    return accum;
  }, {} as Gift);
}

type Gift = {
  [key: string]: number
}

try {
  assert.deepEqual(listGifts('bici coche balón _playstation bici coche peluche'), {
    bici: 2,
    coche: 2,
    balón: 1,
    peluche: 1
  });
} catch (error) {
  console.log(error)
}
