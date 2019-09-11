// const testConfig = require('test/config.js');

function deightyone() {
  const I = this;
  I.waitForPage('input[id="d81Question-Yes"]');
  I.checkOption('input[id="d81Question-Yes"]');
  // I.wait(5);
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  // I.wait(5);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(5);
}

module.exports = { deightyone };
