
function mediationUrgency() {
  const I = this;

  I.waitForPage('#MIAMUrgencyReasonChecklist');
  I.checkOption('input[id="MIAMUrgencyReasonChecklist-FR_ms_MIAMUrgencyReasonChecklist_Value_5"]');
  I.checkOption('input[id="MIAMUrgencyReasonChecklist-FR_ms_MIAMUrgencyReasonChecklist_Value_4"]');
  I.checkOption('input[id="MIAMUrgencyReasonChecklist-FR_ms_MIAMUrgencyReasonChecklist_Value_3"]');
  I.checkOption('input[id="MIAMUrgencyReasonChecklist-FR_ms_MIAMUrgencyReasonChecklist_Value_2"]');
  I.checkOption('input[id="MIAMUrgencyReasonChecklist-FR_ms_MIAMUrgencyReasonChecklist_Value_1"]');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

}

module.exports = { mediationUrgency };