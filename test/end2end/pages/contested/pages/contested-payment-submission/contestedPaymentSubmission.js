


function contestedPaymentSubmission() {
  const I = this;
  I.waitForPage('.order-summary-title');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
}

module.exports = { contestedPaymentSubmission };
