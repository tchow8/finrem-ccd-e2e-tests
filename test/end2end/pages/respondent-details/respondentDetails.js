// const testConfig = require('test/config.js');

function respondentDetails() {
  const I = this;
  I.wait(2);
  I.fillField('input[id="appRespondentFMName"]', 'viv');
  I.fillField('input[id="appRespondentLName"]', 'resp');
  I.checkOption('input[id="appRespondentRep-Yes"]');
  I.wait(2);
  I.fillField('input[id="rSolicitorName"]', 'MahSol');
  I.fillField('input[id="rSolicitorFirm"]', 'MahFirm');
  I.fillField('input[id="postcodeInput"]', 'TW3 1SS');
  I.click('Find address');
  I.wait(2);
  I.selectOption('select[id="addressList"]', '75 Pears Road, Hounslow');
  I.wait(1);
  I.fillField('input[id="respondentEmail"]', 'vivrepondent@mailinator.com');
  I.wait(2);
  I.click('Continue');
  I.wait(5);
}

module.exports = { respondentDetails };
