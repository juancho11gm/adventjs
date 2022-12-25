import assert from 'assert';

function canExit(maze: string[][]) {
  const CELLS = {
    START: 'S',
    END: 'E',
    WALL: 'W'
  }
  const getRowCol = (matrix: string[][], value: string) => {
    const result = matrix.flatMap((row, rowIndex) => {
      return row.map((val, colIndex) => {
        return val === value ? { row: rowIndex, col: colIndex } : null;
      })
    }).find(x => x);
    return result || null;
  };

  // Find the start and end positions
  const { row: starti, col: startj } = getRowCol(maze, CELLS.START) || {};
  const { row: endi, col: endj } = getRowCol(maze, CELLS.END) || {};

  // Check if the start and end positions are found
  const isStartInvalid = starti === undefined || startj === undefined;
  const isEndInvalid = endi === undefined || endj === undefined;
  if (isStartInvalid || isEndInvalid) return false;

  // Initialize a stack to store the positions to visit
  const stack: Position[] = [[starti, startj]];

  // Initialize a set to store the visited positions
  const visited = new Set([[starti, startj].join(',')]);

  // Define the directions to move
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  // While there are positions in the stack
  while (stack.length > 0) {
    // Pop the last position from the stack
    const [posi, posj] = stack.pop() || [];
    const isPosValid = posi === undefined || posj === undefined
    if (isPosValid) return false;

    // If the position is the end position, return true
    const isCompleted = posi === endi && posj === endj;
    if (isCompleted) return true;

    // Iterate over the directions
    for (const [dy, dx] of directions) {
      // Calculate the next position
      const i = posi + dy;
      const j = posj + dx;

      // Check if the next position is valid and not visited
      const isValidY = i >= 0 && i < maze.length;
      if (isValidY) {
        const isValidX = j >= 0 && j < maze[i].length;
        const isNotWall = maze[i][j] !== CELLS.WALL;
        const hasNotBeenVisited = !visited.has(`${i},${j}`);
        if (isValidX && isNotWall && hasNotBeenVisited) {
          // Push the next position to the stack 
          // and add it to the visited set
          stack.push([i, j]);
          visited.add(`${i},${j}`);
        }
      }
    }
  }

  // If no path is found, return false
  return false;
}

type Position = [number, number];

try {
  assert.deepEqual(canExit([
    [' ', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E'],
  ]), true);

  assert.deepEqual(canExit([
    [' ', ' ', 'W', 'W', 'S'],
    [' ', ' ', ' ', 'W', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E']
  ]), false)
} catch (error) {
  console.log(error)
}