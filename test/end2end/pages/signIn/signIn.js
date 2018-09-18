const testConfig = require('test/config.js');

function signinIdam(username, password) {
  const I = this;
  I.amOnPage(testConfig.TestFrontendUrl);
  I.wait(5);
  I.waitForText('Email address');
  I.fillField('username', username);
  I.fillField('password', password);
  I.click('Sign in');
  I.wait(10);
}

module.exports = { signinIdam };
