// const testConfig = require('test/config.js');

function authorisation() {
  const I = this;
  I.wait(2);
  I.fillField('input[id="authorisationName"]', 'Vivek');
  I.fillField('input[id="authorisationFirm"]', 'Abc Org');
  I.fillField('input[id="authorisation2b"]', 'Sol Org reb');
  I.fillField('input[id="authorisation3-day"]', '1');
  I.fillField('input[id="authorisation3-month"]', '1');
  I.fillField('input[id="authorisation3-year"]', '1981');
  I.click('Continue');
}

module.exports = { authorisation };
