
Feature('Test');
const testConfig = require('test/config.js');
const dateUtil = require('test/end2end/helpers/dateUtil.js');
const solRef = dateUtil.createSolicitorReference();
const pbaValue = true;


Scenario('Verify Court judge application not approved case2', I => {
    I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
    I.wait(10);
    I.searchCase('gg34');
    I.applicationNotApproved();
    I.see('Application Not Approved');
    I.judgeTabs();

});
