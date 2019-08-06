function assignToJudge() {
  const I = this;
  // I.wait(10);
  I.waitForPage('.EventLogTable h2', 'History');
  I.selectOption('select[id="next-step"]', 'Assign To Judge');
  I.wait(1);
  I.click('Go');
  // I.wait(10);
  I.waitForElement('select[id="assignedToJudgeReason',30); 
  I.selectOption('select[id="assignedToJudgeReason"]', 'Resubmitted draft consent order');
  I.wait(1);
  I.selectOption('select[id="assignedToJudge"]', 'nasim_fr_judge@mailinator.com');
  I.wait(1);
  I.fillField('input[id="referToJudgeDateFromRespondToOrder-day"]', '13');
  I.fillField('input[id="referToJudgeDateFromRespondToOrder-month"]', '2');
  I.fillField('input[id="referToJudgeDateFromRespondToOrder-year"]', '2019');
  // I.wait(10);
  I.fillField('input[id="referToJudgeTextFromRespondToOrder"]', 'testing this again');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(10);
  I.waitForElement('#field-trigger-summary', 30);
  I.click('Submit');
  // I.wait(10);

}

module.exports = { assignToJudge };