function closeCase() {

  const I = this;
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Close Case');
  I.wait(10);
  I.click('Go');
  I.wait(10);
  I.click('Submit');
  I.wait(10);


}

module.exports = { closeCase };