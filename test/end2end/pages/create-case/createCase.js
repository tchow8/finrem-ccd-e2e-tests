// const testConfig = require('test/config.js');

function createCase() {
  const I = this;

  I.click('Create new case');
  I.wait(10);
  I.selectOption('select[id=cc-jurisdiction]', 'Family Divorce');
  I.wait(3);
  I.selectOption('select[id=cc-case-type]', 'FinancialRemedyMVP2');
  I.wait(2);
  I.selectOption('select[id= cc-event]', 'Consent Order Application');
  I.click('Start');
}

module.exports = { createCase };
