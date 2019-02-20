// const testConfig = require('test/config.js');

function applicantDetails() {
  const I = this;
  I.wait(5);
  I.fillField('input[id="applicantFMName"]', 'viv');
  I.wait(3);
  I.fillField('input[id="applicantLName"]', 'div');
  I.click('Continue');
}

module.exports = { applicantDetails };
