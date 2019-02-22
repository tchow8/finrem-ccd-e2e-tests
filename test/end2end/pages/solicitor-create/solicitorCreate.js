
function solicitorCreate(reference) {
  const I = this;
  I.wait(5);
  I.fillField('input[id="solicitorName"]', 'Arrow');
  I.fillField('input[id="solicitorFirm"]', 'Abc Firm');
  I.fillField('input[id="solicitorReference"]', 'AUTO-'+reference);
  I.fillField('input[id="postcodeInput"]', 'TW3 1SS');
  I.click('Find address');
  I.wait(1);
  I.selectOption('select[id="addressList"]', '67 Pears Road, Hounslow');
  I.fillField('input[id="solicitorEmail"]', 'mahesh.goduguchinta@hmcts.net');
  I.checkOption('input[id="solicitorAgreeToReceiveEmails-Yes"]');
  I.wait(2);
  I.click('Continue');
  I.wait(10);
}

function updateSolAddress() {
  const I = this;
  I.wait(2);
  I.fillField('input[id="solicitorAddress1"]', '103 PF');
  I.fillField('input[id="solicitorAddress4"]', 'stjamespark');
  I.click('Continue');
  I.wait(1);
  I.fillField('input[id="field-trigger-summary"]', 'updated Address');
  I.wait(1);
  I.click('Submit');
  I.wait(3);
}

module.exports = { solicitorCreate, updateSolAddress };
