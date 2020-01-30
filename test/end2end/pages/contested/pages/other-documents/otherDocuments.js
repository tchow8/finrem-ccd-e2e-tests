const journeyType = process.env.JOURNEYTYPE ;

function otherDocuments() {
  const I = this;
  if(journeyType==='consented') {
    I.waitForPage('#otherCollection');
    I.click('Add new');
    I.wait(1);
    I.attachFile('input[type="file"]', 'data/fileupload.txt');
    I.selectOption('select[id="otherCollection_0_typeOfDocument"]', 'Notice of acting');

  }
  if(journeyType === 'contested') {
    I.waitForPage('#promptForAnyDocumentLabel');
    I.wait(1);
    I.checkOption('input[id="promptForAnyDocument-Yes"]');
    I.click('Add new');
    I.wait(1);
    I.attachFile('input[type="file"]', 'data/fileupload.txt');
    I.selectOption('select[id="uploadAdditionalDocument_0_additionalDocumentType"]', 'Notice of acting');
    I.waitForContinueButtonEnabled();
    I.click('button[type="submit"]');
    I.waitForPage('#beforeSavePreConfirmation');
  }

  I.waitForContinueButtonEnabled();
  I.click('body');
  I.click('button[type="submit"]');

}

module.exports = { otherDocuments };