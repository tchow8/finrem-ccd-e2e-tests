// const testConfig = require('test/config.js');

function contestedAuthorisation() {
  const I = this;
  
  I.waitForPage('input[id="authorisationName"]');
  I.fillField('input[id="authorisationName"]', 'Vivek');
  I.fillField('input[id="solicitorFirm"]', 'Abc Org');
  I.fillField('input[id="authorisation2b"]', 'Sol Org reb');
  I.fillField('input[id="authorisation3-day"]', '3');
  I.fillField('input[id="authorisation3-month"]', '2');
  I.fillField('input[id="authorisation3-year"]', '2019');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
}

module.exports = { contestedAuthorisation };
