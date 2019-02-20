// const testConfig = require('test/config.js');

function orderForChildren() {
  const I = this;
  I.wait(5);
  I.checkOption('input[id="orderForChildrenQuestion1-No"]');
  I.wait(2);
  I.click('Continue');
  I.wait(5);
}

module.exports = { orderForChildren };
