var { getContestedScenarioState } = require('../dataSetup/scenarios/scenarioState');

Feature('finrem contested e2e Journeys');
const testConfig = require('test/config.js');
const dateUtil = require('test/end2end/helpers/dateUtil.js');
const searchCaseType = 'Contested Financial Remedy';
//const journeyType='contested';

var scenarioSolref = '';
Scenario('Verify Contestd E2E Path 1', async (I) => {

  scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  // const scenarioSolref = 'AUTO-1567757724725';

  await getContestedScenarioState('Application Drafted', scenarioSolref);

  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  await I.searchCase(scenarioSolref, searchCaseType);

  asCaseWorker(I);
  await I.contestedNextStep( 'Manual Payment');
  await I.contestedNextStep( 'Issue Application');
  await I.contestedNextStep( 'Allocate to Judge');

  asJudge(I);
  await I.contestedNextStep('Give Allocation Directions');

  asCaseWorker(I);
  var isFastTrack = await I.grabTextFrom('#tabFastTrackDecision');
  console.log('Case is Fats Tract : ' + isFastTrack + ' - ');
  await I.contestedNextStep('List for Hearing|');

  asSolicitor(I);
  await I.contestedNextStep('Submit Uploaded Case Files');

  asJudge(I);
  await I.contestedNextStep('Judge To Draft Order');
  await I.contestedNextStep('Upload Draft Order');

  asCaseWorker(I);
  await I.contestedNextStep('Upload Order');
  await I.contestedNextStep('Send Order');
  await I.contestedNextStep('Close Case');

});


Scenario('Verify Contested E2E Path 2', async (I) => {

  scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  // const scenarioSolref = 'AUTO-1567757724725';

  await getContestedScenarioState('Application Drafted', scenarioSolref);

  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  await I.searchCase(scenarioSolref, searchCaseType);

  asCaseWorker(I);
  await I.contestedNextStep('Manual Payment');
  await I.contestedNextStep('Issue Application');
  await I.contestedNextStep('Allocate to Judge');

  asJudge(I);
  await I.contestedNextStep('Give Allocation Directions');

  asCaseWorker(I);

  await I.contestedNextStep('List for Hearing|' );

  asSolicitor(I);
  await I.contestedNextStep('Submit Uploaded Case Files');

  asJudge(I);
  await I.contestedNextStep('Solicitor To Draft Order');


  asSolicitor(I);
  await I.contestedNextStep('Upload Draft Order');


  asJudge(I);
  await I.contestedNextStep('Draft Order Approved');


  asCaseWorker(I);
  await I.contestedNextStep('Upload Order');
  await I.contestedNextStep('Send Order');
  await I.contestedNextStep('Close Case');

});



Scenario('Verify Contested HWF E2E Path 2', async (I) => {

  scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  // const scenarioSolref = 'AUTO-1567757724725';

  await getContestedScenarioState('Application Drafted', scenarioSolref);

  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  await I.searchCase(scenarioSolref, searchCaseType);
  await I.contestedNextStep('Case Submission|HWF');


  asCaseWorker(I);
  await I.contestedNextStep('HWF Application Accepted');
  await I.contestedNextStep('Issue Application');
  await I.contestedNextStep('Allocate to Judge');

  asJudge(I);
  await I.contestedNextStep('Give Allocation Directions');

  asCaseWorker(I);
  var isFastTrack = await I.grabTextFrom('#tabFastTrackDecision');
  console.log('Case is Fats Tract : ' + isFastTrack + ' - ');
  await I.contestedNextStep('List for Hearing|' );

  asSolicitor(I);
  await I.contestedNextStep('Submit Uploaded Case Files');

  asJudge(I);
  await I.contestedNextStep('Solicitor To Draft Order');


  asSolicitor(I);
  await I.contestedNextStep('Upload Draft Order');


  asJudge(I);
  await I.contestedNextStep('Draft Order Approved');


  asCaseWorker(I);
  await I.contestedNextStep('Upload Order');
  await I.contestedNextStep('Send Order');
  await I.contestedNextStep('Close Case');

});



Scenario('Verify Contested PBA E2E Path 2', async (I) => {

  scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  // const scenarioSolref = 'AUTO-1567757724725';

  await getContestedScenarioState('Application Drafted', scenarioSolref);

  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  await I.searchCase(scenarioSolref, searchCaseType);
  await I.contestedNextStep('Case Submission|PBA');


  asCaseWorker(I);
  I.wait(2);
  await I.contestedNextStep('Issue Application');
  await I.contestedNextStep('Allocate to Judge');

  asJudge(I);
  await I.contestedNextStep('Give Allocation Directions');

  asCaseWorker(I);
  var isFastTrack = await I.grabTextFrom('#tabFastTrackDecision');
 // console.log('Case is Fats Tract : ' + isFastTrack + ' - ');
  await I.contestedNextStep('List for Hearing' );

  asSolicitor(I);
  await I.contestedNextStep('Submit Uploaded Case Files');

  asJudge(I);
  await I.contestedNextStep('Solicitor To Draft Order');


  asSolicitor(I);
  await I.contestedNextStep('Upload Draft Order');


  asJudge(I);
  await I.contestedNextStep('Draft Order Approved');


  asCaseWorker(I);
  await I.contestedNextStep('Upload Order');
  await I.contestedNextStep('Send Order');
  await I.contestedNextStep('Close Case');

});





async function asSolicitor(I){
  I.wait(2);
  I.click('//a[text() = "Sign Out"]');
  I.wait(2);
  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  await I.searchCase(scenarioSolref, searchCaseType);

}

async function asCaseWorker(I) {
  I.wait(2);
  I.click('//a[text() = "Sign Out"]');
  I.wait(2);

  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  await I.searchCase(scenarioSolref, searchCaseType);
}


async function asJudge(I) {
  I.wait(2);
  I.click('//a[text() = "Sign Out"]');
  I.wait(2);
  await I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
  await I.searchCase(scenarioSolref, searchCaseType);
}
