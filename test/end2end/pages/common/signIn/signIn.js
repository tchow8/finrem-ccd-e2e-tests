const testConfig = require('test/config');
async function signinIdam(username, password) {
  const I = this;
  I.amOnPage(testConfig.TestFrontendUrl);
  I.waitForPage('input[name="username"]');
  I.fillField('username', username);
  I.fillField('password', password);
  I.click('Sign in');
  I.wait(15);
}

module.exports = { signinIdam };
