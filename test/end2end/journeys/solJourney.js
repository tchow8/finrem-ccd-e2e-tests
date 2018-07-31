Feature('finrem sols e2e joureny');
const testConfig = require('test/config.js');

Scenario('Verify Solicitors Happypath Scenario', I => {
  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.createCase();
  I.solicitorCreate();
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
