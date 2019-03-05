// const testConfig = require('test/config.js');

function divorceDetails() {
  const I = this;
  I.wait(5);
  I.fillField('input[id="divorceCaseNumber"]', 'LV18D81234');
  I.wait(5);
  I.selectOption('select[id="divorceStageReached"]', 'Decree Nisi');
  I.wait(5);
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  I.wait(5);
  I.fillField('input[id="divorceDecreeNisiDate-day"]', '1');
  I.fillField('input[id="divorceDecreeNisiDate-month"]', '2');
  I.fillField('input[id="divorceDecreeNisiDate-year"]', '2010');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
}

module.exports = { divorceDetails };
