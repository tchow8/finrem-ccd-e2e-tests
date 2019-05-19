function contestedAmendCase() {

  const I = this;
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Amend Case');
  I.wait(5);
  I.click('Go');
  I.wait(5);
  I.fillField('input[id="divorceCaseNumber"]', 'MR12D76543');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.click('Submit');
  I.wait(10);


}

module.exports = { contestedAmendCase };