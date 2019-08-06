
function mediationOther() {
  const I = this;
  I.wait(5);
  I.checkOption('input[id="MIAMOtherGroundsChecklist-FR_ms_MIAMOtherGroundsChecklist_Value_6"]');
  I.wait(3);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(5);

}

module.exports = { mediationOther };