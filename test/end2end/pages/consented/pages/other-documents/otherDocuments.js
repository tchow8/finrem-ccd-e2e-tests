// const testConfig = require('test/config.js');

function consentedOtherDocuments() {
  const I = this;
  //   I.wait(5);
  I.waitForPage('h4', 'OTHER DOCUMENTS');

  //   I.click('Add new', { css: '#pensionCollection>div>button' });
  //   I.wait(5);
  //   I.selectOption('select[id=pensionCollection_0_typeOfDocument]', 'Form P1');
  //   // I.wait(10);
  //   I.attachFile('input[type="file"]', 'data/dummy.pdf');
  //   I.wait(2);
  I.waitForContinueButtonEnabled();

  I.click('Continue') ;
}

module.exports = { consentedOtherDocuments };
