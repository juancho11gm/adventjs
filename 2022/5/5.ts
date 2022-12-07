import assert from 'assert';

function getMaxGifts(giftsCities: number[], maxGifts: number, maxCities: number) {
  let maxSum = 0;
  giftsCities.sort((a, b) => b - a);

  for (let i = 0; i < giftsCities.length; i++) {
    let sum = giftsCities[i] <= maxGifts ? giftsCities[i] : 0;
    let count = giftsCities[i] <= maxGifts ? 1 : 0;
    const numbers = [giftsCities[i]]
    for (let j = 0; j < giftsCities.length; j++) {
      if (i !== j) {
        if (sum + giftsCities[j] <= maxGifts && count + 1 <= maxCities) {
          numbers.push(giftsCities[j]);
          count++;
          sum += giftsCities[j];
        }
      }
    }
    if (maxSum < sum) maxSum = sum;
  }

  return maxSum;
}

try {
  assert.equal(getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)
    , 115);
} catch (error) {
  console.log(error)
}