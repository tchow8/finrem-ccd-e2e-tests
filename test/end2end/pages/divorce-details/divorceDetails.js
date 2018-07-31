// const testConfig = require('test/config.js');

function divorceDetails() {
  const I = this;
  I.wait(2);
  I.fillField('input[id="divorceCaseNumber"]', 'LV18D81234');
  I.selectOption('select[id="divorceStageReached"]', 'Decree Nisi');
  I.wait(2);
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  I.wait(5);
  I.click('Continue');
}

module.exports = { divorceDetails };
