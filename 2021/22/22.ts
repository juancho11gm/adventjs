import assert from 'assert';

function countDecorations(bigTree: Tree): number {
  const { left, right, value } = bigTree;
  let leftVal = 0;
  let rightVal = 0;
  if (left !== null) leftVal = countDecorations(left);
  if (right !== null) rightVal = countDecorations(right);
  return value + leftVal + rightVal;
}

type Tree = {
  value: number;
  left: Tree | null;
  right: Tree | null;
}

try {
  assert.deepEqual(
    countDecorations({
      value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
      left: {
        value: 2, // el nodo izquierdo necesita dos decoraciones
        left: null, // no tiene más ramas
        right: null // no tiene más ramas
      },
      right: {
        value: 3, // el nodo de la derecha necesita tres decoraciones
        left: null, // no tiene más ramas
        right: null // no tiene más ramas
      }
    }), 6
  )

  assert.deepEqual(
    countDecorations(
      {
        value: 1,
        left: {
          value: 5,
          left: {
            value: 7,
            left: {
              value: 3,
              left: null,
              right: null
            },
            right: null
          },
          right: null
        },
        right: {
          value: 6,
          left: {
            value: 5,
            left: null,
            right: null
          },
          right: {
            value: 1,
            left: null,
            right: null
          }
        }
      }),
    28
  )
} catch (error) {
  console.log(error)
}
