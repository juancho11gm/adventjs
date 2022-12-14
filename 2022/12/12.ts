import assert from 'assert';

function selectSleigh(distance: number, sleighs: Sleigh[]) {
  const battery = 20;
  const sleigh = sleighs.reverse().find(s => s.consumption * distance <= battery);
  return sleigh?.name || null;
}

type Sleigh = {
  name: string;
  consumption: number;
}
try {
  const distance = 30
  const sleighs = [
    { name: "Dasher", consumption: 0.3 },
    { name: "Dancer", consumption: 0.5 },
    { name: "Rudolph", consumption: 0.7 },
    { name: "Midu", consumption: 1 }
  ]

  assert.equal(selectSleigh(distance, sleighs), 'Dancer');
  assert.equal(selectSleigh(50, [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 2 },
    { name: 'marcospage', consumption: 3 }
  ]), null);
} catch (error) {
  console.log(error)
}