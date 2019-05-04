function finalPaymentSubmissionPage() {

  const I = this;
  I.wait(5);
  I.see('AUTHORISATION');
  I.see('PAYMENT DETAILS');
  I.wait(5);
  I.click('Submit');
  I.wait(10);
}

module.exports = { finalPaymentSubmissionPage };
