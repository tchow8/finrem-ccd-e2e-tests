// const testConfig = require('test/config.js');

function contestedCreateCase() {
  const I = this;
  I.wait(15);
  I.click('Create new case');
  I.wait(10);
  I.selectOption('select[id=cc-jurisdiction]', 'Family Divorce');
  I.wait(3);
  I.selectOption('select[id=cc-case-type]', 'FinancialRemedyContested');
  I.wait(2);
  I.selectOption('select[id= cc-event]', 'Form A Application');
  I.wait(5);
  I.click('Start');
  I.wait(10);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(10);
}

module.exports = { contestedCreateCase };
