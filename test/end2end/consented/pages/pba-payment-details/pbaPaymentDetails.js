
function pbaPaymentDetails() {
  const I = this;
  I.wait(3);
  I.fillField('input[id="PBANumber"]', 'PBA0066906');
  I.wait(2);
  I.fillField('input[id="PBAreference"]', 'reference');
  I.wait(2);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(5);
}

module.exports = { pbaPaymentDetails };
