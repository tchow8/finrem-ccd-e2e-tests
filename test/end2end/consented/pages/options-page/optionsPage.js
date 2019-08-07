function optionsPage(){
  const I = this;
  // I.wait(10);
  I.waitForElement('.tabs', 30);
  I.selectOption('select[id="next-step"]', 'Amend Application Details');
  I.wait(2);
  I.click('Go');
  // I.waitForPage('h2', 'Before You Start');
  I.wait(10);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('h4', 'SOLICITOR DETAILS');

  I.fillField('input[id="solicitorPhone"]', '07766120000');
  // I.wait(5);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(10);
  I.waitForPage('h4', 'DIVORCE DETAILS');

  I.fillField('input[id="divorceCaseNumber"]', 'EM18D84321');
  // I.wait(5);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(10);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(10);
  I.waitForPage('h4', 'RESPONDENT DETAILS');
  I.fillField('input[id="rSolicitorEmail"]', 'mahsol@mailinator.com');
  // I.wait(5);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(10);
  I.waitForPage('h4', 'NATURE OF THE APPLICATION');
  I.checkOption('input[value="Property Adjustment  Order"]');
  // I.wait(5);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(10);
  I.waitForPage('h4', 'ORDER FOR CHILDREN');
  I.checkOption('input[id="orderForChildrenQuestion1-No"]');
  // I.wait(5);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(10);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(10);
  I.waitForPage('h4', 'D81');
  I.checkOption('input[id="d81Question-No"]');
  I.wait(2);
  I.attachFile('input[id="d81Applicant"]', 'data/fileupload.txt');
  I.wait(2);
  I.attachFile('input[id="d81Respondent"]', 'data/fileupload.txt');
  // I.wait(5);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(10);
  I.waitForPage('h4', 'PENSION DOCUMENTS');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(10);
  I.waitForPage('h4', 'OTHER DOCUMENTS');

  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(10);
  I.waitForPage('#createCasePreConfirmationInfoText h1', 'Saving your application');

  I.waitForContinueButtonEnabled();
  I.click('Continue');

  I.waitForPage('.check-your-answers h2', 'Check your answers');
  I.see('SOLICITOR DETAILS');
  I.see('DIVORCE DETAILS');
  I.see('APPLICANT DETAILS');
  I.see('RESPONDENT DETAILS');
  // I.wait(10);
  I.click('Submit');
  // I.wait(10);
  I.waitForPage('h2', 'History');
  I.see('Amend Application Details');
  // I.wait(10);
  I.selectOption('select[id="next-step"]', 'Case Submission');
  I.wait(2);
  I.click('Go');
  // I.wait(10);
}

module.exports = { optionsPage };