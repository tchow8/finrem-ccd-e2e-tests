// const testConfig = require('test/config.js');

function optionalDocuments() {
  const I = this;
  I.wait(2);
  I.click('Continue');
  I.wait(4);
}

module.exports = { optionalDocuments };
