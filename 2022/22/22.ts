import assert from 'assert';

function checkStepNumbers(systemNames: string[], stepNumbers: number[]) {
  return systemNames.every((system, i, original) => {
    const sliced = original.slice(i + 1, original.length)
    const nextIndex = sliced.indexOf(system);
    if (nextIndex + i + 1 > 0) {
      if (stepNumbers[i] > stepNumbers[nextIndex + i + 1]) {
        return false;
      }
    }
    return true;
  })
}

try {
  const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
  const stepNumbers = [1, 33, 10, 2, 44, 20]

  assert.equal(checkStepNumbers(systemNames, stepNumbers), true);

} catch (error) {
  console.log(error)
}