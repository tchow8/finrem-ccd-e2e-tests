function amendedConsentOrder() {

  const I = this;
  // I.wait(10);
  I.waitForPage('.EventLogTable h2', 'History'); 
  I.selectOption('select[id="next-step"]', 'Amended Consent Order');
  I.wait(1);
  I.click('Go');
  // I.wait(10);
  I.waitForElement('#amendedConsentOrderCollection',30);  
  I.click('Add new');
  I.wait(2);
  I.attachFile('input[type="file"]', 'data/dummy.pdf');
  I.wait(1);
  I.fillField('input[id="amendedConsentOrderCollection_0_amendedConsentOrderDate-day"]', '3');
  I.fillField('input[id="amendedConsentOrderCollection_0_amendedConsentOrderDate-month"]', '3');
  I.fillField('input[id="amendedConsentOrderCollection_0_amendedConsentOrderDate-year"]', '2019');
  // I.wait(10);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(10);
  I.waitForElement('#field-trigger-summary',30);
  I.click('Submit');
  // I.wait(10);


}

module.exports = { amendedConsentOrder };