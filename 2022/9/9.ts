import assert from 'assert';

function countTime(leds: number[]) {
  const getOnIndex = (n: number, i: number) => {
    if (n === 0) return -1;
    if (i === leds.length - 1) return 0;
    return i + 1;
  }

  let laps = 0;
  while (!leds.every(n => n === 1)) {
    const onPositions = leds.map(getOnIndex).filter(n => n >= 0);
    onPositions.forEach(pos => leds[pos] = 1);
    laps++;
  }

  return laps * 7;
}

try {
  assert.equal(countTime([0, 0, 1, 0, 0]),
    28
  );
} catch (error) {
  console.log(error)
}