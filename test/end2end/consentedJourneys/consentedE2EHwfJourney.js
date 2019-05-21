Feature('finrem consented e2e HWF Journey');
const testConfig = require('test/config.js');
const dateUtil = require('test/end2end/helpers/dateUtil.js');
const solRef = dateUtil.createSolicitorReference();
const pbaValue = false;

Scenario('Verify Consented HWF Solicitors Happypath Scenario', I => {
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
  I.draftValidateTabs();
  I.optionsPage();
  I.authorisation();
  I.paymentPage(pbaValue);
  I.hwfPaymentDetails();
  I.paymentSubmission();
  I.informationPage();
  I.finalPaymentSubmissionPage();
  I.finalInformationPage();
  I.see('Case Submission');
  I.solicitorTabs();
});


Scenario('Verify Consented HWF Court Admin update case Scenario', I => {
  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.wait(10);
  I.searchCase(solRef);
  I.addNote();
  I.wait(10);
  if(pbaValue===true) {
    I.pbaUpdateCase();
  }else {
    I.hwfUpdateCase();
  }
  I.adminTabs();

});



Scenario('Verify Consented HWF Court judge application not approved case', I => {
  I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
  I.wait(10);
  I.searchCase(solRef);
  I.applicationNotApproved();
  I.see('Application Not Approved');
  I.judgeTabs();

});



Scenario('Verify Consented HWF Court Admin upload order Scenario', I => {
  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.wait(10);
  I.searchCase(solRef);
  I.sendOrder();
  I.see('Send Order');
  I.adminOrderTabs();

});



Scenario('Verify Consented HWF Solicitors Respond to order Scenario', I => {
  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.wait(10);
  I.searchCase(solRef);
  I.respondOrder();
  I.see('Respond To Order');
  I.solResponseTabs();

});



Scenario('Verify Consented HWF Court Admin Assign to Judge Scenario for Response Received', I => {
  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.wait(10);
  I.searchCase(solRef);
  I.assignToJudge();
  I.see('Assign To Judge');
  I.adminResponseTabs();

});



Scenario('Verify Consented HWF Court judge approve case', I => {
  I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
  I.wait(10);
  I.searchCase(solRef);
  I.approveApplication();
  I.see('Approve Application');
  I.judgeApproveTabs();

});



Scenario('Verify Consented HWF Court Admin upload Consent order Scenario and all Universal events', I => {
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


});