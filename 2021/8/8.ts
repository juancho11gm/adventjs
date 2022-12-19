import assert from 'assert';

function maxProfit(prices: number[]) {
  const maxPr = prices.reduce((maxDifference, currentNumber, currentIndex) => {
    const difference = prices.slice(currentIndex + 1).reduce((max, number) => {
      return Math.max(max, number - currentNumber);
    }, 0);

    return Math.max(maxDifference, difference);
  }, 0);

  return maxPr || -1;
}

try {

  const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
  assert.equal(maxProfit(pricesBtc), 16)  // -> 16 (compra a 18, vende a 34)

  const pricesEth = [10, 20, 30, 40, 50, 60, 70]
  assert.equal(maxProfit(pricesEth), 60)  // -> 60 (compra a 10, vende a 70)


  const pricesDoge = [18, 15, 12, 11, 9, 7]
  assert.equal(maxProfit(pricesDoge), -1)


  const pricesAda = [3, 3, 3, 3, 3]
  assert.equal(maxProfit(pricesAda), -1)

} catch (error) {
  console.log(error)
}
