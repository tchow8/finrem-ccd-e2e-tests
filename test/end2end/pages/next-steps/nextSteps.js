// const testConfig = require('test/config.js');

function searchCase(reference) {
  const I = this;
  I.wait(2);
  I.fillField('input[id="solicitorReference"]', 'AUTO-'+reference);
  I.wait(3);
  I.click('Apply');
  I.wait(5);
  I.click('a div.text-16');
  I.wait(3);
}

function updateCase() {
  const I = this;
  I.selectOption('select.form-control.ccd-dropdown.EventTrigger-empty.ng-untouched.ng-pristine.ng-invalid', 'HWF Payment');
  I.wait(2);
  I.click('Go');
  I.wait(2);
  I.click('Submit');
  I.wait(2);
  I.selectOption('select.form-control.ccd-dropdown.EventTrigger-empty.ng-untouched.ng-pristine.ng-invalid', 'Awaiting Payment Response');
  I.wait(2);
  I.click('Go');
  I.wait(2);
  I.click('Submit');
  I.wait(2);
  I.selectOption('select.form-control.ccd-dropdown.EventTrigger-empty.ng-untouched.ng-pristine.ng-invalid', 'HWF Application Accepted');
  I.wait(2);
  I.click('Go');
  I.wait(2);
  I.click('Submit');
  I.wait(2);
  I.selectOption('select.form-control.ccd-dropdown.EventTrigger-empty.ng-untouched.ng-pristine.ng-invalid', 'Issue Application');
  I.wait(2);
  I.click('Go');
  I.wait(2);
  I.fillField('input[id="issueDate-day"]', '1');
  I.fillField('input[id="issueDate-month"]', '2');
  I.fillField('input[id="issueDate-year"]', '2000');
  I.click('Continue');
  I.wait(2);
  I.click('Submit');
  I.wait(2);
  I.selectOption('select.form-control.ccd-dropdown.EventTrigger-empty.ng-untouched.ng-pristine.ng-invalid', 'Refer to Judge');
  I.wait(2);
  I.click('Go');
  I.wait(2);
  I.fillField('input[id="referToJudgeText"]', 'Please look into this case on urgent basis ');
  I.click('Continue');
  I.wait(2);
  I.click('Submit');

}

function consentOrderApproved() {
  const I = this;
}

module.exports = { searchCase, updateCase, consentOrderApproved };
