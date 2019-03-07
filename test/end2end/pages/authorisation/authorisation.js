// const testConfig = require('test/config.js');

function authorisation() {
  const I = this;
  I.wait(3);
  I.fillField('input[id="authorisationName"]', 'Vivek');
  I.fillField('input[id="authorisationFirm"]', 'Abc Org');
  I.fillField('input[id="authorisation2b"]', 'Sol Org reb');
  I.fillField('input[id="authorisation3-day"]', '3');
  I.fillField('input[id="authorisation3-month"]', '2');
  I.fillField('input[id="authorisation3-year"]', '2019');
  I.click('Continue');
  I.wait(5);
}

module.exports = { authorisation };
