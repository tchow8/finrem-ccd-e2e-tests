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
  I.authorisation();
  I.consentOrder();
  I.d81();
  I.optionalDocuments();
  I.paymentDetails();
  I.checkYourAnswers();
  I.see('Consent Order Application');
  I.see('Financial Remedy SOLICITOR');
});


Scenario('Verify Court Admin update case Scenario', I => {
  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.wait(2);
  I.searchCase(solRef);
  I.wait(5);
  I.click('a div.text-16');
  I.wait(2);
});

xScenario('Verify Court judge approve case', I => {
  I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
  I.consentOrderApproved();
  I.updateSolAddress();
  I.see('Update Order Application');
  I.see('Financial Remedy COURT ADMIN');
  I.click('Solicitor');
  I.see('103 PF');
});
