// const testConfig = require('test/config.js');
function applicantDetails(I) {
  I.waitForElement('input[id="applicantFMName"]');
  I.fillField('input[id="applicantFMName"]', 'viv');
  I.fillField('input[id="applicantLName"]', 'div');
  I.wait(5);
  I.selectOption('select[id="regionList"]', 'Wales');
  I.selectOption('select[id="walesFRCList"]','Swansea FRC');
  I.selectOption('select[id="swanseaCourtList"]','PORT TALBOT JUSTICE CENTRE');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(10);
}

function consentedApplicatDetails(){
  const I = this;
  I.waitForPage('h4', 'APPLICANT DETAILS');
  applicantDetails(I);
}

function contestedApplicantDetails(){
  const I = this;
  I.waitForElement('#applicantDetailsLabel h2', 30);
  applicantDetails(I);

}

module.exports = { consentedApplicatDetails, contestedApplicantDetails};
