import assert from 'assert';

function howManyReindeers(reindeerTypes: Render[], gifts: Gift[]) {
  reindeerTypes.sort((a, b) => {
    return b.weightCapacity - a.weightCapacity;
  });
  return gifts.map(({ weight, country }: Gift) => {
    let max = weight;
    const reindeers = [...reindeerTypes].filter(r =>
      r.weightCapacity < weight
    ).reverse();

    const res = reindeers.map(({ type }) => ({
      type,
      num: 0
    }));

    reindeers.map((_, i) => {
      const sliced = reindeers.slice(0, reindeers.length - i);
      const sum = sliced.reduce((acum, curr) =>
        acum + curr.weightCapacity, 0
      );
      sliced.map((_, i) => {
        res[i].num += Math.floor(max / sum)
      });
      max %= sum;
    })

    return {
      country,
      reindeers: res.reverse()
    }
  });
}

type Render = {
  type: string;
  weightCapacity: number;
}

type Gift = {
  country: string;
  weight: number;
}

try {

  const reindeerTypes = [
    { type: 'Nuclear', weightCapacity: 50 },
    { type: 'Electric', weightCapacity: 10 },
    { type: 'Gasoline', weightCapacity: 5 },
    { type: 'Diesel', weightCapacity: 1 }
  ]

  const gifts = [
    { country: 'Spain', weight: 30 },
    { country: 'France', weight: 17 },
    { country: 'Italy', weight: 50 }
  ]

  assert.deepEqual(
    howManyReindeers(reindeerTypes, gifts), [{
      country: 'Spain',
      reindeers: [
        { type: 'Electric', num: 1 },
        { type: 'Gasoline', num: 3 },
        { type: 'Diesel', num: 5 }
      ]
    }, {
      country: 'France',
      reindeers: [
        { type: 'Electric', num: 1 },
        { type: 'Gasoline', num: 1 },
        { type: 'Diesel', num: 2 }
      ]
    }, {
      country: 'Italy',
      reindeers: [
        { type: 'Electric', num: 3 },
        { type: 'Gasoline', num: 3 },
        { type: 'Diesel', num: 5 }
      ]
    }])

} catch (error) {
  console.log(error)
}