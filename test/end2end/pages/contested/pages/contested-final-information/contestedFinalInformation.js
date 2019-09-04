function contestedFinalInformation() {
  const I = this;
  I.waitForPage('#confirmation-body');
  I.click('Close and Return to case details');
}

module.exports = { contestedFinalInformation };