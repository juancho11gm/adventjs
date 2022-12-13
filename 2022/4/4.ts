import assert from 'assert';

function fitsInOneBox(boxes: Box[]) {
  const sortBoxes = (boxes: Box[]) => boxes.sort((boxa, boxb) => boxa.w - boxb.w);
  const fitInBox = (box1: Box, box2: Box) => {
    return box1.h < box2.h && box1.w < box2.w && box1.l < box2.l;
  };

  const allFit = sortBoxes(boxes).every((box: Box, i: number) => {
    const isLast = i === boxes.length - 1;
    if (isLast) return true;
    const fitInNextBox = fitInBox(box, boxes[i + 1]);
    return fitInNextBox;
  });

  return allFit;
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


  assert.equal(fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
  ])
    , true);
} catch (error) {
  console.log(error)
}
