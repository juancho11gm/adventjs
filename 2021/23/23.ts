import assert from 'assert';

function canReconfigure(from: string, to: string) {
  if (from.length !== to.length) return false;
  const map: Dict = {};
  const letters = from.split('');
  for (const [index, letter] of letters.entries()) {
    if (!map[letter] && !map[to[index]]) {
      map[letter] = to[index];
      map[to[index]] = letter;
    } else if (map[letter] !== to[index]) return false;
  }
  return true;
}

type Dict = {
  [key: string]: string
}

try {
  // B -> L
  // A -> I
  // L -> B
  assert.equal(canReconfigure('BAL', 'LIB'), true);
  assert.equal(canReconfigure('CON', 'JUU'), false);
  assert.equal(canReconfigure('XBOX', 'XXBO'), false);
  assert.equal(canReconfigure('XBOX', 'XOBX'), true);
  assert.equal(canReconfigure('MMM', 'MID'), false);
  assert.equal(canReconfigure('AA', 'MID'), false);
} catch (error) {
  console.log(error)
}
