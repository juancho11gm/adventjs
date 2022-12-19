import assert from 'assert';

function getCoins(change: number) {
  let changeCopy = change;
  const coins = [50, 20, 10, 5, 2, 1];
  const exchange = new Array(6).fill(0);

  return coins.reduce((accum: number[], currentCoin: number, index: number) => {
    const coin = Math.floor(changeCopy / currentCoin);

    if (coin > 0) {
      accum[index] = coin;
      changeCopy -= coin * currentCoin;
    }

    return accum;
  }, exchange).reverse();
};

try {
  assert.deepEqual(getCoins(51), [1, 0, 0, 0, 0, 1]) // una moneda de 1 céntimo y otra de 50 céntimos
  assert.deepEqual(getCoins(3), [1, 1, 0, 0, 0, 0]) // una moneda de 1 céntimo y otra de 2
  assert.deepEqual(getCoins(5), [0, 0, 1, 0, 0, 0]) // una moneda de 5 céntimos
  assert.deepEqual(getCoins(16), [1, 0, 1, 1, 0, 0]) // una moneda de 1 céntimo, una de 5 y una de 10
  assert.deepEqual(getCoins(100), [0, 0, 0, 0, 0, 2]) // dos monedas de 50 céntimos
} catch (error) {
  console.log(error)
}
