Feature('finrem judge e2e journeys');
const testConfig = require('test/config.js');

xScenario('Verify Court judge approve case', I => {
  I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
  I.consentOrderApproved();
  I.updateSolAddress();
  I.see('Update Order Application');
  I.see('Financial Remedy COURT ADMIN');
  I.click('Solicitor');
  I.see('103 PF');
});
