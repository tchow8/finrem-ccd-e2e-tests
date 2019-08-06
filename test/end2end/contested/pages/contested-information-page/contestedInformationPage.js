
function contestedInformationPage() {
  const I = this;
  I.wait(5);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(5);
}

module.exports = { contestedInformationPage };
