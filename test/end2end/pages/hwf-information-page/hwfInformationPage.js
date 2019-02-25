function hwfInformationPage() {
  const I = this;
  I.wait(3);
  I.click('Close and Return to case details');
  I.wait(5);
}

module.exports = { hwfInformationPage };