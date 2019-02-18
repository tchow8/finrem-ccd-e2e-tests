
function paymentDetails() {
  const I = this;
  I.wait(2);
  I.fillField('input[id="PBANumber"]', 'PBA222');
  I.wait(1);
  I.fillField('input[id="PBAreference"]', 'reference');
  I.wait(1);
  I.click('Continue');
}

module.exports = { paymentDetails };
