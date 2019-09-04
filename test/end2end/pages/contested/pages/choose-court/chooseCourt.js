
function chooseCourt() {
  const I = this;

  I.waitForPage('#allocatedCourtList');
  I.selectOption('select[id=allocatedCourtList]', 'cfc');
  I.selectOption('select[id=cfcCourtList]', 'FR_s_CFCList_8');
  I.checkOption('input[id="isApplicantsHomeCourt-No"]');

  // I.fillField('#reasonForLocalCourt', 'home court is not for testing');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

}

module.exports = { chooseCourt };
