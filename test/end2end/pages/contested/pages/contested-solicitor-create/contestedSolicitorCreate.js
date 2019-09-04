
async function contestedSolicitorCreate(reference) {
  const I = this;
  I.waitForPage('#applicantSolicitorDetailLabel h2','Solicitor Details');
  I.fillField('input[id="applicantSolicitorName"]', 'Parrot');
  I.fillField('input[id="applicantSolicitorFirm"]', 'MSN Firm');
  I.fillField('//*[@id="solicitorReference"]', 'AUTO-'+reference);
  I.fillField('#applicantSolicitorAddress_applicantSolicitorAddress_postcodeInput', 'TW3 1SS');

  I.click('#applicantSolicitorAddress_applicantSolicitorAddress #postcodeLookup button');
  I.waitForElement('#selectAddress', 30);
  I.wait(5);
  I.selectOption('select[id="applicantSolicitorAddress_applicantSolicitorAddress_addressList"]', '67 Pears Road, Hounslow');
  I.fillField('input[id="applicantSolicitorAddress_AddressLine2"]', 'Near Roundabout');
  I.fillField('input[id="applicantSolicitorAddress_AddressLine3"]', 'Opposite Tesco');
  I.fillField('input[id="applicantSolicitorAddress_County"]', 'Middlesex');
  I.fillField('input[id="applicantSolicitorPhone"]', '07766120098');
  I.fillField('input[id="applicantSolicitorEmail"]', 'mahesh.goduguchinta@hmcts.net');
  I.fillField('input[id="applicantSolicitorDXnumber"]', '776890');
  I.checkOption('input[id="applicantSolicitorConsentForEmails-Yes"]');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
}

module.exports = { contestedSolicitorCreate };

