Feature('finrem consented e2e HWF Journey');
const testConfig = require('test/config.js');
const dateUtil = require('test/end2end/helpers/dateUtil.js');
const solRef = dateUtil.createSolicitorReference();
// const solRef = '1565167881575';
const pbaValue = false;

const searchCaseType = 'Financial Remedy Consented';

Scenario.only('Verify Consented HWF Solicitors Happypath Scenario', I =>   {
  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.createCase('FinancialRemedyMVP2','Consent Order Application');
  I.solicitorCreate(solRef);
  I.divorceDetails();
  I.consentedApplicatDetails();
  I.consentedRespondentDetails();
  I.natureOfApplication();
  I.orderForChildren();
  I.consentOrder();
  I.deightyone();
  I.optionalDocuments();
  I.consentedOtherDocuments();
  I.informationPage();
  I.checkYourAnswers();
  I.see('Consent Order Application');
  // I.wait(10);
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

  // I.wait(10);
  I.searchCase(solRef, searchCaseType);
  I.addNote();
  // I.wait(10);
  if(pbaValue===true) {
    I.pbaUpdateCase();
  }else {
    I.hwfUpdateCase();
  }
  //pause ();
  I.adminTabs();

});



Scenario('Verify Consented HWF Court judge application not approved case', I => {

  I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);

  // I.wait(10);
  I.searchCase(solRef, searchCaseType);
  I.applicationNotApproved();
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Application Not Approved');
  I.judgeTabs();

});



Scenario('Verify Consented HWF Court Admin upload order Scenario', I => {

  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);

  I.wait(10);
  I.searchCase(solRef, searchCaseType);
  I.sendOrder();
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Send Order');
  I.adminOrderTabs();

});



Scenario('Verify Consented HWF Solicitors Respond to order Scenario', I => {
  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);

  // I.wait(10);
  I.searchCase(solRef, searchCaseType);
  I.respondOrder();
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Respond To Order');
  I.solResponseTabs();

});



Scenario('Verify Consented HWF Court Admin Assign to Judge Scenario for Response Received', I => {
  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);

  // I.wait(10);
  I.searchCase(solRef, searchCaseType);
  I.assignToJudge();
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Assign To Judge');
  I.adminResponseTabs();

});



Scenario('Verify Consented HWF Court judge approve case', I => {
  I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);

  I.searchCase(solRef, searchCaseType);
  I.approveApplication();
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Approve Application');
  I.judgeApproveTabs();

});



Scenario('Verify Consented HWF Court Admin upload Consent order Scenario and all Universal events', I => {
  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);

  // I.wait(10);
  I.searchCase(solRef, searchCaseType);
  I.uploadConsentOrder();
  I.waitForPage('.EventLogTable h2', 'History'); 
  I.see('Upload Consent Order');
  I.wait(5);
  I.amendCase();
  I.waitForPage('.EventLogTable h2', 'History');  
  I.see('Amend Case');
  I.wait(5);
  I.amendedConsentOrder();
  I.waitForPage('.EventLogTable h2', 'History');  
  I.see('Amended Consent Order');
  I.wait(5);
  // pause ();
  I.updateContactDetails();

  I.waitForPage('.EventLogTable h2', 'History');  
  I.see('Update contact details');
  // I.wait(5);
  I.updateDueDate();
  I.waitForPage('.EventLogTable h2', 'History');  
  I.see('Update Due Date');
  // I.wait(5);

  I.uploadDocument();
  I.waitForPage('.EventLogTable h2', 'History');  
  I.see('Upload document');

  // I.wait(5);
  I.refund();
  I.waitForPage('.EventLogTable h2', 'History');  
  I.see('Refund');

  // I.wait(5);
  I.closeCase();
  I.waitForPage('.EventLogTable h2', 'History');  
  I.see('Close Case');
  // I.wait(2);
  I.finalTabs();


});