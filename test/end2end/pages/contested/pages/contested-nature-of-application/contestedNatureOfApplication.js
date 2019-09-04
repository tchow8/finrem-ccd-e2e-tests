// const testConfig = require('test/config.js');

function contestedNatureOfApplication() {
  const I = this;
  I.waitForPage('input[value="periodicalPaymentOrder"]');
  I.checkOption('input[value="periodicalPaymentOrder"]');
  I.checkOption('input[value="Lump Sum Order"]');
  I.checkOption('input[value="Pension Sharing Order"]');
  I.checkOption('input[value="Pension Attachment Order"]');
  I.checkOption('input[value="Pension Compensation Sharing Order"]');
  I.checkOption('input[value="Pension Compensation Attachment Order"]');
  I.checkOption('input[value="propertyAdjustmentOrder"]');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.waitForElement('#propertyAddress',60);
  I.fillField('#propertyAddress', '26 Riverside gardens');
  I.fillField('#mortgageDetail', 'Halifax mortgage');
  I.checkOption('input[id="additionalPropertyOrderDecision-No"]');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
}

module.exports = { contestedNatureOfApplication };
