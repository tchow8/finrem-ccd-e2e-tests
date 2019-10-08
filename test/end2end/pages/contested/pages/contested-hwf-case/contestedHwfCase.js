function contestedHwfCase() {
  const I = this;
  I.waitForPage('select[id="next-step"]');
  I.selectOption('select[id="next-step"]', 'HWF Application Accepted');
  I.click('Go');

  I.waitForPage('#field-trigger-summary');
  I.click('Submit');

  I.waitForPage('select[id="next-step"]');
  I.selectOption('select[id="next-step"]', 'Issue Application');
  I.click('Go');

  I.waitForPage('input[id="issueDate-day"]');
  I.fillField('input[id="issueDate-day"]', '13');
  I.fillField('input[id="issueDate-month"]', '5');
  I.fillField('input[id="issueDate-year"]', '2019');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#field-trigger-summary');
  I.click('Submit');

  I.waitForPage('select[id="next-step"]'); 
  I.selectOption('select[id="next-step"]', 'Progress To Listing');
  I.click('Go');

  I.waitForPage('#field-trigger-summary');
  I.click('Submit');

  

  I.waitForPage('select[id="next-step"]'); 
  I.selectOption('select[id="next-step"]', 'List for Hearing');
  I.click('Go');

  I.waitForPage('#timeEstimate');
  I.fillField('#timeEstimate', '15');
  I.fillField('input[id="hearingDate-day"]', '15');
  I.fillField('input[id="hearingDate-month"]', '8');
  I.fillField('input[id="hearingDate-year"]', '2019');
  I.fillField('#hearingTime', '13:00');
  I.selectOption('select[id=allocatedCourtListSL]', 'nottingham');
  I.selectOption('select[id=nottinghamCourtListSL]', 'FR_s_NottinghamList_3');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;


  I.waitForPage('.check-your-answers');
  I.see('Time Estimate');
  I.see('Hearing Date');
  I.see('Hearing Time');
  I.see('Hearing Court');
  I.click('Submit');

  I.waitForPage('.tabs-list');
  I.see('List for Hearing');


}

module.exports = { contestedHwfCase };