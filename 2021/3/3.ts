import assert from 'assert';

function isValid(letter: string) {
  const hasGift = !!letter.match(/\([^\(\)]+\)/g);
  const hasWrongCharacters = letter.includes('{') || letter.includes('[');
  const parenthesesSequence = [...letter.replace(/[^()]/g, '')];

  const expectCloseStack: string[] = [];
  parenthesesSequence.forEach(b => b === '(' ? expectCloseStack.push(b) : expectCloseStack.pop());
  const hasBalancedParentheses = expectCloseStack.length === 0;

  return hasGift && !hasWrongCharacters && hasBalancedParentheses
}

try {
  assert.equal(isValid('bici coche (balón) bici coche peluche'), true);
  assert.equal(isValid('(muñeca) consola bici'), true);
  assert.equal(isValid('peluche (bici [coche) bici coche balón'), false);
  assert.equal(isValid('(peluche {) bici'), false);
  assert.equal(isValid('() bici'), false);
  assert.equal(isValid('(()) bici'), false);
  assert.equal(isValid('(a() bici (a)'), false);
} catch (error) {
  console.log(error)
}
