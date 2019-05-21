function refund() {

  const I = this;
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Refund');
  I.wait(10);
  I.click('Go');
  I.wait(10);
  I.click('Submit');
  I.wait(10);


}

module.exports = { refund };