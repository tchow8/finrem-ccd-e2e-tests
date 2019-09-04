
function contestedInformationPage() {
  const I = this;
  I.waitForPage('#makePaymentPreConfirmationInfoText');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
}

module.exports = { contestedInformationPage };
