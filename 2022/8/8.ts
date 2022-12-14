import assert from 'assert';

function checkPart(part: string) {
  return [...part].some((_, i, arr) => {
    let croppedLetter = arr.filter((_, j) => i != j);
    return croppedLetter.join('') == croppedLetter.reverse().join('');
  })
}

try {
  assert.equal(checkPart("miidim"),
    true
  );
} catch (error) {
  console.log(error)
}