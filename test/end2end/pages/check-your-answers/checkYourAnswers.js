// const testConfig = require('test/config.js');

function checkYourAnswers() {
  const I = this;
  I.wait(2);
  I.see('SOLICITOR DETAILS');
  I.see('APPLICANT’S DETAILS');
  I.see('RESPONDENT DETAILS');
  I.wait(2);
  I.click('Submit');
  I.wait(10);
}

module.exports = { checkYourAnswers };
