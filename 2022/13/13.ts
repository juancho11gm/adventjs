import assert from 'assert';

function getFilesToBackup(lastBackup: number, changes: Changes) {
  const outdated = changes.filter(c => c[1] > lastBackup).map(c => c[0]);
  return [... new Set(outdated)].sort((a, b) => a - b);
}

type Change = [number, number];
type Changes = Change[];

try {
  const lastBackup = 1546300800
  const changes: Changes = [
    [3, 1546301100],
    [2, 1546300800],
    [1, 1546300800],
    [1, 1546300900],
    [1, 1546301000]
  ]

  assert.deepEqual(getFilesToBackup(lastBackup, changes), [1, 3]);

} catch (error) {
  console.log(error)
}