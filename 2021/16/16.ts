import assert from 'assert';

function decodeNumber(symbols: string) {
  const dict: Dict = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100,
  }

  return symbols.split('').reduce((accum, str, i) => {
    const current = dict[str];
    const nextOne = dict[symbols[i + 1]];
    return accum += current < nextOne ? current * -1 : current;
  }, 0);
}

type Dict = {
  [key: string]: number;
}

try {
  assert.equal(decodeNumber('...'), 3);
  assert.equal(decodeNumber('.........!'), 107); //  (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
  assert.equal(decodeNumber(';.W'), NaN); //  (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
} catch (error) {
  console.log(error)
}
