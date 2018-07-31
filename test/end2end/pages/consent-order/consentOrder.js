// const testConfig = require('test/config.js');

function consentOrder() {
  const I = this;
  I.wait(2);
  I.attachFile('input[id="consentOrder"]', 'data/fileupload.txt');
  I.attachFile('input[id="consentOrderText"]', 'data/fileupload.txt');
  I.wait(1);
  I.click('Continue');
}

module.exports = { consentOrder };
