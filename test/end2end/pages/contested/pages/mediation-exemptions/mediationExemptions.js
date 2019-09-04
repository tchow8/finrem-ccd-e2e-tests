
function mediationExemptions() {
  const I = this;

  I.waitForPage('#MIAMExemptionsChecklist');
  I.checkOption('input[id="MIAMExemptionsChecklist-other"]');
  I.checkOption('input[id*="MIAMExemptionsChecklist-previousMIAMattendance"]');
  I.checkOption('input[id="MIAMExemptionsChecklist-urgency"]');
  I.checkOption('input[id*="MIAMExemptionsChecklist-domesticViolence"]');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

}

module.exports = { mediationExemptions };