function contestedAmendCase() {

  const I = this;

  I.waitForPage('.tabs-list');
  I.selectOption('select[id="next-step"]', 'Amend Case');
  I.click('Go');

  I.waitForPage('input[id="divorceCaseNumber"]');
  I.fillField('input[id="divorceCaseNumber"]', 'MR12D76543');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#field-trigger-summary');
  I.click('Submit');


}

module.exports = { contestedAmendCase };