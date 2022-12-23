import assert from 'assert';

function wrapGifts(gifts: string[]) {
  const maxLength = Math.max(...gifts.map(g => g.length));
  const topBottom = '*' + '*'.repeat(maxLength) + '*';
  return [
    topBottom,
    ...gifts.map(g => '*' + g + '*'),
    topBottom
  ]
}

try {
  assert.deepEqual(
    wrapGifts(["📷", "⚽️"]),
    ['****',
      '*📷*',
      '*⚽️*',
      '****'
    ]
  );

  assert.deepEqual(
    wrapGifts(['📷']),
    ['****',
      '*📷*',
      '****'
    ]
  );

} catch (error) {
  console.log(error)
}
