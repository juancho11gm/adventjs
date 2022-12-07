import assert from 'assert';

function fitsInOneBox(boxes: Box[]) {
  function sortBoxes(boxes: Box[]) {
    return boxes.sort((boxa, boxb) => boxa.w - boxb.w);
  }

  function fitInBox(box1: Box, box2: Box) {
    return box1.h < box2.h && box1.w < box2.w && box1.l < box2.l;
  }

  const sortedBoxes = sortBoxes(boxes);

  for (let i = 0; i < sortedBoxes.length - 1; i++) {
    if (!fitInBox(sortedBoxes[i], sortedBoxes[i + 1])) return false;
  }

  return true;
}

type Box = {
  l: number;
  w: number;
  h: number;
};

try {
  assert.equal(fitsInOneBox([
    { l: 1, w: 1, h: 10 },
    { l: 3, w: 3, h: 12 },
    { l: 2, w: 2, h: 1 },
  ])
    , false);
} catch (error) {
  console.log(error)
}
