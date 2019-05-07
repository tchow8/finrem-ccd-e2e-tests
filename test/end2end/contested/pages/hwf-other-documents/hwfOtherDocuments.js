
function hwfOtherDocuments() {
  const I = this;
  I.wait(5);
  I.checkOption('input[id="promptForAnyDocument-No"]');
  I.wait(3);
  I.click('Continue');
  I.wait(5);

}

module.exports = { hwfOtherDocuments };