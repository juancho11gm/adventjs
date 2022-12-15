import assert from 'assert';

function contarOvejas(ovejas: Ship[]) {
  return ovejas.filter(ship => {
    return (ship.name.includes('a') || ship.name.includes('A')) &&
      (ship.name.includes('n') || ship.name.includes('N')) &&
      ship.color === 'rojo'
  });
}

type Ship = {
  name: string;
  color: 'azul' | 'rojo';
}

try {
  const ovejas: Ship[] = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' }
  ]
  assert.deepEqual(
    contarOvejas(ovejas),
    [
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo' }
    ]);
} catch (error) {
  console.log(error)
}
