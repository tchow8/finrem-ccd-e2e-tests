
function pbaUpdateCase() {
  const I = this;
  // I.wait(10);
  I.waitForPage('.EventLogTable h2', 'History');

  I.selectOption('select[id="next-step"]', 'Issue Application');
  I.wait(1);
  I.click('Go');
  I.wait(5);
  I.fillField('input[id="issueDate-day"]', '5');
  I.fillField('input[id="issueDate-month"]', '2');
  I.fillField('input[id="issueDate-year"]', '2019');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(2);
  I.click('Submit');
  I.wait(2);
  I.selectOption('select[id="next-step"]', 'Assign To Judge');
  I.wait(2);
  I.click('Go');
  I.wait(2);
  I.selectOption('select[id="assignedToJudgeReason"]', 'Draft consent order');
  I.selectOption('select[id="assignedToJudge"]', 'Nasim FR Judge');
  I.fillField('input[id="referToJudgeDate-day"]', '6');
  I.fillField('input[id="referToJudgeDate-month"]', '2');
  I.fillField('input[id="referToJudgeDate-year"]', '2019');
  I.fillField('input[id="referToJudgeText"]', 'testing this');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(1);
  I.click('Submit');
}

module.exports = { pbaUpdateCase };