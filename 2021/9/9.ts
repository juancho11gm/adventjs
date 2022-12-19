import assert from 'assert';

function groupBy(collection: any[], it: ((col: any) => any) | string) {
  const isFunction = typeof it === 'function';
  const colMap = new Map();

  collection.forEach(col => {
    const key = isFunction ? it(col) : col[it];
    const value = colMap.get(key);
    !value ? colMap.set(key, [col]) : value.push(col);
  });

  return Object.fromEntries(colMap);
}

try {

  assert.deepEqual(groupBy([6.1, 4.2, 6.3], Math.floor), { 6: [6.1, 6.3], 4: [4.2] })
  assert.deepEqual(groupBy(['one', 'two', 'three'], 'length'), { 3: ['one', 'two'], 5: ['three'] })
  assert.deepEqual(groupBy([{ age: 23 }, { age: 24 }], 'age'), { 23: [{ age: 23 }], 24: [{ age: 24 }] })
  assert.deepEqual(groupBy(
    [1397639141184, 1363223700000],
    timestamp => new Date(timestamp).getFullYear()
  ), { 2013: [1363223700000], 2014: [1397639141184] })
  // 

  assert.deepEqual(groupBy([
    { title: 'JavaScript: The Good Parts', rating: 8 },
    { title: 'Aprendiendo Git', rating: 10 },
    { title: 'Clean Code', rating: 9 },
  ], 'rating'), {
    8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
    9: [{ title: 'Clean Code', rating: 9 }],
    10: [{ title: 'Aprendiendo Git', rating: 10 }]
  })


} catch (error) {
  console.log(error)
}
