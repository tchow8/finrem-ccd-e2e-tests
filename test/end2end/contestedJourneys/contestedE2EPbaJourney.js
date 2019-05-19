Feature('finrem contested e2e PBA Journey');
const testConfig = require('test/config.js');
const dateUtil = require('test/end2end/helpers/dateUtil.js');
const solRef = dateUtil.createSolicitorReference();
const pbaValue = true;

Scenario('Verify Contested PBA Solicitors Happypath Scenario', I => {
  I.contestedsigninIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.contestedCreateCase();
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
  I.wait(5);
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
  I.contestedsigninIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.wait(10);
  I.contestedSearchCase(solRef);
  I.contestedAddNote();
  if(pbaValue===true) {
    I.contestedPbaCase();
  }else {
    I.contestedHwfCase();
  }
  //I.adminTabs();

});



Scenario('Verify Contested PBA Court judge application for Scheduling and Listing case', I => {
  I.contestedsigninIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
  I.wait(10);
  I.contestedSearchCase(solRef);
  I.giveAllocationDirections();
  //I.judgeTabs();

});



Scenario('Verify Contested PBA Court Admin Scheduling and Hearing Scenario', I => {
  I.contestedsigninIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.wait(10);
  I.contestedSearchCase(solRef);
  I.listForHearing();
  //I.adminOrderTabs();

});



Scenario('Verify Contested PBA Solicitors upload case files Scenario', I => {
  I.contestedsigninIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.wait(10);
  I.contestedSearchCase(solRef);
  I.uploadCaseFiles();
  //I.solResponseTabs();

});


Scenario('Verify Contested PBA Court judge approve case', I => {
  I.contestedsigninIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
  I.wait(10);
  I.contestedSearchCase(solRef);
  I.see('Submit Uploaded Case Files');
  //I.judgeApproveTabs();

});



Scenario('Verify Contested PBA Court Admin upload Consent order Scenario and all Universal events', I => {
  I.contestedsigninIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.wait(10);
  I.contestedSearchCase(solRef);
  I.contestedAmendCase();
  I.see('Amend Case');
  I.wait(5);
  I.contestedUpdateContactDetails();
  I.see('Update contact details');
  I.wait(5);
  I.contestedUploadDocument();
  I.see('Upload document');
  I.wait(5);
  I.contestedRefund();
  I.see('Refund');
  I.wait(5);
  I.contestedCloseCase();
  I.see('Close Case');
  I.wait(2);
  //I.finalTabs();


});