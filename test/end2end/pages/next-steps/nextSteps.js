// const testConfig = require('test/config.js');

function searchCase(reference) {
  const I = this;
  I.wait(2);
  I.fillField('input[id="solicitorReference"]', 'AUTO-'+reference);
  I.wait(3);
  I.click('Apply');
}

function consentOrderApproved() {
  const I = this;
}

module.exports = { searchCase, consentOrderApproved };
