const testConfig = require('test/config.js');

function contestedsigninIdam(username, password) {
  const I = this;
  I.amOnPage(testConfig.TestFrontendUrl);
  I.wait(5);
  I.waitForText('Email address');
  I.fillField('username', username);
  I.fillField('password', password);
  I.click('Sign in');
  I.wait(15);
}

module.exports = { contestedsigninIdam };
