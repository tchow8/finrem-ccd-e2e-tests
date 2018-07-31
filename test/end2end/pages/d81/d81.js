// const testConfig = require('test/config.js');

function d81() {
  const I = this;
  I.wait(2);
  I.checkOption('input[id="d81Question-Yes"]');
  I.wait(1);
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  I.wait(1);
  I.checkOption('input[id="d81Question-No"]');
  I.wait(1);
  I.attachFile('input[id="d81Applicant"]', 'data/fileupload.txt');
  I.attachFile('input[id="d81Respondent"]', 'data/fileupload.txt');
  I.wait(2);
  I.click('Continue');
}

module.exports = { d81 };
