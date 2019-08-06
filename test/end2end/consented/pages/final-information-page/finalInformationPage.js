function finalInformationPage() {
  const I = this;
  // I.wait(5);
  I.waitForPage('#confirmation-body h1:nth-of-type(1)', 'Application Complete');

  I.click('Close and Return to case details');
  // I.wait(5);
}

module.exports = { finalInformationPage };