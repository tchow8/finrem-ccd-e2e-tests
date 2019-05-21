Feature('finrem contested e2e HWF Journey');
const testConfig = require('test/config.js');
const dateUtil = require('test/end2end/helpers/dateUtil.js');
const solRef = dateUtil.createSolicitorReference();
const pbaValue = false;


Scenario.only('Verify Solicitors Happypath Scenario1', I => {
  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.createCase();
  I.solicitorCreate(solRef);
  I.divorceDetails();
  I.applicantDetails();
  I.respondentDetails();
  I.natureOfApplication();
  I.orderForChildren();
  I.consentOrder();
  I.d81();
  I.optionalDocuments();
  I.informationPage();
  I.checkYourAnswers();
  I.see('Consent Order Application');
=======
Scenario('Verify Contested HWF Solicitors Happypath Scenario', I => {
  I.contestedsigninIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.contestedCreateCase();
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
>>>>>>> e8adb28aca7c5f06a4cd7926ea40c94f88c8cd34
  I.wait(10);
  //I.draftValidateTabs();
  I.contestedHwfOptionsPage();
  I.contestedAuthorisation();
  I.contestedPayment(pbaValue);
  I.contestedHwfPayment();
  I.contestedPaymentSubmission();
  I.contestedInformationPage();
  I.contestedFinalPaymentPage();
  I.contestedFinalInformation();
  I.see('Case Submission');
  //I.solicitorTabs();
});


Scenario('Verify Contested HWF Court Admin update case Scenario', I => {
  I.contestedsigninIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.wait(10);
  I.contestedSearchCase(solRef);
  I.contestedAddNote();
  I.wait(10);
  if(pbaValue===true) {
    I.contestedPbaCase();
  }else {
    I.contestedHwfCase();
  }
  //I.adminTabs();

});


Scenario('Verify Contested HWF Solicitors upload case files Scenario', I => {
  I.contestedsigninIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.wait(10);
  I.contestedSearchCase(solRef);
  I.uploadCaseFiles();
  //I.solResponseTabs();

});


Scenario('Verify Contested HWF Court judge approve case', I => {
  I.contestedsigninIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
  I.wait(10);
  I.contestedSearchCase(solRef);
  I.see('Submit Uploaded Case Files');
  //I.judgeApproveTabs();

});



Scenario('Verify Contested HWF Court Admin upload Consent order Scenario and all Universal events', I => {
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