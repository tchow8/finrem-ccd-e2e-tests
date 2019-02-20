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
  I.wait(5);
  I.optionsPage();
  I.authorisation();
  I.paymentPage();
  I.paymentDetails();
  I.paymentSubmission();
  I.informationPage();
  I.finalPaymentSubmissionPage();
  I.see('Application Payment Submission');
});


Scenario('Verify Court Admin update case Scenario', I => {
  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.wait(10);
  I.searchCase(solRef);
  I.updateCase();
});

Scenario('Verify Court judge approve case', I => {
  I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
  I.wait(2);
  //I.selectOption('select[id=wb-case-state]', 'Awaiting Judicial Response');
  I.searchCase(solRef);
  I.approveApplication();
  I.see('Approve Application');
});
