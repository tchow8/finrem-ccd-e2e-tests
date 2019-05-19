
function hwfChooseCourt() {
  const I = this;
  I.wait(5);
  I.selectOption('select[id=allocatedCourtList]', 'nottingham');
  I.wait(3);
  I.selectOption('select[id=nottinghamCourtList]', 'FR_s_NottinghamList_3');
  I.wait(5);
  I.checkOption('input[id="isApplicantsHomeCourt-Yes"]');
  I.wait(2);
  I.fillField('#reasonForLocalCourt', 'hwf court is not for testing');
  I.wait(5);
  I.click('Continue');
  I.wait(5);

}

module.exports = { hwfChooseCourt };
