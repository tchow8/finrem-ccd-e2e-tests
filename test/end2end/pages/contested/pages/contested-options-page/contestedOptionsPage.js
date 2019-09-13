async function contestedOptionsPage(){
  const I = this;

  I.waitForPage('.tabs-list');
  I.selectOption('select[id="next-step"]', 'Amend Application Details');
  I.click('Go');

  I.waitForPage('#beforeYouStart');
  I.waitForContinueButtonEnabled();
  I.click('body');
  I.click('Continue') ;

  I.waitForPage('#applicantSolicitorName');
  I.fillField('input[id="applicantSolicitorPhone"]', '07766120000');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#divorceCaseNumber');
  I.fillField('input[id="divorceCaseNumber"]', 'EM18D84321');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#applicantFMName');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#respondentFMName');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#respondentRepresented');
  I.fillField('input[id="rSolicitorEmail"]', 'mahamend@mailinator.com');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;


  I.waitForPage('#natureOfApplicationChecklist');
  I.checkOption('//input[contains(@id,"natureOfApplicationChecklist-Maintenance")]');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;





  I.waitForPage('#propertyAdjutmentOrderDetailLabel');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#paymentForChildrenLabel');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#benefitForChildrenLabel');
  I.waitForContinueButtonEnabled();
  I.click('Continue'); 



  // I.waitForPage('#paymentForChildrenDecision');
  // // I.checkOption('input[id="benefitPaymentChecklist-The child or the person with care of the child or the absent parent of the child is not habitually resident in the United Kingdom"]');
  // I.waitForContinueButtonEnabled();
  // I.click('Continue') ;


  // I.waitForPage('#benefitForChildrenDecision');

  // // I.checkOption('input[id="fastTrackDecisionReason-reason_1"]');
  // I.waitForContinueButtonEnabled();
  // I.click('Continue') ;

  I.waitForPage('#fastTrackDecisionLabel');

  // I.checkOption('input[id="fastTrackDecisionReason-reason_3"]');
  // I.checkOption('input[id="fastTrackDecisionReason-reason_2"]');
  I.waitForContinueButtonEnabled();
  I.click('Continue'); 
  
  I.waitForPage('#addToComplexityListOfCourts');

  I.checkOption('input[id="otherReasonForComplexity-Yes"]');
  I.fillField('#otherReasonForComplexityText', 'testing');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#allocatedCourtList');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#applicantAttendedMIAM');
  I.waitForContinueButtonEnabled();
  I.click('body');
  I.click('Continue') ;

  I.waitForPage('#MIAMExemptionsChecklist');
  // I.checkOption('input[id="MIAMExemptionsChecklist-other"]');
  // I.checkOption('input[id="MIAMExemptionsChecklist-previousMIAMattendance"]');
  // I.checkOption('input[id="MIAMExemptionsChecklist-urgency"]');
  // I.checkOption('input[id="MIAMExemptionsChecklist-domesticViolence"]');


  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#MIAMDomesticViolenceChecklist');
  // I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_22"]');
  // I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_21"]');
  // I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_20"]');
  // I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_19"]');
  // I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_18"]');
  // I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_17"]');
  // I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_16"]');
  // I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_15"]');
  // I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_13"]');
  // I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_12"]');
  // I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_11"]');
  // // I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_10"]');


  I.waitForContinueButtonEnabled();
  I.click('body');
  I.click('Continue') ;

  I.waitForPage('#MIAMUrgencyReasonChecklist');
  // // I.checkOption('input[id="MIAMUrgencyReasonChecklist-FR_ms_MIAMUrgencyReasonChecklist_Value_5"]');
  // // I.checkOption('input[id="MIAMUrgencyReasonChecklist-FR_ms_MIAMUrgencyReasonChecklist_Value_4"]');
  // I.checkOption('input[id="MIAMUrgencyReasonChecklist-FR_ms_MIAMUrgencyReasonChecklist_Value_3"]');

  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#MIAMPreviousAttendanceChecklist');
  // I.checkOption('input[id="MIAMPreviousAttendanceChecklist-FR_ms_MIAMPreviousAttendanceChecklist_Value_1"]');

  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#MIAMOtherGroundsChecklist');
  // I.checkOption('input[id="MIAMOtherGroundsChecklist-FR_ms_MIAMOtherGroundsChecklist_Value_6"]');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#promptForAnyDocument');
  I.waitForContinueButtonEnabled();
  I.click('body');
  I.click('Continue') ;

  // pause ();
  I.waitForPage('#beforeSavePreConfirmation');
  I.waitForContinueButtonEnabled();
  I.click('body');
  I.click('Continue');


  I.waitForPage('.check-your-answers');
  I.see('Solicitor Details');
  I.see('Divorce Details');
  I.see('Applicant’s Details');
  I.see('Respondent’s Details');
  I.see('Is the respondent represented ?');
  I.see('Do you want to upload any other documents ?');
  I.click('Submit');

  I.waitForPage('.tabs-list');
  I.see('Amend Application Details');
  I.selectOption('select[id="next-step"]', 'Case Submission');
  I.click('Go');
}

module.exports = { contestedOptionsPage };