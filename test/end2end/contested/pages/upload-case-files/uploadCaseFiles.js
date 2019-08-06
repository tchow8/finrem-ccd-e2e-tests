function uploadCaseFiles(){
  const I = this;
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Upload Case Files');
  I.wait(10);
  I.click('Go');
  I.wait(10);
  I.click('Add new');
  I.wait(10);
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  I.wait(10);
  I.selectOption('select[id=uploadCaseDocument_0_caseDocumentType]', 'Letter from Applicant');
  I.wait(5);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(5);
  I.click('Submit');
  I.wait(5);
  I.see('Upload Case Files');
  I.wait(5);
  I.selectOption('select[id="next-step"]', 'Submit Uploaded Case Files');
  I.wait(5);
  I.click('Go');
  I.wait(5);
  I.click('Submit');
  I.wait(5);
  I.see('Submit Uploaded Case Files');
  I.wait(5);

}


module.exports = { uploadCaseFiles };