function closeCase() {

  const I = this;
  // I.wait(10);
  I.waitForPage('.EventLogTable h2', 'History'); 
  I.selectOption('select[id="next-step"]', 'Close Case');
  I.wait(1);
  I.click('Go');
  // I.wait(10);
  I.waitForElement('#field-trigger-summary',30);
  I.click('Submit');
  // I.wait(10);


}

module.exports = { closeCase };