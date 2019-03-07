
function pbaUpdateCase() {
  const I = this;
  I.wait(5);
  I.selectOption('select[id="next-step"]', 'Issue Application');
  I.wait(5);
  I.click('Go');
  I.wait(5);
  I.fillField('input[id="issueDate-day"]', '5');
  I.fillField('input[id="issueDate-month"]', '2');
  I.fillField('input[id="issueDate-year"]', '2019');
  I.click('Continue');
  I.wait(10);
  I.click('Submit');
  I.wait(20);
  I.selectOption('select[id="next-step"]', 'Assign To Judge');
  I.wait(10);
  I.click('Go');
  I.wait(10);
  I.selectOption('select[id="assignedToJudgeReason"]', 'Draft consent order');
  I.wait(10);
  I.selectOption('select[id="assignedToJudge"]', 'nasim_fr_judge@mailinator.com');
  I.wait(10);
  I.fillField('input[id="referToJudgeDate-day"]', '6');
  I.fillField('input[id="referToJudgeDate-month"]', '2');
  I.fillField('input[id="referToJudgeDate-year"]', '2019');
  I.wait(10);
  I.fillField('input[id="referToJudgeText"]', 'Please look into this case on urgent basis ');
  I.click('Continue');
  I.wait(10);
  I.click('Submit');
  I.wait(10);

}

module.exports = { pbaUpdateCase };