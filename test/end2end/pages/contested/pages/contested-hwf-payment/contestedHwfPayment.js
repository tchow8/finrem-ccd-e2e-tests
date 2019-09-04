

function contestedHwfPayment() {
  const I = this;
  I.wait(3);
  I.fillField('input[id="HWFNumber"]', 'HWF27343');
  I.wait(2);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(5);
}

module.exports = { contestedHwfPayment };