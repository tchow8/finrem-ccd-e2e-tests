


function paymentSubmission() {
  const I = this;
  // I.wait(3);
  I.waitForPage('div.order-summary-title', 'Order Summary');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(5);
}

module.exports = { paymentSubmission };
