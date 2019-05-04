function amendCase() {

  const I = this;
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Amend Case');
  I.wait(10);
  I.click('Go');
  I.wait(10);
  I.fillField('input[id="divorceCaseNumber"]', 'LV18D84321');
  I.wait(10);
  I.click('Continue');
  I.wait(10);
  I.click('Submit');
  I.wait(10);


}

module.exports = { amendCase };