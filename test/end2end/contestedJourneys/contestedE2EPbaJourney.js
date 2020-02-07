var { getContestedScenarioState } = require('../dataSetup/scenarios/scenarioState');


Feature('finrem contested e2e PBA Journey');
const testConfig = require('test/config.js');
const dateUtil = require('test/end2end/helpers/dateUtil.js');
const solRef = 'AUTO-'+dateUtil.createSolicitorReference();
const pbaValue = true;
const searchCaseType = 'Contested Financial Remedy';
const journeyType='contested';


Scenario('Verify Contested PBA Solicitors Happypath Scenario', async (I, TabsPage) => {
  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.createCase('FinancialRemedyContested', 'Form A Application');
  I.contestedSolicitorCreate(solRef);
  I.contestedDivorceDetails();
  I.contestedApplicantDetails();
  I.contestedRespondentDetails();
  I.contestedNatureOfApplication();
  I.childrenQuestion();
  I.fastTrack();
  I.complexityListQuestion();
  I.applyingToCourt();
  // I.chooseCourt();
  I.mediationQuestion();
  I.mediationExemptions();
  I.mediationDomesticVoilence();
  I.mediationUrgency();
  I.mediationAttendance();
  I.mediationOther();
  I.otherDocuments();
  I.contestedCYA();
  I.see('Form A Application');
  //I.draftValidateTabs();
  I.contestedOptionsPage();
  I.contestedAuthorisation();
  I.contestedPayment(pbaValue);
  I.contestedPbaPayment();
  I.contestedPaymentSubmission();
  I.contestedInformationPage();
  I.contestedFinalPaymentPage();
  I.contestedFinalInformation();
  I.see('Case Submission');
  await TabsPage.validateTabs(journeyType);
});


Scenario('Verify Contested PBA Court Admin update case Scenario', async (I, TabsPage) => {

  const scenarioSolRef = 'AUTO-' + dateUtil.createSolicitorReference();
  await getContestedScenarioState('Application Drafted', scenarioSolRef);


  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.searchCase(scenarioSolRef, searchCaseType);
  if (pbaValue === true) {
    I.contestedNextStep('Case Submission|PBA');
  } else {
    I.contestedNextStep('Case Submission|HWF');
  }
  await TabsPage.validateTabs(journeyType);

});


Scenario('Verify Contested PBA Court judge application for Scheduling and Listing case', async (I, TabsPage) => {

  const scenarioSolRef = 'AUTO-' + dateUtil.createSolicitorReference();
  await getContestedScenarioState('Gate Keeping & Allocation', scenarioSolRef);

  I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
  I.searchCase(scenarioSolRef, searchCaseType);
  I.contestedNextStep('Give Allocation Directions');
  await TabsPage.validateTabs(journeyType);

});



Scenario('Verify Contested PBA Court Admin Scheduling and Hearing Scenario', async (I, TabsPage) => {
  const scenarioSolRef = 'AUTO-' + dateUtil.createSolicitorReference();
  await getContestedScenarioState('Scheduling and Hearing', scenarioSolRef);

  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.searchCase(scenarioSolRef, searchCaseType);

  const isFastTrack = await I.grabTextFrom('#tabFastTrackDecision');
  // console.log('Case is Fats Tract : ' + isFastTrack + ' - ');
  I.contestedNextStep('List for Hearing' );
  await TabsPage.validateTabs(journeyType);

});



Scenario('Verify Contested PBA Solicitors upload case files Scenario', async (I, TabsPage) => {

  const scenarioSolRef = 'AUTO-' + dateUtil.createSolicitorReference();
  await getContestedScenarioState('Prepare for Hearing', scenarioSolRef);

  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.searchCase(scenarioSolRef, searchCaseType);
  I.contestedNextStep('Upload Case Files');
  I.contestedNextStep('Submit Uploaded Case Files');
  await TabsPage.validateTabs(journeyType);

});



Scenario('Verify Contested Universal events', async (I, TabsPage) => {

  const scenarioSolRef = 'AUTO-' + dateUtil.createSolicitorReference();
  await getContestedScenarioState('Application Issued', scenarioSolRef);


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

  await TabsPage.validateTabs(journeyType);


});