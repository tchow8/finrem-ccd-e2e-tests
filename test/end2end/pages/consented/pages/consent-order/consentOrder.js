// const testConfig = require('test/config.js');

function consentOrder() {
  const I = this;
  // I.wait(5)
  I.waitForPage('h4', 'CONSENT ORDER');

  I.attachFile('input[id="consentOrder"]', 'data/dummy.pdf');
  // I.wait(10);
  // I.attachFile('input[id="consentOrderText"]', 'data/fileupload.txt');
  I.wait(2);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(4);
}

module.exports = { consentOrder };
