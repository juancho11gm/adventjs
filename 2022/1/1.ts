const assert = require('assert');

function wrapping(gifts: string[]) {
  return gifts.map(gift => {
    const paper = '*'.repeat(gift.length + 2);
    return `${paper}\n*${gift}*\n${paper}`;
  });
}

try {
  assert.deepEqual(wrapping(["a"]), [
    "***\n*a*\n***"
  ]);
} catch (error) {
  console.log(error)
}
