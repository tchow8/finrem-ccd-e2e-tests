var { getConsentedScenarioState } = require('../dataSetup/scenarios/scenarioState');


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
  I.deightyone();
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

});


Scenario('Verify Consented PBA Court Admin update case Scenario ', async (I, TabsPage)  => {

  const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getConsentedScenarioState('Application Submitted', scenarioSolref);


  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  // I.wait(10);
  I.searchCase(scenarioSolref, searchCaseType);
  if(pbaValue===true) {
    I.pbaUpdateCase();
  }else {
    I.hwfUpdateCase();
  }

  await TabsPage.validateTabs(searchCaseType);


});



Scenario('Verify Consented PBA Court judge application not approved case', async (I, TabsPage)  => {
  const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getConsentedScenarioState('Awaiting Judicial Response', scenarioSolref);


  I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
  // I.wait(10);
  I.searchCase(scenarioSolref, searchCaseType);
  I.consentedNextStep('Application Not Approved');
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Application Not Approved');
  await TabsPage.validateTabs(searchCaseType);


});



Scenario('Verify Consented PBA Court Admin upload order Scenario', async (I, TabsPage)  => {
  const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getConsentedScenarioState('Consent Order Not Approved', scenarioSolref);

  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  // I.wait(10);
  I.searchCase(scenarioSolref, searchCaseType);
  // I.updateOrder();
  I.consentedNextStep('Upload Order');

  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Update Order');
  // I.uploadOrder();
  I.consentedNextStep('Upload Order');


  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Upload Order');
  await TabsPage.validateTabs(searchCaseType);


});



Scenario('Verify Consented PBA Solicitors Respond to order Scenario ', async (I, TabsPage)  => {
  const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getConsentedScenarioState('Awaiting Response', scenarioSolref);


  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  // I.wait(10);
  I.searchCase(scenarioSolref, searchCaseType);
  I.consentedNextStep('Respond To Order');
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Respond To Order');
  await TabsPage.validateTabs(searchCaseType);


});



Scenario('Verify Consented PBA Court Admin Assign to Judge Scenario for Response Received', async (I, TabsPage)  => {

  const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getConsentedScenarioState('Response Received', scenarioSolref);


  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  // I.wait(10);
  I.searchCase(scenarioSolref, searchCaseType);
  I.consentedNextStep('Assign To Judge');
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Assign To Judge');
  await TabsPage.validateTabs(searchCaseType);


});



Scenario('Verify Consented PBA Court judge approve case', async (I, TabsPage)  => {
  const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getConsentedScenarioState('Awaiting Judicial Response', scenarioSolref);


  I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
  // I.wait(10);
  I.searchCase(scenarioSolref, searchCaseType);
  I.consentedNextStep('Approve Application');
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Approve Application');
  await TabsPage.validateTabs(searchCaseType);


});



Scenario('Verify Consented PBA Court Admin upload Consent order Scenario and all Universal events', async (I, TabsPage)  => {

  const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getConsentedScenarioState('Consent Order Approved', scenarioSolref);

  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  // I.wait(10);
  I.searchCase(scenarioSolref, searchCaseType);
  I.consentedNextStep('Upload Consent Order');
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Upload Consent Order');
  // I.wait(5);
  I.consentedNextStep('Amend Case');
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Amend Case');
  // I.wait(5);
  I.consentedNextStep('Amended Consent Order');
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Amended Consent Order');
  // I.wait(5);
  I.consentedNextStep('Update contact details');
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Update contact details');
  // I.wait(5);
  I.consentedNextStep('Update Due Date');
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Update Due Date');
  // I.wait(5);
  I.consentedNextStep('Upload document');
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Upload document');
  // I.wait(5);
  I.consentedNextStep('Refund');
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Refund');
  // I.wait(5);
  I.consentedNextStep('Close Case');
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Close Case');
  await TabsPage.validateTabs(searchCaseType);

  // I.wait(2);


});