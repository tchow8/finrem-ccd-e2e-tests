// const testConfig = require('test/config.js');

function orderForChildren() {
  const I = this;
  I.wait(5);
  I.checkOption('input[id="orderForChildrenQuestion1-Yes"]');
  I.wait(2);
  I.checkOption('input[id="natureOfApplication5-No"]');
  I.wait(2);
  I.checkOption('input[id="natureOfApplication6-Step Child or Step Children"]');
  I.checkOption('input[id="natureOfApplication6-In addition to child support"]');
  I.checkOption('input[id="natureOfApplication6-disability expenses"]');
  I.checkOption('input[id="natureOfApplication6-training"]');
  I.checkOption('input[id="natureOfApplication6-When not habitually resident"]');
  I.checkOption('input[id="natureOfApplication6-Other"]');
  I.wait(2);
  I.fillField('#natureOfApplication7', 'Other Test');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
}

module.exports = { orderForChildren };
