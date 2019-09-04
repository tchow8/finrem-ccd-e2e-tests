function contestedUpdateContactDetails() {
  const I = this;
  I.waitForPage('.tabs-list');
  I.selectOption('select[id="next-step"]', 'Update contact details');
  I.click('Go');

  I.waitForPage('input[id="applicantSolicitorAddress_AddressLine1"]');
  I.fillField('input[id="applicantSolicitorAddress_AddressLine1"]', '26 Riverside Gardens');
  I.fillField('input[id="applicantSolicitorAddress_PostTown"]', 'Wembley');
  I.fillField('input[id="applicantSolicitorAddress_PostCode"]', 'HA0 1JF');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#applicantFMName');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#respondentFMName');
  I.waitForContinueButtonEnabled();
  I.click('Continue'); 
 
  I.waitForPage('#respondentRepresented-Yes');
  I.waitForContinueButtonEnabled();

  I.click('Continue') ;

  I.waitForPage('.check-your-answers');
  I.click('Submit');
}


module.exports = { contestedUpdateContactDetails };
