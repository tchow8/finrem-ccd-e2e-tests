function contestedUploadDocument() {

  const I = this;
  I.waitForPage('.tabs-list');
  I.selectOption('select[id="next-step"]', 'Upload document');
  I.click('Go');

  I.waitForPage('#uploadGeneralDocuments');
  I.click('Add new');
  I.selectOption('select[id=uploadGeneralDocuments_0_DocumentType]', 'Letter/Email from Applicant');
  I.fillField('#uploadGeneralDocuments_0_DocumentEmailContent', 'Uploading the document for testing');
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  I.fillField('input[id="uploadGeneralDocuments_0_DocumentDateAdded-day"]', '10');
  I.fillField('input[id="uploadGeneralDocuments_0_DocumentDateAdded-month"]', '3');
  I.fillField('input[id="uploadGeneralDocuments_0_DocumentDateAdded-year"]', '2019');
  I.continueNext();
  I.wait(2);
  I.waitForPage('#field-trigger-summary');
  I.click('Submit');


}

module.exports = { contestedUploadDocument };