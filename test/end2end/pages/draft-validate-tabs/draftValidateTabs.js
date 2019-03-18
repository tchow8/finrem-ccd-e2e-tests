function draftValidateTabs() {

  const I = this;
  I.wait(10);
  I.click('Applicant');
  I.wait(1);
  I.click('Respondent');
  I.wait(1);
  I.click('Divorce');
  I.wait(1);
  I.click('Nature of Application');
  I.wait(1);
  I.click('Application documents');
  I.wait(10);


}

module.exports = { draftValidateTabs };