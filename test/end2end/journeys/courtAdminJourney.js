Feature('finrem court admin e2e journeys');
const testConfig = require('test/config.js');

xScenario('Verify Court Admin update case Scenario', I => {
  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.updateCase();
  I.updateSolAddress();
  I.see('Update Order Application');
  I.see('Financial Remedy COURT ADMIN');
  I.click('Solicitor');
  I.see('103 PF');
});
