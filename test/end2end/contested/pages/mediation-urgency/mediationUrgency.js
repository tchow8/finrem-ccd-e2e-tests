
function mediationUrgency() {
  const I = this;
  I.wait(5);
  I.checkOption('input[id="MIAMUrgencyReasonChecklist-FR_ms_MIAMUrgencyReasonChecklist_Value_5"]');
  I.checkOption('input[id="MIAMUrgencyReasonChecklist-FR_ms_MIAMUrgencyReasonChecklist_Value_4"]');
  I.checkOption('input[id="MIAMUrgencyReasonChecklist-FR_ms_MIAMUrgencyReasonChecklist_Value_3"]');
  I.checkOption('input[id="MIAMUrgencyReasonChecklist-FR_ms_MIAMUrgencyReasonChecklist_Value_2"]');
  I.checkOption('input[id="MIAMUrgencyReasonChecklist-FR_ms_MIAMUrgencyReasonChecklist_Value_1"]');
  I.wait(3);
  I.click('Continue');
  I.wait(5);

}

module.exports = { mediationUrgency };