
function hwfPaymentDetails() {
  const I = this;
  // I.wait(3);
  I.waitForPage('#caseEditForm span.form-label', 'Please enter your Help With Fees reference number');
  I.fillField('input[id="HWFNumber"]', 'HWF22345');
  // I.wait(2);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(5);
}

module.exports = { hwfPaymentDetails };