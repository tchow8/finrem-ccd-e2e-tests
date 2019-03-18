// const testConfig = require('test/config.js');

function orderForChildren() {
  const I = this;
  I.wait(5);
  I.checkOption('input[id="orderForChildrenQuestion1-Yes"]');
  I.wait(2);
  I.checkOption('input[id="natureOfApplication5-No"]');
  I.wait(2);
  I.checkOption('input[value="Step Child or Step Children"]');
  I.checkOption('input[value="In addition to child support"]');
  I.checkOption('input[value="disability expenses"]');
  I.checkOption('input[value="training"]');
  I.checkOption('input[value="When not habitually resident"]');
  I.checkOption('input[value="Other"]');
  I.wait(2);
  I.fillField('#natureOfApplication7', 'Other Test');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
}

module.exports = { orderForChildren };
