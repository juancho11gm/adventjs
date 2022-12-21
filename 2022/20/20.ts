import assert from 'assert';

function howManyReindeers(reindeerTypes: Render[], gifts: Gift[]) {
  reindeerTypes.sort((a, b) =>
    b.weightCapacity - a.weightCapacity
  );

  return gifts.reduce((accum: any, currCountry: Gift) => {
    let { weight, country } = currCountry;
    const types: Reindeer = {};
    const reindeers = [...reindeerTypes].reverse().filter(t =>
      t.weightCapacity < weight
    );
    while (weight > 0) {
      reindeers.forEach(r => {
        if (weight - r.weightCapacity >= 0) {
          types[r.type] ? types[r.type] += 1 : types[r.type] = 1;
          weight -= r.weightCapacity;
        }
      });
    }

    accum.push({
      country: country,
      reindeers: Object.entries(types).map(
        ([key, value]) => {
          return {
            type: key,
            num: value
          }
        }).reverse()
    })

    return accum;
  }, []);
}

type Render = {
  type: string;
  weightCapacity: number;
}

type Gift = {
  country: string;
  weight: number;
}

type Reindeer = {
  [key: string]: number
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