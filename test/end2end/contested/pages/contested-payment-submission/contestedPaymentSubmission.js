


function contestedPaymentSubmission() {
  const I = this;
  I.wait(3);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(5);
}

module.exports = { contestedPaymentSubmission };
