// const testConfig = require('test/config.js');

function d81() {
  const I = this;
  I.wait(5);
  I.checkOption('input[id="d81Question-Yes"]');
  I.wait(3);
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  I.wait(3);
  I.click('Continue');
}

module.exports = { d81 };
