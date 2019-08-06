// const testConfig = require('test/config.js');

function contestedApplicantDetails() {
  const I = this;
  I.wait(5);
  I.fillField('input[id="applicantFMName"]', 'Chris');
  I.wait(5);
  I.fillField('input[id="applicantLName"]', 'Evans');
  I.wait(10);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(10);
}

module.exports = { contestedApplicantDetails };
