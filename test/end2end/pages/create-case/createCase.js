// const testConfig = require('test/config.js');

function createCase() {
  const I = this;

  I.click('Create new case');
  I.wait(5);
  I.selectOption('select[id=cc-jurisdiction]', 'Family Divorce - v104-26.1');
  I.wait(3);
  I.selectOption('select[id=cc-case-type]', 'Financial Remedy MVP_v0.3');
  I.wait(2);
  I.selectOption('select[id= cc-event]', 'Consent Order Application');
  I.click('Start');
}

module.exports = { createCase };
