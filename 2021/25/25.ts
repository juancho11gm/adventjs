import assert from 'assert';

function canMouseEat(direction: Direction, room: Room) {
  const DIRECTIONS: Moves = {
    'up': [-1, 0],
    'down': [1, 0],
    'left': [0, -1],
    'right': [0, 1],
    'default': [0, 0]
  }

  const row = room.findIndex(row => row.includes('m'));
  const col = room[row].findIndex(cell => cell === 'm');
  const move = DIRECTIONS[direction] || DIRECTIONS.default;
  return room?.[row + move[0]]?.[col + move[1]] === '*';
}

type Direction = 'up' | 'down' | 'right' | 'left' | 'default';
type Moves = {
  [key in Direction]: [number, number]
}
type Cell = ' ' | 'm' | '*';
type Room = Cell[][];

try {
  const room: Room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*']
  ]

  assert.equal(canMouseEat('up', room), false)
  assert.equal(canMouseEat('down', room), true)
  assert.equal(canMouseEat('right', room), false)
  assert.equal(canMouseEat('left', room), false)

  const room2: Room = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*']
  ]
  assert.equal(canMouseEat('up', room2), false)
  assert.equal(canMouseEat('down', room2), false)
  assert.equal(canMouseEat('right', room2), true)
  assert.equal(canMouseEat('left', room2), false)
} catch (error) {
  console.log(error)
}
