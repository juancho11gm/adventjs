import assert from 'assert';

function shouldBuyFidelity(times: number) {
  const TICKET_PRICE = 12;
  const LOYAL_CARD_PRICE = 250;
  const PERCENTAGE = 0.75;

  const totalRegularTicket = times * TICKET_PRICE;
  const totalLoyalCard = new Array(times).fill(TICKET_PRICE).reduce((accum, curr, index) => {
    return accum + (curr * (Math.pow(PERCENTAGE, index + 1)));
  }, LOYAL_CARD_PRICE);
  return totalLoyalCard <= totalRegularTicket;
}

try {
  assert.equal(shouldBuyFidelity(1), false);
  assert.equal(shouldBuyFidelity(3), false);
  assert.equal(shouldBuyFidelity(100), true);
} catch (error) {
  console.log(error)
}
