const testConfig = require('test/config.js');
function signinIdam(username, password) {
  const I = this;
  I.amOnPage(testConfig.TestFrontendUrl);
  I.wait(5);
  I.waitForElement('input[name="username"]',60);
  I.fillField('username', username);
  I.fillField('password', password);
  I.click('Sign in');
  I.wait(15);
}

module.exports = { signinIdam };
