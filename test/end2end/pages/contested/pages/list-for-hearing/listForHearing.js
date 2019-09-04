function listForHearing() {
  const I = this;

  I.waitForPage('.tabs-list');

  I.selectOption('select[id="next-step"]', 'List for Hearing');
  I.click('Go');

  I.waitForPage('#timeEstimate');
  I.fillField('#timeEstimate', '15');

  let date = new Date();
  I.say('Today : '+date);
  date.setDate(date.getDay() + 7*7);
  I.say('Hearring date : ' + date);


  I.fillField('input[id="hearingDate-day"]', date.getDay());
  I.fillField('input[id="hearingDate-month"]',date.getMonth()+ 1);
  I.fillField('input[id="hearingDate-year"]', date.getFullYear());
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

module.exports = { listForHearing };