
function hwfPaymentDetails() {
  const I = this;
  I.wait(3);
  I.fillField('input[id="HWFNumber"]', 'HWF22345');
  I.wait(2);
  I.click('Continue');
  I.wait(5);
}

module.exports = { hwfPaymentDetails };