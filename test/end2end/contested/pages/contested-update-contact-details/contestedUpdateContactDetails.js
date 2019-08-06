function contestedUpdateContactDetails() {
  const I = this;
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Update contact details');
  I.wait(10);
  I.click('Go');
  I.wait(10);
  I.fillField('input[id="applicantSolicitorAddress_AddressLine1"]', '26 Riverside Gardens');
  I.wait(2);
  I.fillField('input[id="applicantSolicitorAddress_PostTown"]', 'Wembley');
  I.wait(2);
  I.fillField('input[id="applicantSolicitorAddress_PostCode"]', 'HA0 1JF');
  I.wait(5);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(5);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(5);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(5);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(5);
  I.click('Submit');
  I.wait(10);
}


module.exports = { contestedUpdateContactDetails };
