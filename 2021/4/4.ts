import assert from 'assert';

function createXmasTree(height: number) {
  let tree = '';
  for (let i = 1; i <= height; i++) {
    let row = '_'.repeat(height - i);
    const leafs = '*'.repeat(i * 2 - 1);
    tree += `${row + leafs + row}\n`;
  }

  let root = '_'.repeat(height - 1);
  let base = root + '#' + root;
  tree += base + '\n' + base;

  return tree;
}

try {
  assert.equal(createXmasTree(1), '*\n#\n#');
  assert.equal(createXmasTree(3), '__*__\n_***_\n*****\n__#__\n__#__');

} catch (error) {
  console.log(error)
}
