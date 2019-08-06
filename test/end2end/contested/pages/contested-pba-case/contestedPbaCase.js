
function contestedPbaCase() {
  const I = this;
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Issue Application');
  I.wait(10);
  I.click('Go');
  I.wait(10);
  I.fillField('input[id="issueDate-day"]', '18');
  I.fillField('input[id="issueDate-month"]', '5');
  I.fillField('input[id="issueDate-year"]', '2019');
  I.wait(2);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(10);
  I.click('Submit');
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Allocate to Judge');
  I.wait(10);
  I.click('Go');
  I.wait(10);
  I.click('Submit');
  I.wait(10);

}

module.exports = { contestedPbaCase };