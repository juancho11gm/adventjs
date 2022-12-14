import assert from 'assert';

function countTime(leds: number[]) {
  const timePerLap = 7;
  let ledsArray = leds.join('').split('1');
  ledsArray[0] += ledsArray.pop();
  return Math.max(...ledsArray.map((led) => led.length)) * timePerLap;
}


try {
  assert.equal(countTime([0, 0, 1, 0, 0]), 28);
  assert.equal(countTime([0, 0, 0, 1]), 21);
  assert.equal(countTime([0, 1, 1, 0, 1]), 7);
} catch (error) {
  console.log(error)
}