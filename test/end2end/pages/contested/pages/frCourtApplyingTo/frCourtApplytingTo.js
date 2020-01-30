function applyingToCourt() {

  const I = this;
  I.waitForPage('#chooseCourtLabel');
  I.selectOption('#allocatedCourtList_region','London');
  I.waitForPage('#allocatedCourtList_londonList');
  I.selectOption('#allocatedCourtList_londonList', 'London FRC');
  I.waitForPage('#allocatedCourtList_cfcCourtList');

  I.selectOption('#allocatedCourtList_cfcCourtList', 'CENTRAL FAMILY COURT');

  I.fillField('#specialAssistanceRequired','Not required');
  I.fillField('#specificArrangementsRequired', 'Not required');
  I.click('#isApplicantsHomeCourt-No');

  I.waitForContinueButtonEnabled();
  I.click('Continue');


}


module.exports = { applyingToCourt};