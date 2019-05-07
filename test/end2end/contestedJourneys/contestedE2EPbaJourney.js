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
  I.wait(10);
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
  /*I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.wait(10);
  I.searchCase(solRef);
  I.addNote();
  if(pbaValue===true) {
    I.pbaUpdateCase();
  }else {
    I.hwfUpdateCase();
  }
  I.adminTabs();

});



Scenario('Verify Contested PBA Court judge application not approved case', I => {
  I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
  I.wait(10);
  I.searchCase(solRef);
  I.applicationNotApproved();
  I.see('Application Not Approved');
  I.judgeTabs();

});



Scenario('Verify Contested PBA Court Admin upload order Scenario', I => {
  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.wait(10);
  I.searchCase(solRef);
  I.updateOrder();
  I.see('Update Order');
  I.uploadOrder();
  I.see('Upload Order');
  I.adminOrderTabs();

});



Scenario('Verify Contested PBA Solicitors Respond to order Scenario', I => {
  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.wait(10);
  I.searchCase(solRef);
  I.respondOrder();
  I.see('Respond To Order');
  I.solResponseTabs();

});



Scenario('Verify Contested PBA Court Admin Assign to Judge Scenario for Response Received', I => {
  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.wait(10);
  I.searchCase(solRef);
  I.assignToJudge();
  I.see('Assign To Judge');
  I.adminResponseTabs();

});



Scenario('Verify Contested PBA Court judge approve case', I => {
  I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
  I.wait(10);
  I.searchCase(solRef);
  I.approveApplication();
  I.see('Approve Application');
  I.judgeApproveTabs();

});



Scenario('Verify Contested PBA Court Admin upload Consent order Scenario and all Universal events', I => {
  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.wait(10);
  I.searchCase(solRef);
  I.uploadConsentOrder();
  I.see('Upload Consent Order');
  I.wait(5);
  I.amendCase();
  I.see('Amend Case');
  I.wait(5);
  I.amendedConsentOrder();
  I.see('Amended Consent Order');
  I.wait(5);
  I.updateContactDetails();
  I.see('Update contact details');
  I.wait(5);
  I.updateDueDate();
  I.see('Update Due Date');
  I.wait(5);
  I.uploadDocument();
  I.see('Upload document');
  I.wait(5);
  I.refund();
  I.see('Refund');
  I.wait(5);
  I.closeCase();
  I.see('Close Case');
  I.wait(2);
  I.finalTabs();


});*/