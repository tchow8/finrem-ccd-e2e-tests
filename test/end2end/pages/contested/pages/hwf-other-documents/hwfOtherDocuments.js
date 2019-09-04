
function hwfOtherDocuments() {
  const I = this;
  I.waitForPage('input[id="promptForAnyDocument-No"]');
  I.checkOption('input[id="promptForAnyDocument-No"]');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(2);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

}

module.exports = { hwfOtherDocuments };