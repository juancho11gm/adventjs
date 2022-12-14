import assert from 'assert';

function getCompleted(part: string, total: string) {
  // greatest common divisor
  const getGCD = (a: number, b: number): number =>
    !b ? a : getGCD(b, a % b);

  const partArr = part.split(':');
  const totalArr = total.split(':');
  let numerator = +partArr[0] * 3600 + +partArr[1] * 60 + +partArr[2];
  let denominator = +totalArr[0] * 3600 + +totalArr[1] * 60 + +totalArr[2];

  let gcd = getGCD(numerator, denominator);
  numerator /= gcd;
  denominator /= gcd;

  return `${numerator}/${denominator}`;
}

try {
  assert.equal(getCompleted('01:00:00', '03:00:00'), '1/3')
  assert.equal(getCompleted('02:00:00', '04:00:00'), '1/2')
  assert.equal(getCompleted('01:00:00', '01:00:00'), '1/1')
  assert.equal(getCompleted('00:10:00', '01:00:00'), '1/6')
  assert.equal(getCompleted('01:10:10', '03:30:30'), '1/3')
  assert.equal(getCompleted('03:30:30', '05:50:50'), '3/5')
} catch (error) {
  console.log(error)
}