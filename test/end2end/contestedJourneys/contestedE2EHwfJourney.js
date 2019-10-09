var {getContestedScenarioState} = require('../dataSetup/scenarios/scenarioState');

var caseType = 'contested';

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
  I.applyingToCourt();
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
  TabsPage.validateTabs(caseType);

});

Scenario('Verify Contested HWF Payment', async (I, TabsPage) => {
  const scenarioSolRef = 'AUTO-' + dateUtil.createSolicitorReference();
  await getContestedScenarioState('Application Drafted', scenarioSolRef);

  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.searchCase(scenarioSolRef, searchCaseType);
  I.contestedNextStep('Case Submission|HWF');
  TabsPage.validateTabs(caseType);

});

Scenario('Verify Contested PBA Payment', async (I, TabsPage) => {
  const scenarioSolRef = 'AUTO-' + dateUtil.createSolicitorReference();
  await getContestedScenarioState('Application Drafted', scenarioSolRef);

  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.searchCase(scenarioSolRef, searchCaseType);
  I.contestedNextStep('Case Submission|PBA');
  TabsPage.validateTabs(caseType);

});

Scenario('Verify Contested List for Hearing', async (I, TabsPage) => {
  const scenarioSolRef = 'AUTO-' + dateUtil.createSolicitorReference();
  await getContestedScenarioState('Scheduling and Hearing', scenarioSolRef);

  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.searchCase(scenarioSolRef, searchCaseType);

  I.click('Gatekeeping and allocation');
  const isFastTrack = await I.grabTextFrom('#tabFastTrackDecision');
  console.log('Case is Fats Tract : ' + isFastTrack + ' - '); 
  I.contestedNextStep('List for Hearing|' + isFastTrack.split(':')[1].trim());
  TabsPage.validateTabs(caseType);

});


Scenario('Verify Contested HWF Court Admin update case Scenario', async (I, TabsPage) => {
  const scenarioSolRef = 'AUTO-' + dateUtil.createSolicitorReference();
  await getContestedScenarioState('Application Drafted', scenarioSolRef);

  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.searchCase(scenarioSolRef, searchCaseType);

  I.addNote();
  if(pbaValue===true) {
    I.contestedNextStep('Case Submission|PBA');
  }else {
    I.contestedNextStep('Case Submission|HWF');
  }
  TabsPage.validateTabs(caseType);

});


Scenario('Verify Contested HWF Solicitors upload case files Scenario', async (I, TabsPage) => {
  const scenarioSolRef = 'AUTO-' + dateUtil.createSolicitorReference();
  await getContestedScenarioState('Prepare for Hearing', scenarioSolRef);

  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.searchCase(scenarioSolRef, searchCaseType);
  I.contestedNextStep('Submit Uploaded Case Files');
  TabsPage.validateTabs(caseType);

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