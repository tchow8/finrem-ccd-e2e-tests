// const testConfig = require('test/config.js');

function optionalDocuments() {
  const I = this;

  I.waitForPage('h4', 'PENSION DOCUMENTS');
  I.click('Add new', {css: '#pensionCollection>div>button'});
  I.wait(2);
  I.selectOption('select[id=pensionCollection_0_typeOfDocument]', 'Form P1');
  I.attachFile('input[type="file"]', 'data/dummy.pdf');
  I.wait(5);
  I.click('button[type = "submit"]') ;

}

module.exports = { optionalDocuments };
