import assert from 'assert';

function checkIsSameTree(treeA: Tree, treeB: Tree): boolean {
  const { left: leftA, right: rightA, value: valueA } = treeA;
  const { left: leftB, right: rightB, value: valueB } = treeB;
  let leftEq = true;
  let rightEq = true;
  if (leftA && leftB) leftEq = checkIsSameTree(leftA, leftB);
  if (rightA && rightB) rightEq = checkIsSameTree(rightA, rightB);
  return valueA === valueB && leftEq && rightEq;
}

type Tree = {
  value: number;
  left: Tree | null;
  right: Tree | null;
}

try {
  const tree = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null }
  }

  const tree2 = {
    value: 1,
    left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
    right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
  }

  assert.equal(checkIsSameTree(tree, tree), true);
  assert.equal(checkIsSameTree(tree, tree2), false);
  assert.equal(checkIsSameTree(tree2, tree2), true);
} catch (error) {
  console.log(error)
}
