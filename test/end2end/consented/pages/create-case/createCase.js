// const testConfig = require('test/config.js');

function createCase() {
  const I = this;
  // I.wait(15);
  I.waitForElement('.container-fluid a[href="/create/case"]',60);
  I.click('Create new case');
  // I.wait(10);
  I.waitForPage('h1','Create Case');

  I.waitForElement('select[id="cc-jurisdiction"]>option:nth-of-type(2)', 60);

  I.selectOption('select[id="cc-jurisdiction"]', 'Family Divorce');
  I.wait(1);
  I.selectOption('select[id="cc-case-type"]', 'FinancialRemedyMVP2');
  I.wait(1);
  I.selectOption('select[id= "cc-event"]', 'Consent Order Application');
  I.click('Start');
  I.waitForPage('h2', 'Before You Start');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
}

module.exports = { createCase };
