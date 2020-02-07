// const testConfig = require('test/config.js');

function searchCase(reference,caseType) {
  const I = this;
  // I.wait(5);
  I.waitForPage('select[id="wb-case-type"]');

  I.selectOption('select[id="wb-case-type"]', caseType);
  I.wait(1);
  I.selectOption('select[id="wb-case-state"]', 'Any');
  I.waitForElement('input[id="solicitorReference"]',30);
  I.fillField('input[id="solicitorReference"]', reference);
  I.waitForPage('.display-left button:not(.button-secondary)');
  I.waitForVisible('.display-left button:not(.button-secondary)',30);
  I.scrollTo('.display-left button:not(.button-secondary)');
  I.click('.display-left button:not(.button-secondary)');
  I.waitForPage('.search-result-column-cell:nth-of-type(2) span', reference);
  I.scrollTo('.search-result-column-cell:nth-of-type(2) span');

  I.click('.search-result-column-cell:nth-of-type(1) a');
  I.waitForPage('.tabs-list');
}


function openCaseWithState (caseType,state) {
  const I = this;
  // I.wait(5);
  I.waitForPage('#search-result h2', 'Case List');

  I.selectOption('select[id="wb-case-type"]', caseType);
  I.wait(1);
  I.selectOption('select[id="wb-case-state"]', state);
  I.waitForElement('input[id="solicitorReference"]', 30);
  I.fillField('input[id="solicitorReference"]', '');
  I.waitForPage('.display-left button:not(.button-secondary)');
  I.waitForVisible('.display-left button:not(.button-secondary)', 30);

  I.scrollTo('.display-left button:not(.button-secondary)');
  I.click('.display-left button:not(.button-secondary)');
  // I.click('.display-left button:not(.button-secondary)');
  // I.wait(20);
  I.waitForPage('.search-result-column-cell:nth-of-type(7) span', state);
  I.scrollTo('.search-result-column-cell:nth-of-type(7) span');

  I.click('.search-result-column-cell:nth-of-type(1) a');
  I.waitForPage('.tabs-list');

  // I.wait(10);

}

function approveApplication() {
  const I = this;
  // I.wait(10);
  I.waitForPage('.EventLogTable h2', 'History');
  I.selectOption('select[id="next-step"]', 'Approve Application');
  I.wait(1);
  I.click('Go');
  // I.wait(10);
  I.waitForPage('h1', 'Approve Application');
  I.checkOption('input[id="orderDirectionAbsolute-No"]');
  // I.wait(10);
  I.selectOption('select[id=orderDirectionJudge]', 'District Judge');
  I.wait(1);
  I.fillField('textarea[id="orderDirectionJudgeName"]', 'mahred test ');
  // I.wait(10);
  I.fillField('input[id="orderDirectionDate-day"]', '6');
  I.fillField('input[id="orderDirectionDate-month"]', '4');
  I.fillField('input[id="orderDirectionDate-year"]', '2019');
  // I.wait(10);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(1);
  I.waitForElement('#field-trigger-summary', 30);

  I.click('Submit');
  // I.wait(5);
}

module.exports = { searchCase, approveApplication, openCaseWithState};
