import assert from 'assert';

function shouldBuyFidelity(times: number) {

}

try {
  assert.equal(shouldBuyFidelity(1), false);
  assert.equal(shouldBuyFidelity(100), true);
} catch (error) {
  console.log(error)
}
