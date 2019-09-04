
function mediationOther() {
  const I = this;

  I.waitForPage('#MIAMOtherGroundsChecklist');
  I.checkOption('input[id="MIAMOtherGroundsChecklist-FR_ms_MIAMOtherGroundsChecklist_Value_6"]');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

}

module.exports = { mediationOther };