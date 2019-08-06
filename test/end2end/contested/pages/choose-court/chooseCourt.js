
function chooseCourt() {
  const I = this;
  I.wait(5);
  I.selectOption('select[id=allocatedCourtList]', 'cfc');
  I.wait(3);
  I.selectOption('select[id=cfcCourtList]', 'FR_s_CFCList_8');
  I.wait(5);
  I.checkOption('input[id="isApplicantsHomeCourt-No"]');
  I.wait(2);
  I.fillField('#reasonForLocalCourt', 'home court is not for testing');
  I.wait(5);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(5);

}

module.exports = { chooseCourt };
