function contestedUploadDocument() {

  const I = this;
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Upload document');
  I.wait(5);
  I.click('Go');
  I.wait(10);
  I.click('Add new');
  I.wait(10);
  I.selectOption('select[id=uploadGeneralDocuments_0_DocumentType]', 'Letter/Email from Applicant');
  I.wait(10);
  I.fillField('#uploadGeneralDocuments_0_DocumentEmailContent', 'Uploading the document for testing');
  I.wait(10);
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  I.wait(10);
  I.fillField('input[id="uploadGeneralDocuments_0_DocumentDateAdded-day"]', '10');
  I.fillField('input[id="uploadGeneralDocuments_0_DocumentDateAdded-month"]', '3');
  I.fillField('input[id="uploadGeneralDocuments_0_DocumentDateAdded-year"]', '2019');
  I.wait(5);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(5);
  I.click('Submit');
  I.wait(10);


}

module.exports = { contestedUploadDocument };