import assert from 'assert';

function getMaxGifts(giftsCities: number[], maxGifts: number, maxCities: number) {
  giftsCities.sort((a, b) => b - a);
  const sumArray = (arr: number[]) => {
    return arr.reduce((acum, curr) => acum + curr, 0);
  }
  let maxSum = 0;
  giftsCities.forEach((gift, i) => {
    let gifts: number[] = [];
    if (gift <= maxGifts) gifts.push(gift);
    giftsCities.forEach((anotherGift, j) => {
      if (i === j) return;
      const canAdd = sumArray(gifts) + anotherGift <= maxGifts;
      const canAddGift = canAdd && gifts.length + 1 <= maxCities;
      if (canAddGift) gifts.push(anotherGift)
    });
    const sum = sumArray(gifts);
    if (maxSum < sum) maxSum = sum;
  });
  return maxSum;
}

try {
  assert.equal(getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)
    , 115);
} catch (error) {
  console.log(error)
}