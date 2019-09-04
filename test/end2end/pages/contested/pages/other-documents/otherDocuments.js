
function otherDocuments() {
  const I = this;

  I.waitForPage('#promptForAnyDocument');
  I.checkOption('input[id="promptForAnyDocument-Yes"]');
  I.click('Add new');
  I.wait(1);
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  I.selectOption('select[id=uploadAdditionalDocument_0_additionalDocumentType]', 'noticeOfActing');
  I.waitForContinueButtonEnabled();
  I.click('body');
  I.click('button[type="submit"]');

  I.waitForPage('#beforeSavePreConfirmation');
  I.waitForContinueButtonEnabled();
  // I.click('body');
  // I.click('Continue') ;
  I.click('button[type="submit"]');


}

module.exports = { otherDocuments };