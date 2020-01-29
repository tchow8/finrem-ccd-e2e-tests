
function otherDocuments() {
  const I = this;

  I.waitForPage('#otherCollection');
  I.click('Add new');
  I.wait(1);
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  I.selectOption('select[id="otherCollection_0_typeOfDocument"]', 'Notice of acting');
  I.waitForContinueButtonEnabled();
  I.click('body');
  I.click('button[type="submit"]');

}

module.exports = { otherDocuments };