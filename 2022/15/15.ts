import assert from 'assert';

function decorateTree(base: string) {
  const rules = {
    BB: 'B',
    BP: 'R',
    BR: 'P',
    PB: 'R',
    PP: 'P',
    PR: 'B',
    RB: 'P',
    RP: 'B',
    RR: 'R'
  };

  const baseArr = base.split(' ');

  const convertRow = (accum: string[], currValue: string, index: number, original: string[]) => {
    const nextValue = original[index + 1];
    if (nextValue !== undefined) {
      const key = `${currValue}${nextValue}` as keyof typeof rules;
      accum.push(rules[key]);
    }
    return accum;
  }

  const createTree = (accum: string[][], _: string, index: number) => {
    const row = accum[index].reduce(convertRow, []);
    accum.push(row);
    return accum;
  }

  return baseArr
    .reduce(createTree, [baseArr])
    .reverse()
    .map(r => r.join(' '))
    .slice(1, baseArr.length + 1);
}

try {
  assert.deepEqual(
    decorateTree('B P R P'),
    [
      'R',
      'P B',
      'R B B',
      'B P R P'
    ]
  );
} catch (error) {
  console.log(error)
}

