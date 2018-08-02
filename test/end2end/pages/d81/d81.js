// const testConfig = require('test/config.js');

function d81() {
  const I = this;
  I.wait(2);
  I.checkOption('input[id="d81Question-Yes"]');
  I.wait(1);
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  I.wait(1);
  I.click('Continue');
}

module.exports = { d81 };
