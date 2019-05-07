// const testConfig = require('test/config.js');

function contestedCYA() {
  const I = this;
  I.wait(5);
  I.see('Solicitor Details');
  I.see('Divorce Details');
  I.see('Applicant’s Details');
  I.see('Respondent’s Details');
  I.see('Is the respondent represented ?');
  I.see('Do you want to add additional property ?');
  I.see('Do you want to upload any other documents ?');
  I.wait(10);
  I.click('Submit');
  I.wait(10);
}

module.exports = { contestedCYA };
