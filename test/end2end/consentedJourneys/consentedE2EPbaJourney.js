var { getContestedScenarioState } = require('../dataSetup/scenarios/scenarioState');


Feature('finrem consented e2e PBA Journey');
const testConfig = require('test/config.js');
const dateUtil = require('test/end2end/helpers/dateUtil.js');
const solRef = 'AUTO-' + dateUtil.createSolicitorReference();
const pbaValue = true;
const searchCaseType = 'Financial Remedy Consented';

Scenario('Verify Consented PBA Solicitors Happypath Scenario', I => {
  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.createCase('FinancialRemedyMVP2', 'Consent Order Application');
  I.solicitorCreate(solRef);
  I.divorceDetails();
  I.consentedApplicatDetails();
  I.consentedRespondentDetails();
  I.natureOfApplication();
  I.orderForChildren();
  I.consentOrder();
  I.d81();
  I.optionalDocuments();
  I.otherDocuments();
  I.informationPage();
  I.checkYourAnswers();
  I.see('Consent Order Application');
  I.wait(10);
  I.draftValidateTabs();
  I.optionsPage();
  I.consentedAuthorisation();
  I.paymentPage(pbaValue);
  I.pbaPaymentDetails();
  I.paymentSubmission();
  I.informationPage();
  I.finalPaymentSubmissionPage();
  I.finalInformationPage();
  I.see('Case Submission');
  I.solicitorTabs();
});


Scenario('Verify Consented PBA Court Admin update case Scenario', async (I)  => {

  const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getContestedScenarioState('Application Drafted', scenarioSolref);


  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  // I.wait(10);
  I.searchCase(scenarioSolref);
  I.addNote();
  if(pbaValue===true) {
    I.pbaUpdateCase();
  }else {
    I.hwfUpdateCase();
  }
  I.adminTabs();

});



Scenario('Verify Consented PBA Court judge application not approved case', async (I)  => {
  const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getContestedScenarioState('Awaiting Judicial Response', scenarioSolref);


  I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
  // I.wait(10);
  I.searchCase(scenarioSolref, searchCaseType);
  I.applicationNotApproved();
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Application Not Approved');
  I.judgeTabs();

});



Scenario('Verify Consented PBA Court Admin upload order Scenario', async (I)  => {
  const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getContestedScenarioState('Consent Order Not Approved', scenarioSolref);

  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  // I.wait(10);
  I.searchCase(scenarioSolref, searchCaseType);
  I.updateOrder();
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Update Order');
  I.uploadOrder();
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Upload Order');
  I.adminOrderTabs();

});



Scenario('Verify Consented PBA Solicitors Respond to order Scenario', async (I)  => {
  const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getContestedScenarioState('Awaiting Response', scenarioSolref);


  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  // I.wait(10);
  I.searchCase(scenarioSolref, searchCaseType);
  I.respondOrder();
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Respond To Order');
  I.solResponseTabs();

});



Scenario('Verify Consented PBA Court Admin Assign to Judge Scenario for Response Received', async (I)  => {

  const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getContestedScenarioState('Response Received', scenarioSolref);


  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  // I.wait(10);
  I.searchCase(scenarioSolref, searchCaseType);
  I.assignToJudge();
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Assign To Judge');
  I.adminResponseTabs();

});



Scenario('Verify Consented PBA Court judge approve case', async (I)  => {
  const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getContestedScenarioState('Awaiting Judicial Response', scenarioSolref);


  I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
  // I.wait(10);
  I.searchCase(scenarioSolref, searchCaseType);
  I.approveApplication();
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Approve Application');
  I.judgeApproveTabs();

});



Scenario('Verify Consented PBA Court Admin upload Consent order Scenario and all Universal events', async (I)  => {


    const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getContestedScenarioState('Consent Order Approved', scenarioSolref);

  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  // I.wait(10);
  I.searchCase(scenarioSolref, searchCaseType);
  I.uploadConsentOrder();
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Upload Consent Order');
  // I.wait(5);
  I.amendCase();
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Amend Case');
  // I.wait(5);
  I.amendedConsentOrder();
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Amended Consent Order');
  // I.wait(5);
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