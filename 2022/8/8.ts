import assert from 'assert';

function checkPart(part: string) {
  return [...part].some((_, i, arr) => {
    let croppedPart = arr.filter((_, j) => i != j);
    return croppedPart.join('') == croppedPart.reverse().join('');
  })
}

try {
  assert.equal(checkPart("uwu"), true);
  assert.equal(checkPart("miidim"), true);
  assert.equal(checkPart("midu"), false);
} catch (error) {
  console.log(error)
}