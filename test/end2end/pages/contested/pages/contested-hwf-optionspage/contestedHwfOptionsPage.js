function contestedHwfOptionsPage(){
  const I = this;
  I.waitForPage('.tabs-content'); 
  I.selectOption('select[id="next-step"]', 'Amend Application Details');
  I.click('Go');

  I.waitForPage('#beforeYouStart');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('input[id="applicantSolicitorPhone"]');
  I.fillField('input[id="applicantSolicitorPhone"]', '07766121111');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;


  I.waitForPage('input[id="divorceCaseNumber"]');
  I.fillField('input[id="divorceCaseNumber"]', 'EM18D33333');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#applicantFMName');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  
  I.waitForPage('#respondentFMName');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#respondentRepresented-Yes'); 
  I.fillField('input[id="rSolicitorEmail"]', 'livamend@mailinator.com');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('input[id="natureOfApplicationChecklist-propertyAdjustmentOrder"]');
  I.checkOption('input[id="natureOfApplicationChecklist-propertyAdjustmentOrder"]');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#propertyAdjutmentOrderDetailLabel');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#paymentForChildrenDecision');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#fastTrackDecision');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;


  I.waitForPage('#addToComplexityListOfCourts');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('input[id="isApplicantsHomeCourt-No"]');
  I.checkOption('input[id="isApplicantsHomeCourt-No"]');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#applicantAttendedMIAMLabel');
  I.waitForContinueButtonEnabled();
  I.click('Continue'); 

  I.waitForPage('#soleTraderName');
  I.fillField('#soleTraderName', 'sole trading');
  I.waitForContinueButtonEnabled(); 
  I.click('Continue') ;

  I.waitForPage('#promptForAnyDocument');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#beforeSavePreConfirmation');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('.check-your-answers');
  I.see('Solicitor Details');
  I.see('Divorce Details');
  I.see('Applicant’s Details');
  I.see('Respondent’s Details');
  I.see('Is the respondent represented ?');
  I.see('Do you want to upload any other documents ?');
  I.click('Submit');
  I.see('Amend Application Details');
  I.waitForPage('select[id="next-step"]');
  I.selectOption('select[id="next-step"]', 'Case Submission');
  I.click('Go');
}

module.exports = { contestedHwfOptionsPage };