Feature('finrem contested e2e PBA Journey');
const testConfig = require('test/config.js');
const dateUtil = require('test/end2end/helpers/dateUtil.js');
const solRef = dateUtil.createSolicitorReference();
// const solRef = '1567504044468';
const pbaValue = true;
const searchCaseType = 'Contested Financial Remedy';


Scenario('Verify Contested PBA Solicitors Happypath Scenario', I => {
  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.createCase('FinancialRemedyContested', 'Form A Application');
  I.contestedSolicitorCreate(solRef);
  I.contestedDivorceDetails();
  I.contestedApplicantDetails();
  I.contestedRespondentDetails();
  I.contestedNatureOfApplication();
  I.childrenQuestion();
  I.fastTrack();
  I.complexityListQuestion();
  I.chooseCourt();
  I.mediationQuestion();
  I.mediationExemptions();
  I.mediationDomesticVoilence();
  I.mediationUrgency();
  I.mediationAttendance();
  I.mediationOther();
  I.otherDocuments();
  I.contestedCYA();
  I.see('Form A Application');
  //I.draftValidateTabs();
  I.contestedOptionsPage();
  I.contestedAuthorisation();
  I.contestedPayment(pbaValue);
  I.contestedPbaPayment();
  I.contestedPaymentSubmission();
  I.contestedInformationPage();
  I.contestedFinalPaymentPage();
  I.contestedFinalInformation();
  I.see('Case Submission');
  //I.solicitorTabs();
});


Scenario('Verify Contested PBA Court Admin update case Scenario', I => {

  // getAccesToken(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);

  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.searchCase(solRef, searchCaseType);
  I.contestedAddNote();
  if(pbaValue===true) {
    I.contestedPbaCase();
  }else {
    I.contestedHwfCase();
  }
  //I.adminTabs();

});



Scenario('Verify Contested PBA Court judge application for Scheduling and Listing case', I => {
  I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
  I.searchCase(solRef, searchCaseType);
  I.giveAllocationDirections();
  //I.judgeTabs();

});



Scenario('Verify Contested PBA Court Admin Scheduling and Hearing Scenario', I => {
  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.searchCase(solRef, searchCaseType);
  I.listForHearing();
  //I.adminOrderTabs();

});



Scenario('Verify Contested PBA Solicitors upload case files Scenario', I => {
  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.searchCase(solRef, searchCaseType);
  I.uploadCaseFiles();
  //I.solResponseTabs();

});


Scenario('Verify Contested PBA Court judge approve case', I => {
  I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
  I.searchCase(solRef, searchCaseType);
  I.waitForPage('.tabs-list');
  I.see('Submit Uploaded Case Files');
  //I.judgeApproveTabs();

});



Scenario('Verify Contested PBA Court Admin upload Consent order Scenario and all Universal events', I => {
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