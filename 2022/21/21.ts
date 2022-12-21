import assert from 'assert';

function printTable(gifts: Gift[]) {
  const GIFT = 'Gift';
  const QUANTITY = 'Quantity';

  const giftsLength = gifts.map(g => g.name.length);
  const quantitiesLength = gifts.map(g => g.quantity.toString().length);

  let maxLengthGifts = [GIFT.length, ...giftsLength].reduce((a, b) => a > b ? a : b);
  let maxLengthQuantities = [QUANTITY.length, ...quantitiesLength].reduce((a, b) => a > b ? a : b);

  const offset = 7; //  2 Start + 3 Mid +  2End
  const rowLength = maxLengthGifts + maxLengthQuantities + offset;

  const firstRow = '+'.repeat(rowLength);
  const LastRow = '*'.repeat(rowLength);

  const giftHeader = `${GIFT}${' '.repeat(maxLengthGifts - GIFT.length)}`
  const quantityHeader = `${QUANTITY}${' '.repeat(maxLengthQuantities - QUANTITY.length)}`;
  const tableHeader = `| ${giftHeader} | ${quantityHeader} |`;
  const hr = `| ${'-'.repeat(maxLengthGifts)} | ${'-'.repeat(maxLengthQuantities)} |`;

  let giftsRows = '';
  gifts.forEach(gift => {
    const giftSpacesDiff = maxLengthGifts - gift.name.length;
    const giftColumn = `${gift.name}${' '.repeat(giftSpacesDiff)}`;

    const quantitySpacesDiff = maxLengthQuantities - gift.quantity.toString().length;
    const quantityColumn = `${gift.quantity}${' '.repeat(quantitySpacesDiff)}`;

    giftsRows += `| ${giftColumn} | ${quantityColumn} |\n`;
  });

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