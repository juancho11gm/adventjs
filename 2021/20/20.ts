import assert from 'assert';

function pangram(letter: string) {
  const ALPHABET_LETTER_COUNT = 26;
  const matches = letter.toLowerCase().match(/[a-zñ]/g);
  return new Set(matches).size > ALPHABET_LETTER_COUNT;
}

try {
  assert.equal(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho'), true)
  assert.equal(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!'), true)
  assert.equal(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario'), false)
  assert.equal(pangram('De la a a la z, nos faltan letras'), false)
} catch (error) {
  console.log(error)
}
