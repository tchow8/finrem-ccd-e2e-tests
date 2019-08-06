function uploadConsentOrder(){
  const I = this;
  // I.wait(10);
  I.waitForPage('.EventLogTable h2', 'History');
  I.selectOption('select[id="next-step"]', 'Upload Consent Order');
  I.wait(1);
  I.click('Go');
  I.wait(10);
  I.waitForElement('//button[@type="button" and text()="Add new"]', 30);
  I.click('Add new');
  I.wait(2);
  I.selectOption('select[id=uploadConsentOrderDocuments_0_DocumentType]', 'consentOrder');
  I.wait(1);
  I.fillField('#uploadConsentOrderDocuments_0_DocumentEmailContent', 'Testing the upload Consent order');
  // I.wait(10);
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  I.wait(1);
  I.fillField('input[id="uploadConsentOrderDocuments_0_DocumentDateAdded-day"]', '15');
  // I.wait(2);
  I.fillField('input[id="uploadConsentOrderDocuments_0_DocumentDateAdded-month"]', '2');
  // I.wait(2);
  I.fillField('input[id="uploadConsentOrderDocuments_0_DocumentDateAdded-year"]', '2019');
  // I.wait(10);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(10);
  I.waitForElement('#field-trigger-summary', 30);
  I.click('Submit');
  // I.wait(10);
}


module.exports = { uploadConsentOrder };