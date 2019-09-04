// const testConfig = require('test/config.js');

function d81() {
  const I = this;
  // I.wait(5);
  // const testConfig = require('test/config.js');

  function divorceDetails() {
    const I = this;
    // I.wait(5);
    I.waitForPage('h4', 'D81');

    I.fillField('input[id="divorceCaseNumber"]', 'LV18D81234');
    // I.wait(5);
    I.selectOption('select[id="divorceStageReached"]', 'Decree Nisi');
    I.wait(1);
    I.attachFile('input[type="file"]', 'data/fileupload.txt');
    I.wait(1);
    I.fillField('input[id="divorceDecreeNisiDate-day"]', '1');
    I.fillField('input[id="divorceDecreeNisiDate-month"]', '2');
    I.fillField('input[id="divorceDecreeNisiDate-year"]', '2019');
    // I.wait(5);
    I.waitForContinueButtonEnabled();
    I.click('Continue') ;
    // I.wait(5);
  }

  module.exports = { divorceDetails };

  I.checkOption('input[id="d81Question-Yes"]');
  // I.wait(5);
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  // I.wait(5);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(5);
}

module.exports = { d81 };
