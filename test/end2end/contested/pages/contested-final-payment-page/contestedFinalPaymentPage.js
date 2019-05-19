function contestedFinalPaymentPage() {

  const I = this;
  I.wait(5);
  I.see('AUTHORISATION');
  I.see('PAYMENT DETAILS');
  I.wait(5);
  I.click('Submit');
  I.wait(12);
}

module.exports = { contestedFinalPaymentPage };
