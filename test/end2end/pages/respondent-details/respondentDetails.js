// const testConfig = require('test/config.js');

function respondentDetails() {
  const I = this;
  I.wait(2);
  I.fillField('input[id="appRespondentFMName"]', 'viv');
  I.fillField('input[id="appRespondentLName"]', 'resp');
  I.checkOption('input[id="appRespondentRep-No"]');
  I.wait(2);
  I.fillField('input[id="respondentAddress1"]', '101 PF');
  I.fillField('input[id="respondentAddress4"]', 'London');
  I.fillField('input[id="respondentAddress5"]', 'SW101AJ');
  I.fillField('input[id="respondentEmail"]', 'vivrepondent@mailinator.com');
  I.wait(2);
  I.click('Continue');
}

module.exports = { respondentDetails };
