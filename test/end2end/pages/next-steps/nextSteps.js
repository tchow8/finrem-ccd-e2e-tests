// const testConfig = require('test/config.js');

function searchCase(reference) {
  const I = this;
  I.wait(5);
  I.selectOption('select[id="wb-case-type"]', 'Financial Remedy Consented');
  I.wait(5);
  I.selectOption('select[id="wb-case-state"]', 'Any');
  I.wait(5);
  I.fillField('input[id="solicitorReference"]', 'AUTO-'+reference);
  I.wait(5);
  I.click('Apply');
  I.wait(50);
  I.click({ xpath: '//*[@id="search-result"]/ccd-search-result/table/tbody/tr/td[1]/a/ccd-field-read/ccd-field-read-label/ccd-read-number-field' });
  I.wait(10);

}

function optionsPage(){
  const I = this;
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Application Payment Submission');
  I.wait(5);
  I.click('Go');
  I.wait(5);
}

function updateCase() {
  const I = this;
  I.wait(5);
  I.selectOption('select.form-control.ccd-dropdown.EventTrigger-empty.ng-untouched.ng-pristine.ng-invalid', 'Issue Application');
  I.wait(5);
  I.click('Go');
  I.wait(5);
  I.fillField('input[id="issueDate-day"]', '1');
  I.fillField('input[id="issueDate-month"]', '2');
  I.fillField('input[id="issueDate-year"]', '2000');
  I.click('Continue');
  I.wait(10);
  I.click('Submit');
  I.wait(10);
  I.selectOption('select.form-control.ccd-dropdown.EventTrigger-empty.ng-untouched.ng-pristine.ng-invalid', 'Assign To Judge');
  I.wait(10);
  I.click('Go');
  I.wait(10);
  I.selectOption('select[id="assignedToJudgeReason"]', 'Draft consent order');
  I.wait(10);
  I.selectOption('select[id="assignedToJudge"]', 'nasim_fr_judge@mailinator.com');
  I.wait(10);
  I.fillField('input[id="referToJudgeDate-day"]', '1');
  I.fillField('input[id="referToJudgeDate-month"]', '2');
  I.fillField('input[id="referToJudgeDate-year"]', '2018');
  I.wait(10);
  I.fillField('input[id="referToJudgeText"]', 'Please look into this case on urgent basis ');
  I.click('Continue');
  I.wait(10);
  I.click('Submit');
  I.wait(10);

}

function approveApplication() {
  const I = this;
  I.wait(10);
  I.selectOption('select.form-control.ccd-dropdown.EventTrigger-empty.ng-untouched.ng-pristine.ng-invalid', 'Approve Application');
  I.wait(5);
  I.click('Go');
  I.wait(5);
  I.selectOption('select[id=orderDirection]', 'Consent Order Accepted as drafted');
  I.wait(5);
  I.checkOption('input[id="orderDirectionAbsolute-No"]');
  I.wait(5);
  I.selectOption('select[id=orderDirectionJudge]', 'District Judge');
  I.wait(5);
  I.fillField('textarea[id="orderDirectionJudgeName"]', 'vivred test ');
  I.wait(5);
  I.fillField('input[id="orderDirectionDate-day"]', '1');
  I.fillField('input[id="orderDirectionDate-month"]', '2');
  I.fillField('input[id="orderDirectionDate-year"]', '2010');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.click('Submit');
  I.wait(5);
}


module.exports = { searchCase, updateCase, approveApplication, optionsPage};
