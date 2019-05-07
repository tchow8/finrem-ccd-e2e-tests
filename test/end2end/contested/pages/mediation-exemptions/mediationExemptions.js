
function mediationExemptions() {
  const I = this;
  I.wait(5);
  I.checkOption('input[id="MIAMExemptionsChecklist-other"]');
  I.checkOption('input[id*="previousMIAMattendance"]');
  I.checkOption('input[id="MIAMExemptionsChecklist-urgency"]');
  I.checkOption('input[id*="domesticViolence"]');
  I.wait(2);
  I.click('Continue');
  I.wait(5);

}

module.exports = { mediationExemptions };