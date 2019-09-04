
function contestedPbaCase() {
  const I = this;

  I.waitForPage('.tabs-list');
  I.selectOption('select[id="next-step"]', 'Issue Application');
  I.click('Go');

  I.waitForPage('input[id="issueDate-day"]'); 
  I.fillField('input[id="issueDate-day"]', '18');
  I.fillField('input[id="issueDate-month"]', '5');
  I.fillField('input[id="issueDate-year"]', '2019');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#field-trigger-summary');
  I.click('Submit');
;
  I.waitForPage('.tabs-list'); 
  I.selectOption('select[id="next-step"]', 'Allocate to Judge');
  I.click('Go');
  I.waitForPage('#field-trigger-summary');
  I.click('Submit');

  I.waitForPage('.tabs-list'); 
  I.see('Allocate to Judge');

}

module.exports = { contestedPbaCase };