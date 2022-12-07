import assert from 'assert';

function countHours(year: string, holidays: string[]) {
  const SATURDAY = 6;
  const SUNDAY = 0;
  const EXTRA_HOURS_PER_DAY = 2;
  const weekDays = holidays.map(holiday => new Date(`${year}/${holiday}`).getDay());
  return weekDays.reduce((accum: number, weekDay: number) => weekDay !== SUNDAY && weekDay !== SATURDAY ? accum + EXTRA_HOURS_PER_DAY : accum, 0);
}

try {
  assert.equal(countHours('1985', ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']), 10);
} catch (error) {
  console.log(error)
}
