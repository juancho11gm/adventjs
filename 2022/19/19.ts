import assert from 'assert';

function sortToys(toys: string[], positions: number[]) {

  const toysWithPosition = toys.map((toy, index) => {
    return {
      name: toy,
      position: positions[index]
    }
  });

  return toysWithPosition.sort((a: Toy, b: Toy) => {
    return a.position - b.position
  }).map(t => t.name);
}

type Toy = {
  name: string;
  position: number;
}

try {

  const toys = ['ball', 'doll', 'car', 'puzzle']
  const positions = [2, 3, 1, 0]
  assert.deepEqual(sortToys(toys, positions), ['puzzle', 'car', 'ball', 'doll'])

  const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
  const morePositions = [8, 6, 5, 7, 9]
  assert.deepEqual(sortToys(moreToys, morePositions), ['ps4', 'xbox', 'switch', 'pc', 'nintendo'])

  console.log('wtf')
} catch (error) {
  console.log(error)
}

