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
  I.wait(20);
  I.click({ xpath: '//*[@id="search-result"]/ccd-search-result/table/tbody/tr/td[1]/a/ccd-field-read/ccd-field-read-label/ccd-read-number-field' });
  I.wait(10);

}


function approveApplication() {
  const I = this;
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Approve Application');
  I.wait(5);
  I.click('Go');
  I.wait(10);
  I.selectOption('select[id=orderDirection]', 'Consent Order Accepted as drafted');
  I.wait(10);
  I.checkOption('input[id="orderDirectionAbsolute-No"]');
  I.wait(10);
  I.selectOption('select[id=orderDirectionJudge]', 'District Judge');
  I.wait(10);
  I.fillField('textarea[id="orderDirectionJudgeName"]', 'vivred test ');
  I.wait(10);
  I.fillField('input[id="orderDirectionDate-day"]', '5');
  I.fillField('input[id="orderDirectionDate-month"]', '2');
  I.fillField('input[id="orderDirectionDate-year"]', '2019');
  I.wait(10);
  I.click('Continue');
  I.wait(10);
  I.click('Submit');
  I.wait(5);
}


module.exports = { searchCase, approveApplication };
