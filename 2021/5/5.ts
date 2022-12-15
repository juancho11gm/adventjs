import assert from 'assert';

function daysToXmas(date: string) {
  const christmas = new Date('Dec 25, 2021');
  const current = new Date(date);
  const diffTime = christmas.getTime() - current.getTime();
  const secondsInDay = 1000 * 60 * 60 * 24;
  return Math.ceil(diffTime / secondsInDay);
}

try {
  assert.equal(daysToXmas('Dec 1, 2021'), 24);
  assert.equal(daysToXmas('Dec 24, 2021 23:59:59'), 1);
  assert.equal(daysToXmas('December 20, 2021 03:24:00'), 5);

} catch (error) {
  console.log(error)
}
