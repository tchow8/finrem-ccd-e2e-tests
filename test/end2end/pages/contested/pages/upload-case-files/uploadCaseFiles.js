function uploadCaseFiles(){
  const I = this;
;
  I.waitForPage('.tabs-list');
  I.waitForPage('select[id="next-step"]');
  I.selectOption('select[id="next-step"]', 'Upload Case Files');
  I.click('Go');

  I.click('Add new');
  I.waitForPage('input[type="file"]');
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  
  I.selectOption('select[id=uploadCaseDocument_0_caseDocumentType]', 'Letter from Applicant');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('.check-your-answers');
  I.click('Submit');

  I.waitForPage('.tabs-list');
  I.see('Upload Case Files');
  I.selectOption('select[id="next-step"]', 'Submit Uploaded Case Files');
  I.click('Go');

  I.waitForPage('h1','Submit Uploaded Case Files');
  I.click('Submit');

  I.waitForPage('.tabs-list');
  I.see('Submit Uploaded Case Files');

}


module.exports = { uploadCaseFiles };