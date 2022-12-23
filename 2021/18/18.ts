import assert from 'assert';

function fixFiles(files: string[]) {
  const filesDict = new Map<string, number>();

  return files.map(f => {
    if (!filesDict.has(f)) {
      filesDict.set(f, 0);
      return f;
    }
    const times = filesDict.get(f) as number + 1;
    filesDict.set(f, times);
    return `${f}(${times})`;
  })
}

try {
  const files = ['photo', 'postcard', 'photo', 'photo', 'video']
  assert.deepEqual(fixFiles(files), ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']);

  const files2 = ['file', 'file', 'file', 'game', 'game']
  assert.deepEqual(fixFiles(files2), ['file', 'file(1)', 'file(2)', 'game', 'game(1)'])

  const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
  assert.deepEqual(fixFiles(files3), ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)'])
} catch (error) {
  console.log(error)
}
