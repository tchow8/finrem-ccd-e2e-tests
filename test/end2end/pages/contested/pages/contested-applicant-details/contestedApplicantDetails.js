// const testConfig = require('test/config.js');

function contestedApplicantDetails1() {
  const I = this;
  I.waitForPage('#applicantDetailsLabel h2', 'Applicant’s Details');
  I.fillField('input[id="applicantFMName"]', 'Chris');
  I.fillField('input[id="applicantLName"]', 'Evans');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
}

module.exports = { contestedApplicantDetails1 };
