import assert from 'assert';

function printTable(gifts: Gift[]) {
  const GIFT = 'Gift';
  const QUANTITY = 'Quantity';

  const giftsLength = gifts.map(g => g.name.length);
  const quantitiesLength = gifts.map(g => g.quantity.toString().length);

  let maxLenGifts = Math.max(...[GIFT.length, ...giftsLength]);
  let maxLenQuant = Math.max(...[QUANTITY.length, ...quantitiesLength]);

  const offset = 7; //  2 Start + 3 Mid + 2 End
  const rowLength = maxLenGifts + maxLenQuant + offset;

  const firstRow = '+'.repeat(rowLength);
  const LastRow = '*'.repeat(rowLength);

  const giftTop = GIFT + ' '.repeat(maxLenGifts - GIFT.length);
  const quantityTop = QUANTITY + ' '.repeat(maxLenQuant - QUANTITY.length);
  const tableHeader = `| ${giftTop} | ${quantityTop} |`;
  const hr = `| ${'-'.repeat(maxLenGifts)} | ${'-'.repeat(maxLenQuant)} |`;

  let giftsRows = gifts.reduce((accum: string, { name, quantity }: Gift) => {
    const giftSpacesDiff = maxLenGifts - name.length;
    const giftCol = name + ' '.repeat(giftSpacesDiff);

    const quantitySpacesDiff = maxLenQuant - quantity.toString().length;
    const quantityCol = quantity + ' '.repeat(quantitySpacesDiff);

    return accum += `| ${giftCol} | ${quantityCol} |\n`;
  }, '');

  const table = `${firstRow}\n${tableHeader}\n${hr}\n${giftsRows}${LastRow}`;
  return table;
}

type Gift = {
  name: string;
  quantity: number;
}

try {
  assert.equal(
    printTable([
      { name: 'Game', quantity: 2 },
      { name: 'Bike', quantity: 1 },
      { name: 'Book', quantity: 3 }
    ]),
    `+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************`
  )

  assert.equal(
    printTable([
      { name: 'PlayStation 5', quantity: 9234782374892 },
      { name: 'Book Learn Web Dev', quantity: 23531 }
    ]),
    `++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************`
  )
} catch (error) {
  console.log(error)
}