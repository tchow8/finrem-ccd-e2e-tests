
function mediationQuestion() {
  const I = this;

  I.waitForPage('#applicantAttendedMIAM');
  I.checkOption('input[id="applicantAttendedMIAM-No"]');
  I.checkOption('input[id="claimingExemptionMIAM-Yes"]');
  I.checkOption('input[id="familyMediatorMIAM-No"]');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

}

module.exports = { mediationQuestion };