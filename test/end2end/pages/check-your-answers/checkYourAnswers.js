// const testConfig = require('test/config.js');

function checkYourAnswers() {
  const I = this;
  I.wait(2);
  I.see('Solicitor Details');
  I.see('Applicant Details');
  I.see('div');
  I.see('Respondent Detail');
  I.see('resp')
  I.wait(2);
  I.click('Submit');
  I.wait(10);
}

module.exports = { checkYourAnswers };
