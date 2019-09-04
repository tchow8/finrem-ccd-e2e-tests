Feature('finrem contested e2e HWF Journey');
const testConfig = require('test/config.js');
const dateUtil = require('test/end2end/helpers/dateUtil.js');
const solRef = dateUtil.createSolicitorReference();
const pbaValue = false;
const searchCaseType = 'Contested Financial Remedy';

Scenario('Verify Contested HWF Solicitors Happypath Scenario', I => {
  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.createCase('FinancialRemedyContested', 'Form A Application');
  I.contestedSolicitorCreate(solRef);
  I.contestedDivorceDetails();
  I.contestedApplicantDetails();
  I.contestedRespondentDetails();
  I.contestedNatureOfApplication();
  I.hwfChildrenQuestion();
  I.hwfFastTrack();
  I.hwfComplexityList();
  I.hwfChooseCourt();
  I.hwfMediationQuestion();
  I.miamCertification();
  I.hwfOtherDocuments();
  I.contestedCYA();
  I.see('Form A Application');
  //I.draftValidateTabs();
  I.contestedHwfOptionsPage();
  I.contestedAuthorisation();
  I.paymentPage(pbaValue);
  I.hwfPaymentDetails();
  I.paymentSubmission();
  I.informationPage();
  I.finalPaymentSubmissionPage();
  I.finalInformationPage();
  I.see('Case Submission');
  //I.solicitorTabs();
});


Scenario('Verify Contested HWF Court Admin update case Scenario', I => {
  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.searchCase(solRef, searchCaseType);

  I.addNote();
  if(pbaValue===true) {
    I.contestedPbaCase();
  }else {
    I.contestedHwfCase();
  }
  //I.adminTabs();

});


Scenario('Verify Contested HWF Solicitors upload case files Scenario', I => {
  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.searchCase(solRef, searchCaseType);
  I.uploadCaseFiles();
  //I.solResponseTabs();

});


Scenario('Verify Contested HWF Court judge approve case', I => {
  I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
  I.searchCase(solRef, searchCaseType);
  I.waitForPage('.tabs-list');
  I.see('Submit Uploaded Case Files');
  //I.judgeApproveTabs();

});



Scenario('Verify Contested HWF Court Admin upload Consent order Scenario and all Universal events', I => {
  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.searchCase(solRef, searchCaseType);

  I.contestedAmendCase();

  I.waitForPage('.tabs-list');
  I.see('Amend Case');

  I.contestedUpdateContactDetails();

  I.waitForPage('.tabs-list');
  I.see('Update contact details');
  
  I.contestedUploadDocument();

  I.waitForPage('.tabs-list');
  I.see('Upload document');
  I.contestedRefund();

  I.waitForPage('.tabs-list');
  I.see('Refund');
  I.contestedCloseCase();

  I.waitForPage('.tabs-list');
  I.see('Close Case');
  //I.finalTabs();


});