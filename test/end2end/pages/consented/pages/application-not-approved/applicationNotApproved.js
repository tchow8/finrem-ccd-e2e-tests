function applicationNotApproved() {
  const I = this;

  I.waitForPage('select[id="next-step"]');
  I.selectOption('select[id="next-step"]', 'Application Not Approved');
  I.click('Go');

  I.waitForPage('#orderRefusalCollectionNew');
  I.click('Add new');

  I.waitForPage('#orderRefusalCollectionNew_0_orderRefusalAfterText');
  I.fillField('#orderRefusalCollectionNew_0_orderRefusalAfterText', 'Test for And After text box');
  I.checkOption('fieldset > div:nth-of-type(1) input');
  I.checkOption('fieldset > div:nth-of-type(2) input');
  I.checkOption('fieldset > div:nth-of-type(3) input');
  I.checkOption('fieldset > div:nth-of-type(4) input');
  I.checkOption('fieldset > div:nth-of-type(5) input');
  I.checkOption('fieldset > div:nth-of-type(6) input');
  I.checkOption('fieldset > div:nth-of-type(7) input');
  I.checkOption('fieldset > div:nth-of-type(8) input');
  I.checkOption('fieldset > div:nth-of-type(9) input');
  I.checkOption('fieldset > div:nth-of-type(10) input');
  I.checkOption('fieldset > div:nth-of-type(11) input');
  I.checkOption('fieldset > div:nth-of-type(12) input');
  I.checkOption('fieldset > div:nth-of-type(13) input');
  I.checkOption('fieldset > div:nth-of-type(14) input');


  I.fillField('#orderRefusalCollectionNew_0_orderRefusalOther', 'Fill with black ink');

  I.selectOption('select[id="orderRefusalCollectionNew_0_orderRefusalJudge"]', 'District Judge');

  I.fillField('#orderRefusalCollectionNew_0_orderRefusalJudgeName', 'santha');
  I.fillField('input[id="orderRefusalCollectionNew_0_orderRefusalDate-day"]', '3');
  I.fillField('input[id="orderRefusalCollectionNew_0_orderRefusalDate-month"]', '4');
  I.fillField('input[id="orderRefusalCollectionNew_0_orderRefusalDate-year"]', '2019');
  I.fillField('#orderRefusalCollectionNew_0_orderRefusalAddComments', 'Please justify for FR');
  I.waitForContinueButtonEnabled();
  I.click('Continue');

  I.waitForPage('#field-trigger-summary');

  I.click('Submit');
}


module.exports = { applicationNotApproved };
