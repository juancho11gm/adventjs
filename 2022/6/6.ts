const assert = require('assert');

function createCube(size: number) {
  let cube = '';
  for (let index = 0; index < size; index++) {
    // first half
    //    /\_\_\_\
    //   /\/\_\_\_\
    //  /\/\/\_\_\_\

    const firstHalf = ' '.repeat(index) + '/\\'.repeat(size - index) + '_\\'.repeat(size) + '\n';

    // second half
    //  \/\/\/_/_/_/
    //   \/\/_/_/_/
    //    \/_/_/_/
    let secondHalf = ' '.repeat(index) + '\\/'.repeat(size - index) + '_/'.repeat(size) + '\n';
    cube = `${firstHalf}${cube}${secondHalf}`;
  }

  return cube.trimEnd();
}

// /\_\
// \/_/
createCube(1);

//  /\_\_\
// /\/\_\_\
// \/\/_/_/
//  \/_/_/
createCube(2);

//    /\_\_\_\
//   /\/\_\_\_\
//  /\/\/\_\_\_\
//  \/\/\/_/_/_/
//   \/\/_/_/_/
//    \/_/_/_/
createCube(3);

try {
  assert.equal(createCube(3),
    `  /\\_\\_\\_\\\n /\\/\\_\\_\\_\\\n/\\/\\/\\_\\_\\_\\\n\\/\\/\\/_/_/_/\n \\/\\/_/_/_/\n  \\/_/_/_/`
  );
} catch (error) {
  console.log(error)
}