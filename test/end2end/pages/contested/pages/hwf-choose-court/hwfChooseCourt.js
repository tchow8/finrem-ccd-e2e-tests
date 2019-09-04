
function hwfChooseCourt() {
  const I = this;
  I.waitForPage('select[id=allocatedCourtList]');
  I.selectOption('select[id=allocatedCourtList]', 'nottingham');
  I.selectOption('select[id=nottinghamCourtList]', 'FR_s_NottinghamList_3');
  I.checkOption('input[id="isApplicantsHomeCourt-Yes"]');
  I.fillField('#reasonForLocalCourt', 'hwf court is not for testing');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

}

module.exports = { hwfChooseCourt };
