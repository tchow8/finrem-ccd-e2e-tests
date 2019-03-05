// const testConfig = require('test/config.js');

function applicantDetails() {
  const I = this;
  I.wait(5);
  I.fillField('input[id="applicantFMName"]', 'viv');
  I.wait(5);
  I.fillField('input[id="applicantLName"]', 'div');
  I.wait(10);
  I.click('Continue');
  I.wait(10);
}

module.exports = { applicantDetails };
