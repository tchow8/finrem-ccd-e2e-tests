Feature('finrem  e2e journeys');
const testConfig = require('test/config.js');
const dateUtil = require('test/end2end/helpers/dateUtil.js');
const solRef = dateUtil.createSolicitorReference();

Scenario('Verify Solicitors Happypath Scenario', I => {
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
  I.wait(10);
  I.optionsPage();
  I.authorisation();
  I.paymentPage();
  //I.pbaPaymentDetails();
  I.hwfPaymentDetails();
  I.paymentSubmission();
  I.informationPage();
  I.finalPaymentSubmissionPage();
  I.hwfInformationPage();
  I.see('Case Submission');
});


Scenario('Verify Court Admin update case Scenario', I => {
  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.wait(10);
  I.searchCase(solRef);
  I.addNote();
  //I.pbaUpdateCase();
  I.hwfUpdateCase();

});



Scenario('Verify Court judge application not approved case', I => {
    I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
    I.wait(10);
    I.searchCase(solRef);
    I.applicationNotApproved();
    I.see('Application Not Approved');

});



Scenario('Verify Court Admin upload order Scenario', I => {
    I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
    I.wait(10);
    I.searchCase(solRef);
    I.uploadOrder();
    I.see('Upload Order');

});



Scenario('Verify Solicitors Respond to order Scenario', I => {
    I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
    I.wait(10);
    I.searchCase(solRef);
    I.respondOrder();
    I.see('Respond To Order');

});



Scenario('Verify Court Admin Assign to Judge Scenario for Response Received', I => {
    I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
    I.wait(10);
    I.searchCase(solRef);
    I.assignToJudge();
    I.see('Assign To Judge');

});



Scenario('Verify Court judge approve case', I => {
    I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
    I.wait(10);
    I.searchCase(solRef);
    I.approveApplication();
    I.see('Approve Application');

});



Scenario('Verify Court Admin upload Consent order Scenario', I => {
    I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
    I.wait(10);
    I.searchCase(solRef);
    I.uploadConsentOrder();
    I.see('Upload Consent Order');

});