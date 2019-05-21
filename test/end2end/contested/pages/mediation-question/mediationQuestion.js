
function mediationQuestion() {
  const I = this;
  I.wait(5);
  I.checkOption('input[id="applicantAttendedMIAM-No"]');
  I.wait(2);
  I.checkOption('input[id="claimingExemptionMIAM-Yes"]');
  I.wait(2);
  I.checkOption('input[id="familyMediatorMIAM-No"]');
  I.wait(2);
  I.click('Continue');
  I.wait(5);

}

module.exports = { mediationQuestion };