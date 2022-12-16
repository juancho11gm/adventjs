import assert from 'assert';

function decorateTree(base: string) {
  enum rules {
    'BP' = 'R',
    'PB' = 'R',
    'RR' = 'R',
    'RP' = 'B',
    'BB' = 'B',
    'PR' = 'B',
    'PP' = 'P',
    'BR' = 'P',
    'RB' = 'P',
  };

  const baseArr = base.split(' ');
  return baseArr.reduce((prev: string[]) => {
    const [firstArr] = prev;
    let row = '';
    firstArr.split(' ').reduce((prevLetter: string, currLetter: string) => {
      const key = `${prevLetter}${currLetter}` as keyof typeof rules;
      row += ' ' + rules[key];
      row = row.trim();
      return currLetter;
    });

    row && prev.unshift(row);
    return prev;
  }, [base]);
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

