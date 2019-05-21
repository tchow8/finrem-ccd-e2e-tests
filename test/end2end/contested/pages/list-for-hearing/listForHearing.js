function listForHearing() {
  const I = this;
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'List for Hearing');
  I.wait(10);
  I.click('Go');
  I.wait(10);
  I.fillField('#timeEstimate', '15');
  I.wait(5);
  I.fillField('input[id="hearingDate-day"]', '15');
  I.fillField('input[id="hearingDate-month"]', '7');
  I.fillField('input[id="hearingDate-year"]', '2019');
  I.wait(5);
  I.fillField('#hearingTime', '13:00');
  I.wait(5);
  I.selectOption('select[id=allocatedCourtListSL]', 'nottingham');
  I.wait(3);
  I.selectOption('select[id=nottinghamCourtListSL]', 'FR_s_NottinghamList_3');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.see('Time Estimate');
  I.see('Hearing Date');
  I.see('Hearing Time');
  I.see('Hearing Court');
  I.wait(5);
  I.click('Submit');
  I.wait(10);
  I.see('List for Hearing');
  I.wait(5);


}

module.exports = { listForHearing };