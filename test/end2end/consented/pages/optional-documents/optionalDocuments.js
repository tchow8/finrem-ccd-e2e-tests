// const testConfig = require('test/config.js');

function optionalDocuments() {
  const I = this;
  I.wait(5);
  I.click('Add new', {css: '#pensionCollection>div>button'});
  I.wait(5);
  I.selectOption('select[id=pensionCollection_0_typeOfDocument]', 'Form P1');
  I.wait(10);
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  I.wait(10);
  I.click('Add new', {css: '#otherCollection>div>button'});
  I.wait(5);
  I.selectOption('select[id=otherCollection_0_typeOfDocument]', 'ScheduleOfAssets');
  I.wait(10);
  I.attachFile('input[id="otherCollection_0_uploadedDocument"]', 'data/fileupload.txt');
  I.wait(10);
  I.click('Continue');
  I.wait(5);
}

module.exports = { optionalDocuments };
