function amendCase() {

  const I = this;
  // I.wait(10);
  I.waitForPage('.EventLogTable h2', 'History');
  I.selectOption('select[id="next-step"]', 'Amend Case');
  I.wait(1);
  I.click('Go');
  // I.wait(10);
  I.waitForElement('#divorceCaseNumber', 30); 
  I.fillField('input[id="divorceCaseNumber"]', 'LV18D84321');
  // I.wait(10);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ; 
  // I.wait(10);
  I.waitForElement('#field-trigger-summary',30);
  I.click('Submit');
  // I.wait(10);


}

module.exports = { amendCase };