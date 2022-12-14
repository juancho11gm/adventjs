import assert from 'assert';

function fitsInOneBox(boxes: Box[]) {
  return boxes.sort((boxa, boxb) => {
    return (boxb.l + boxb.w + boxb.h) - (boxa.l + boxa.w + boxa.h);
  }).slice(1).every((box, i) => {
    return box.l < boxes[i].l && box.w < boxes[i].w && box.h < boxes[i].h
  })
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
