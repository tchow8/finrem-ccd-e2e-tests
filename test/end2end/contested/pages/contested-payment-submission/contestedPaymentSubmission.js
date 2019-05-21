


function contestedPaymentSubmission() {
  const I = this;
  I.wait(3);
  I.click('Continue');
  I.wait(5);
}

module.exports = { contestedPaymentSubmission };
