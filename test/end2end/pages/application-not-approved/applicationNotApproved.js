function applicationNotApproved() {
  const I = this;
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Application Not Approved');
  I.wait(10);
  I.click('Go');
  I.wait(10);
  I.click('Add new');
  I.wait(10);
  I.checkOption('input[value="Insufficient information provided – A"]');
  I.wait(5);
  I.checkOption('input[value="Insufficient information provided – C"]');
  I.wait(5);
  I.checkOption('input[value="Insufficient information provided – E"]');
  I.wait(5);
  I.checkOption('input[value="Pension annex"]');
  I.wait(5);
  I.checkOption('input[value="The D81 incomplete"]');
  I.wait(5);
  I.checkOption('input[value="Other (please specify)"]');
  I.wait(10);
  I.fillField('#orderRefusalCollection_0_orderRefusalOther', 'Fill with black ink');
  I.wait(10);
  I.click('Continue');
  I.wait(10);
  I.click('Submit');
  I.wait(10);
}


module.exports = { applicationNotApproved };
