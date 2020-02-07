var { getConsentedScenarioState } = require('../dataSetup/scenarios/scenarioState');
var caseType = 'consented';

Feature('finrem consented e2e HWF Journey');
const testConfig = require('test/config.js');
const dateUtil = require('test/end2end/helpers/dateUtil.js');


const solRef = 'AUTO-'+dateUtil.createSolicitorReference();
// const solRef = '1565167881575';
const pbaValue = false;

const searchCaseType = 'Financial Remedy Consented';

Scenario('Verify Consented HWF Solicitors Happypath Scenario', async (I, TabsPage) =>   {
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
  I.consentedAuthorisation();
  I.paymentPage(pbaValue);
  I.hwfPaymentDetails();
  I.paymentSubmission();
  I.informationPage();
  I.finalPaymentSubmissionPage();
  I.finalInformationPage();
  I.see('Case Submission');
  await TabsPage.validateTabs(caseType);
});


Scenario('Verify Consented HWF Court Admin update case Scenario', async(I, TabsPage) => {
  const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getConsentedScenarioState('Awaiting HWF Decision', scenarioSolref);

  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);


  I.searchCase(scenarioSolref, searchCaseType);
  I.addNote();
  // I.wait(10);
  if(pbaValue===true) {
    I.pbaUpdateCase() ;
  }else {
    I.hwfUpdateCase();
  }
  //pause ();
  await TabsPage.validateTabs(caseType);

});



Scenario('Verify Consented Manual Payment', async (I, TabsPage) => {

  const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getConsentedScenarioState('Application Drafted', scenarioSolref);

  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);

  I.searchCase(scenarioSolref, searchCaseType);
  I.consentedNextStep('Manual Payment');
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Manual Payment');

  await TabsPage.validateTabs(caseType);

});


Scenario('Verify Consented HWF Court judge application not approved case', async (I, TabsPage)  => {

  const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getConsentedScenarioState('Awaiting Judicial Response', scenarioSolref);

  I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);

  // I.wait(10);
  I.searchCase(scenarioSolref, searchCaseType);
  I.consentedNextStep('Application Not Approved');
  // I.applicationNotApproved();
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Application Not Approved');
  await TabsPage.validateTabs(caseType);

});



Scenario('Verify Consented HWF Court Send Order (Consent order Not Approved)', async (I, TabsPage)  => {

  const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getConsentedScenarioState('Consent Order Not Approved', scenarioSolref);


  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);

  I.searchCase(scenarioSolref, searchCaseType);
  I.consentedNextStep('Send Order');
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Send Order');
  await TabsPage.validateTabs(caseType);

});


Scenario('Verify Consented HWF Court Send Order (Consent order Approved)', async (I, TabsPage) => {

  const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getConsentedScenarioState('Consent Order Approved', scenarioSolref);


  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);

  I.searchCase(scenarioSolref, searchCaseType);
  I.consentedNextStep('Send Order');
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Send Order');
  await TabsPage.validateTabs(caseType);

});



Scenario('Verify Consented HWF Solicitors Respond to order Scenario ', async (I, TabsPage)  => {

  const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getConsentedScenarioState('Awaiting Response', scenarioSolref);


  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);

  // I.wait(10);
  I.searchCase(scenarioSolref, searchCaseType);
  I.consentedNextStep('Respond To Order');
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Respond To Order');
  await TabsPage.validateTabs(caseType);

});



Scenario('Verify Consented HWF Court Admin Assign to Judge Scenario for Response Received', async (I, TabsPage)  => {

  const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getConsentedScenarioState('Response Received', scenarioSolref);


  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);

  // I.wait(10);
  I.searchCase(scenarioSolref, searchCaseType);
  I.consentedNextStep('Assign To Judge');

  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Assign To Judge');
  await TabsPage.validateTabs(caseType);

});



Scenario('Verify Consented HWF Court judge approve case', async (I, TabsPage)  => {

  const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getConsentedScenarioState('Awaiting Judicial Response', scenarioSolref);


  I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);

  I.searchCase(scenarioSolref, searchCaseType);
  I.consentedNextStep('Approve Application');
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Approve Application');
  await TabsPage.validateTabs(caseType);

});



Scenario('Verify Consented HWF Court Admin upload Consent order Scenario and all Universal events', async (I, TabsPage)  => {
  const scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  await getConsentedScenarioState('Consent Order Approved', scenarioSolref);


  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);

  // I.wait(10);
  I.searchCase(scenarioSolref, searchCaseType);
  I.consentedNextStep('Upload Consent Order');
  // I.uploadConsentOrder();

  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Upload Consent Order');

  I.consentedNextStep('Amend Case');
  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Amend Case');

  // I.amendedConsentOrder();
  I.consentedNextStep('Amended Consent Order');

  I.waitForPage('.EventLogTable h2', 'History');
  I.see('Amended Consent Order');
  I.wait(5);
  // pause ();
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
  // I.wait(2);
  await TabsPage.validateTabs(caseType);


});