function hwfUpdateCase() {
  const I = this;
  I.waitForPage('.EventLogTable h2', 'History');
  I.selectOption('select[id="next-step"]', 'HWF Application Accepted');
  I.click('Go');
  I.waitForPage('h1', 'HWF Application Accepted');
  I.click('Submit');
  I.waitForPage('.EventLogTable h2', 'History');
  I.selectOption('select[id="next-step"]', 'Issue Application');
  I.wait(2);
  I.click('Go');
  I.waitForPage('h1', 'Issue Application');
  I.fillField('input[id="issueDate-day"]', '1');
  I.fillField('input[id="issueDate-month"]', '2');
  I.fillField('input[id="issueDate-year"]', '2019');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.waitForElement('#field-trigger-summary', 30);
  I.click('Submit');
  I.waitForPage('.EventLogTable h2', 'History');
  I.selectOption('select[id="next-step"]', 'Assign To Judge');
  I.click('Go');
  I.waitForElement('#fieldset-case-data', 30);
  I.selectOption('select[id="assignedToJudgeReason"]', 'Draft consent order');
  I.selectOption('select[id="assignedToJudge"]', 'Nasim FR Judge');
  I.fillField('input[id="referToJudgeDate-day"]', '1');
  I.fillField('input[id="referToJudgeDate-month"]', '2');
  I.fillField('input[id="referToJudgeDate-year"]', '2018');
  I.fillField('input[id="referToJudgeText"]', 'testing this');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.waitForElement('#field-trigger-summary', 30);
  I.click('Submit');
}

module.exports = { hwfUpdateCase };