
async function contestedSolicitorCreate(reference) {
  const I = this;
  I.wait(30);
  I.fillField('input[id="applicantSolicitorName"]', 'Parrot');
  I.fillField('input[id="applicantSolicitorFirm"]', 'MSN Firm');
  I.fillField('//*[@id="solicitorReference"]', 'AUTO-'+reference);
  I.fillField('Enter a UK postcode', 'TW3 1SS');

  pause();

  // eslint-disable-next-line no-undef
  await document.querySelector('').click();
  I.click('Find address');
  I.wait(10);
  I.selectOption('select[id="addressList"]', '67 Pears Road, Hounslow');
  I.fillField('input[id="applicantSolicitorAddress_AddressLine2"]', 'Near Roundabout');
  I.fillField('input[id="applicantSolicitorAddress_AddressLine3"]', 'Opposite Tesco');
  I.fillField('input[id="applicantSolicitorAddress_County"]', 'Middlesex');
  I.fillField('input[id="applicantSolicitorPhone"]', '07766120098');
  I.fillField('input[id="applicantSolicitorEmail"]', 'mahesh.goduguchinta@hmcts.net');
  I.fillField('input[id="applicantSolicitorDXnumber"]', '776890');
  I.checkOption('input[id="applicantSolicitorConsentForEmails-Yes"]');
  I.wait(5);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(10);
}

module.exports = { contestedSolicitorCreate };

