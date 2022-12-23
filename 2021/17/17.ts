import assert from 'assert';

function countPackages(carriers: Carriers, carrierID: string): number {
  const [, packagesNumber, subCarriers] = carriers.filter(c => c[0] === carrierID)[0];
  return subCarriers.reduce((accum: number, current: string) => {
    return accum += countPackages(carriers, current);
  }, packagesNumber);
}

type Carrier = [
  string,
  number,
  string[]
];

type Carriers = Carrier[];

try {
  const carriers: Carriers = [
    ['dapelu', 5, ['midu', 'jelowing']],
    ['midu', 2, []],
    ['jelowing', 2, []]
  ];

  assert.equal(countPackages(carriers, 'dapelu'), 9);

  const carriers2: Carriers = [
    ['lolivier', 8, ['camila', 'jesuspoleo']],
    ['camila', 5, ['sergiomartinez', 'conchaasensio']],
    ['jesuspoleo', 4, []],
    ['sergiomartinez', 4, []],
    ['conchaasensio', 3, ['facundocapua', 'faviola']],
    ['facundocapua', 2, []],
    ['faviola', 1, []]
  ]

  assert.equal(countPackages(carriers2, 'camila'), 15);
} catch (error) {
  console.log(error)
}
