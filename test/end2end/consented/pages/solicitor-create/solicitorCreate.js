
function solicitorCreate(reference) {
  const I = this;
  I.wait(10);
  I.fillField('input[id="solicitorName"]', 'Arrow');
  I.fillField('input[id="solicitorFirm"]', 'Abc Firm');
  I.fillField('input[id="solicitorReference"]', 'AUTO-'+reference);
  I.fillField('input[id="postcodeInput"]', 'TW3 1SS');
  I.click('Find address');
  I.wait(5);
  I.selectOption('select[id="addressList"]', '67 Pears Road, Hounslow');
  I.fillField('input[id="solicitorAddress__AddressLine2"]', 'Near Roundabout');
  I.fillField('input[id="solicitorAddress__AddressLine3"]', 'Opposite Tesco');
  I.fillField('input[id="solicitorAddress__County"]', 'Middlesex');
  I.fillField('input[id="solicitorPhone"]', '07766120098');
  I.fillField('input[id="solicitorEmail"]', 'mahesh.goduguchinta@hmcts.net');
  I.fillField('input[id="solicitorDXnumber"]', '776890');
  I.checkOption('input[id="solicitorAgreeToReceiveEmails-Yes"]');
  I.wait(5);
  I.click('Continue');
  I.wait(10);
}


module.exports = { solicitorCreate };
