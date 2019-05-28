
function contestedSolicitorCreate(reference) {
  const I = this;
  I.wait(10);
  I.fillField('input[id="applicantSolicitorName"]', 'Parrot');
  I.fillField('input[id="applicantSolicitorFirm"]', 'MSN Firm');
  I.fillField('input[id="solicitorReference"]', 'AUTO-'+reference);
  I.fillField('input[id="postcodeInput"]', 'TW3 1SS');
  I.wait(10);
  I.click('"Find address"');
  I.wait(10);
  I.selectOption('select[id="addressList"]', '67 Pears Road, Hounslow');
  I.fillField('input[id="applicantSolicitorAddress__AddressLine2"]', 'Near Roundabout');
  I.fillField('input[id="applicantSolicitorAddress__AddressLine3"]', 'Opposite Tesco');
  I.fillField('input[id="applicantSolicitorAddress__County"]', 'Middlesex');
  I.fillField('input[id="applicantSolicitorPhone"]', '07766120098');
  I.fillField('input[id="applicantSolicitorEmail"]', 'mahesh.goduguchinta@hmcts.net');
  I.fillField('input[id="applicantSolicitorDXnumber"]', '776890');
  I.checkOption('input[id="applicantSolicitorConsentForEmails-Yes"]');
  I.wait(5);
  I.click('Continue');
  I.wait(10);
}


module.exports = { contestedSolicitorCreate };
