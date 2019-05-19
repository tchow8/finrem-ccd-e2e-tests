
function miamCertification() {
  const I = this;
  I.wait(5);
  I.fillField('#mediatorRegistrationNumber', '765234');
  I.fillField('#familyMediatorServiceName', 'mediator');
  I.fillField('#soleTraderName', 'trading');
  I.wait(5);
  I.click('Continue');
  I.wait(5);

}

module.exports = { miamCertification };