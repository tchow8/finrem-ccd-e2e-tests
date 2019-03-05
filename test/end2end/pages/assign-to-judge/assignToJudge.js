function assignToJudge() {
    const I = this;
    I.wait(10);
    I.selectOption('select[id="next-step"]', 'Assign To Judge');
    I.wait(10);
    I.click('Go');
    I.wait(10);
    I.selectOption('select[id="assignedToJudgeReason"]', 'Resubmitted draft consent order');
    I.wait(10);
    I.selectOption('select[id="assignedToJudge"]', 'nasim_fr_judge@mailinator.com');
    I.wait(10);
    I.fillField('input[id="referToJudgeDateFromRespondToOrder-day"]', '3');
    I.fillField('input[id="referToJudgeDateFromRespondToOrder-month"]', '2');
    I.fillField('input[id="referToJudgeDateFromRespondToOrder-year"]', '2019');
    I.wait(10);
    I.fillField('input[id="referToJudgeTextFromRespondToOrder"]', 'Please look into this case on urgent basis again ');
    I.click('Continue');
    I.wait(10);
    I.click('Submit');
    I.wait(10);

}

module.exports = { assignToJudge };