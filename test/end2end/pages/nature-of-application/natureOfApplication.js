// const testConfig = require('test/config.js');

function natureOfApplication() {
  const I = this;
  I.wait(3);
  I.checkOption('input[value="Periodical Payment Order"]');
  I.checkOption('input[value="Property Adjustment  Order"]');
  I.checkOption('input[value="Pension Compensation Sharing Order"]');
  I.wait(10);
  // I.fillField('input[id="applicantLName"]', 'div');
  I.click('Continue');
}

module.exports = { natureOfApplication };
