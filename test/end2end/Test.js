Feature('Test Sign using Vault ');
const testConfig = require('test/config.js');
const dateUtil = require('test/end2end/helpers/dateUtil.js');
const solRef = dateUtil.createSolicitorReference();
const pbaValue = false;

Scenario('Verify Solicitors Login Scenario1', I => {
  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  console.log('Sol User name is ' + testConfig.TestSolicitorUserName);
  console.log('Sol Password is ' + testConfig.TestSolicitorPassword);
  });

Scenario('Verify CaseWorker Login Scenario1', I => {
  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  console.log('caseworker User name is ' + testConfig.TestCaseWorkerUserName);
  console.log('caseworker Password is ' + testConfig.TestCaseWorkerPassword);
 });

Scenario('Verify Judge Login Scenario1', I => {
  I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
  console.log('Judge User name is ' + testConfig.TestJudgeUserName);
  console.log('Judge Password is ' + testConfig.TestJudgePassword);
 });
