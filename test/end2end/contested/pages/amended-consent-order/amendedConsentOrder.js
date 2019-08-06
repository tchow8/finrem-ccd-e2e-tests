function amendedConsentOrder() {

  const I = this;
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Amended Consent Order');
  I.wait(10);
  I.click('Go');
  I.wait(10);
  I.click('Add new');
  I.wait(10);
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  I.wait(10);
  I.fillField('input[id="amendedConsentOrderCollection_0_amendedConsentOrderDate-day"]', '3');
  I.fillField('input[id="amendedConsentOrderCollection_0_amendedConsentOrderDate-month"]', '3');
  I.fillField('input[id="amendedConsentOrderCollection_0_amendedConsentOrderDate-year"]', '2019');
  I.wait(10);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(10);
  I.click('Submit');
  I.wait(10);


}

module.exports = { amendedConsentOrder };