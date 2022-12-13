import assert from 'assert';

function checkPart(part: string) {
  const isPalindrome = (str: string) => {
    return str === str.split('').reverse().join('');
  }

  if (isPalindrome(part)) return true;

  const combinations = [];
  for (let i = 0; i < part.length; i++) {
    const firstHalf = part.slice(0, i);
    const secondHalf = part.slice(i + 1, part.length);
    combinations.push(firstHalf + secondHalf);
  }

  return combinations.some(comb => isPalindrome(comb));
}

try {
  assert.equal(checkPart("miidim"),
    true
  );
} catch (error) {
  console.log(error)
}