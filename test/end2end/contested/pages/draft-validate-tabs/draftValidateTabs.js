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
  I.click('Case Documents');
  I.wait(10);


}

module.exports = { draftValidateTabs };