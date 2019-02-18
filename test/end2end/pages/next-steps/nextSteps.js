// const testConfig = require('test/config.js');

function searchCase(reference) {
  const I = this;
  I.wait(5);
  I.fillField('input[id="solicitorReference"]', 'AUTO-'+reference);
  I.wait(5);
  I.click('Apply');
  I.wait(5);
  I.click('a div.text-16');
  I.wait(5);

}

function optionsPage(){
  const I = this;
  I.wait(5);
  I.selectOption('select.form-control.ccd-dropdown.EventTrigger-empty.ng-untouched.ng-pristine.ng-invalid', 'Application Payment Submission');
  I.wait(5);
  I.click('Go');
}

function updateCase() {
  const I = this;
  I.selectOption('select.form-control.ccd-dropdown.EventTrigger-empty.ng-untouched.ng-pristine.ng-invalid', 'HWF Payment');
  I.wait(5);
  I.click('Go');
  I.wait(5);
  I.click('Submit');
  I.wait(5);
  I.selectOption('select.form-control.ccd-dropdown.EventTrigger-empty.ng-untouched.ng-pristine.ng-invalid', 'Awaiting Payment Response');
  I.wait(5);
  I.click('Go');
  I.wait(5);
  I.click('Submit');
  I.wait(5);
  I.selectOption('select.form-control.ccd-dropdown.EventTrigger-empty.ng-untouched.ng-pristine.ng-invalid', 'HWF Application Accepted');
  I.wait(5);
  I.click('Go');
  I.wait(5);
  I.click('Submit');
  I.wait(8);
  I.selectOption('select.form-control.ccd-dropdown.EventTrigger-empty.ng-untouched.ng-pristine.ng-invalid', 'Issue Application');
  I.wait(5);
  I.click('Go');
  I.wait(5);
  I.fillField('input[id="issueDate-day"]', '1');
  I.fillField('input[id="issueDate-month"]', '2');
  I.fillField('input[id="issueDate-year"]', '2000');
  I.click('Continue');
  I.wait(5);
  I.click('Submit');
  I.wait(5);
  I.selectOption('select.form-control.ccd-dropdown.EventTrigger-empty.ng-untouched.ng-pristine.ng-invalid', 'Assign To Judge');
  I.wait(5);
  I.click('Go');
  I.wait(5);
  I.selectOption('select[id="assignedToJudgeReason"]', 'Draft consent order');
  I.wait(5);
  I.selectOption('select[id="assignedToJudge"]', 'nasim_fr_judge@mailinator.com');
  I.wait(5);
  I.fillField('input[id="referToJudgeDate-day"]', '1');
  I.fillField('input[id="referToJudgeDate-month"]', '2');
  I.fillField('input[id="referToJudgeDate-year"]', '2018');
  I.wait(5);
  I.fillField('input[id="referToJudgeText"]', 'Please look into this case on urgent basis ');
  I.click('Continue');
  I.wait(5);
  I.click('Submit');

}

function approveApplication() {
  const I = this;
  I.wait(2);
  I.selectOption('select.form-control.ccd-dropdown.EventTrigger-empty.ng-untouched.ng-pristine.ng-invalid', 'Approve Application');
  I.wait(2);
  I.click('Go');
  I.wait(5);
  I.selectOption('select[id=orderDirection]', 'Consent Order Accepted as drafted');
  I.wait(2);
  I.checkOption('input[id="orderDirectionAbsolute-No"]');
  I.wait(2);
  I.selectOption('select[id=orderDirectionJudge]', 'District Judge');
  I.wait(1);
  I.fillField('textarea[id="orderDirectionJudgeName"]', 'vivred test ');
  I.wait(1);
  I.fillField('input[id="orderDirectionDate-day"]', '1');
  I.fillField('input[id="orderDirectionDate-month"]', '2');
  I.fillField('input[id="orderDirectionDate-year"]', '2010');
  I.wait(1);
  I.click('Continue');
  I.wait(2);
  I.click('Submit');
  I.wait(2);
}


module.exports = { searchCase, updateCase, approveApplication, optionsPage};
