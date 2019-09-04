function uploadDocument() {

  const I = this;
  // I.wait(10);
  I.waitForPage('.EventLogTable h2', 'History');
  I.selectOption('select[id="next-step"]', 'Upload document');
  I.wait(1);
  I.click('Go');
  // I.wait(10);
  I.waitForElement('#uploadDocuments', 60);  
  I.click('Add new');
  I.wait(2);
  I.selectOption('select[id=uploadDocuments_0_DocumentType]', 'Notice of Acting');
  I.wait(1);
  I.fillField('#uploadDocuments_0_DocumentEmailContent', 'Uploading the document for testing');
  // I.wait(10);
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  I.wait(1);
  I.fillField('input[id="uploadDocuments_0_DocumentDateAdded-day"]', '10');
  I.fillField('input[id="uploadDocuments_0_DocumentDateAdded-month"]', '3');
  I.fillField('input[id="uploadDocuments_0_DocumentDateAdded-year"]', '2019');
  // I.wait(10);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.waitForElement('#field-trigger-summary',30);
  // I.wait(10);
  I.click('Submit');
  // I.wait(10);


}

module.exports = { uploadDocument };