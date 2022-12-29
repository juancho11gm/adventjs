import assert from 'assert';

function canCarry(capacity: number, trips: number[][]) {
  let [, , currentEnd] = trips[0];
  let accum = 0;
  for (const trip of trips) {
    const [nGifts, start, end] = trip;
    start < currentEnd ? accum += nGifts : accum = nGifts;
    currentEnd = end;
    if (accum > capacity) return false;
  }
  return true;
}

try {
  assert.equal(canCarry(4, [[2, 5, 8], [3, 6, 10]]), false) // false
  // En el punto 5 recoge 2 regalos...
  // En el punto 6 recoge 3 regalos...
  // Del punto 6 al 8 tendría 5 regalos en total
  // Y su capacidad es 4... así que ¡no podría!

  assert.equal(canCarry(3, [[1, 1, 5], [2, 2, 10]]), true)
  // En el punto 1 recoge 1 regalo...
  // En el punto 2 recoge 2 regalos...
  // En el punto 5 entrega 1 regalo...
  // En el punto 10 entrega 2 regalos...
  // ¡Sí puede! Nunca superó la carga máxima de 3 regalos

  assert.equal(canCarry(3, [[2, 1, 5], [3, 5, 7]]), true)// -> nunca supera el máximo de capacidad
  assert.equal(canCarry(4, [[2, 3, 8], [2, 5, 7]]), true)// -> del punto 5 al 7 lleva 4 regalos y no supera el máximo
  assert.equal(canCarry(1, [[2, 3, 8]]), false)// -> no podría ni con el primer viaje
  assert.equal(canCarry(2, [[1, 2, 4], [2, 3, 8]]), false)// -> del punto 3 al 4 supera la capacidad máxima porque llevaría 3 regalos
} catch (error) {
  console.log(error)
}
