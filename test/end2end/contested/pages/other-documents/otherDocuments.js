
function otherDocuments() {
  const I = this;
  I.wait(5);
  I.checkOption('input[id="promptForAnyDocument-Yes"]');
  I.wait(3);
  I.click('Add new');
  I.wait(5);
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  I.wait(10);
  I.selectOption('select[id=uploadAdditionalDocument_0_additionalDocumentType]', 'noticeOfActing');
  I.wait(10);
  I.click('Continue');
  I.wait(5);
  I.click('Continue');
  I.wait(5);

}

module.exports = { otherDocuments };