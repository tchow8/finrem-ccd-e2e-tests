function contestedCloseCase() {

  const I = this;
  I.waitForPage('.tabs-list');
  I.selectOption('select[id="next-step"]', 'Close Case');
  I.click('Go');

  I.waitForPage('#field-trigger-summary');
  I.click('Submit');


}

module.exports = { contestedCloseCase };