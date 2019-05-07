

function hwfMediationQuestion() {
  const I = this;
  I.wait(5);
  I.checkOption('input[id="applicantAttendedMIAM-Yes"]');
  I.wait(2);
  I.click('Continue');
  I.wait(5);

}

module.exports = { hwfMediationQuestion };