
function paymentDetails() {
  const I = this;
  I.wait(2);
  I.checkOption('input[id="helpWithFeesQuestion-Yes"]');
  I.wait(1);
  I.fillField('input[id="HWFNumber"]', '1234567');
  I.wait(1);
  I.click('Continue');
}

module.exports = { paymentDetails };
