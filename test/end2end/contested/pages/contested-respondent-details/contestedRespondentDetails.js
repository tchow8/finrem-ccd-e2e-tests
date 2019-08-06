// const testConfig = require('test/config.js');

function contestedRespondentDetails() {
  const I = this;
  I.wait(5);
  I.fillField('input[id="respondentFMName"]', 'Mary');
  I.fillField('input[id="respondentLName"]', 'Whisper');
  I.wait(5);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(10);
  I.checkOption('input[id="respondentRepresented-Yes"]');
  I.wait(5);
  I.fillField('input[id="rSolicitorName"]', 'MahSol');
  I.fillField('input[id="rSolicitorFirm"]', 'MahFirm');
  I.fillField('input[id="rSolicitorReference"]', 'MahSol73');
  I.fillField('input[id="postcodeInput"]', 'TW3 1SS');
  I.click('Find address');
  I.wait(5);
  I.selectOption('select[id="addressList"]', '75 Pears Road, Hounslow');
  I.wait(5);
  I.fillField('input[id="rSolicitorAddress_AddressLine2"]', 'Flat2');
  I.fillField('input[id="rSolicitorAddress_AddressLine3"]', 'Ring Road');
  I.fillField('input[id="rSolicitorAddress_County"]', 'Essex');
  I.fillField('input[id="rSolicitorPhone"]', '07889009908');
  I.fillField('input[id="rSolicitorEmail"]', 'mary@mailinator.com');
  I.fillField('input[id="rSolicitorDXnumber"]', '378890');
  I.wait(5);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(5);
}

module.exports = { contestedRespondentDetails };
