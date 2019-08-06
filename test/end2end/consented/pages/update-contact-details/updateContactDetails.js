function updateContactDetails() {
  const I = this;
  // I.wait(10);
  I.waitForPage('.EventLogTable h2', 'History');  
  I.selectOption('select[id="next-step"]', 'Update contact details');
  I.wait(1);
  I.click('Go');
  // I.wait(10);
  I.waitForPage('h1', 'Update contact details');  
  I.fillField('input[id="solicitorAddress_AddressLine1"]', '26 Riverside Gardens');
  // I.wait(2);
  I.fillField('input[id="solicitorAddress_PostTown"]', 'Wembley');
  // I.wait(2);
  I.fillField('input[id="solicitorAddress_PostCode"]', 'HA0 1JF');
  // I.wait(10);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(10);
  I.waitForPage('.check-your-answers h2', 'Check your answers');  

  I.click('Submit');
  // I.wait(10);
}


module.exports = { updateContactDetails };
