// const testConfig = require('test/config.js');

function contestedNatureOfApplication() {
  const I = this;
  I.wait(5);
  I.checkOption('input[value="periodicalPaymentOrder"]');
  I.checkOption('input[value="Lump Sum Order"]');
  I.checkOption('input[value="Pension Sharing Order"]');
  I.checkOption('input[value="Pension Attachment Order"]');
  I.checkOption('input[value="Pension Compensation Sharing Order"]');
  I.checkOption('input[value="Pension Compensation Attachment Order"]');
  I.checkOption('input[value="propertyAdjustmentOrder"]');
  I.wait(10);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(5);
  I.fillField('#propertyAddress', '26 Riverside gardens');
  I.wait(5);
  I.fillField('#mortgageDetail', 'Halifax mortgage');
  I.wait(5);
  I.checkOption('input[id="additionalPropertyOrderDecision-No"]');
  I.wait(5);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(5);
}

module.exports = { contestedNatureOfApplication };
