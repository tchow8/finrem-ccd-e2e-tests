var {getContestedScenarioState} = require('../dataSetup/scenarios/scenarioState');



Feature('finrem contested e2e HWF Journey');
const testConfig = require('test/config.js');
const dateUtil = require('test/end2end/helpers/dateUtil.js');
const solRef = 'AUTO-'+dateUtil.createSolicitorReference();
const pbaValue = false;
const searchCaseType = 'Contested Financial Remedy';

Scenario('Verify Contested HWF Solicitors Happypath Scenario', async (I, TabsPage) => {
  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.createCase('FinancialRemedyContested', 'Form A Application');
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
  //I.draftValidateTabs();
  I.contestedHwfOptionsPage();
  I.contestedAuthorisation();
  I.paymentPage(pbaValue);
  I.hwfPaymentDetails();
  I.paymentSubmission();
  I.informationPage();
  I.finalPaymentSubmissionPage();
  I.finalInformationPage();
  I.see('Case Submission');
  //I.solicitorTabs();
  TabsPage.validateTabs();

});




Scenario('Verify Contested HWF Court Admin update case Scenario', async (I, TabsPage) => {
  const scenarioSolRef = 'AUTO-' + dateUtil.createSolicitorReference();
  await getContestedScenarioState('Awaiting Payment Response', scenarioSolRef);

  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.searchCase(scenarioSolRef, searchCaseType);

  I.addNote();
  if(pbaValue===true) {
    I.contestedPbaCase();
  }else {
    I.contestedHwfCase();
  }
  TabsPage.validateTabs();

});


Scenario('Verify Contested HWF Solicitors upload case files Scenario', async (I, TabsPage) => {
  const scenarioSolRef = 'AUTO-' + dateUtil.createSolicitorReference();
  await getContestedScenarioState('Prepare for Hearing', scenarioSolRef);

  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.searchCase(scenarioSolRef, searchCaseType);
  I.uploadCaseFiles();
  TabsPage.validateTabs();

});


Scenario('Verify Contested HWF Court judge approve case', async (I, TabsPage) => {
  const scenarioSolRef = 'AUTO-' + dateUtil.createSolicitorReference();
  await getContestedScenarioState('Prepare for Hearing', scenarioSolRef);

  I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
  I.searchCase(scenarioSolRef, searchCaseType);
  I.waitForPage('.tabs-list');
  I.see('Submit Uploaded Case Files');
  TabsPage.validateTabs();

});



Scenario('Verify Contested HWF Court Admin upload Consent order Scenario and all Universal events', async (I, TabsPage) => {

  const scenarioSolRef = 'AUTO-' + dateUtil.createSolicitorReference();
  await getContestedScenarioState('Application Submitted', scenarioSolRef);


  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.searchCase(scenarioSolRef, searchCaseType);

  I.contestedAmendCase();

  I.waitForPage('.tabs-list');
  I.see('Amend Case');

  I.contestedUpdateContactDetails();

  I.waitForPage('.tabs-list');
  I.see('Update contact details');
  
  I.contestedUploadDocument();

  I.waitForPage('.tabs-list');
  I.see('Upload document');
  I.contestedRefund();

  I.waitForPage('.tabs-list');
  I.see('Refund');
  I.contestedCloseCase();

  I.waitForPage('.tabs-list');
  I.see('Close Case');
  TabsPage.validateTabs();


});