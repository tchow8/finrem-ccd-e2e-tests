// const testConfig = require('test/config.js');

function natureOfApplication() {
  const I = this;
  I.wait(5);
  I.checkOption('input[value="Periodical Payment Order"]');
  I.checkOption('input[value="Lump Sum Order"]');
  I.checkOption('input[value="Pension Sharing Order"]');
  I.checkOption('input[value="Pension Attachment Order"]');
  I.checkOption('input[value="Pension Compensation Sharing Order"]');
  I.checkOption('input[value="Pension Compensation Attachment Order"]');
  I.checkOption('input[value="A settlement or a transfer of property"]');
  I.checkOption('input[value="Property Adjustment  Order"]');
  I.wait(10);
  I.fillField('#natureOfApplication3a', '26 Riverside gardens');
  I.wait(10);
  I.fillField('#natureOfApplication3b', 'Halifax mortgage');
  I.wait(10);
  I.click('Continue');
  I.wait(5);
}

module.exports = { natureOfApplication };
