function updateDueDate() {

  const I = this;
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Update Due Date');
  I.wait(10);
  I.click('Go');
  I.wait(10);
  I.fillField('input[id="dueDate-day"]', '5');
  I.fillField('input[id="dueDate-month"]', '3');
  I.fillField('input[id="dueDate-year"]', '2019');
  I.wait(10);
  I.click('Continue');
  I.wait(10);
  I.click('Submit');
  I.wait(10);


}

module.exports = { updateDueDate };