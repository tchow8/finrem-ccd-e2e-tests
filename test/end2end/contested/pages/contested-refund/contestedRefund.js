function contestedRefund() {

  const I = this;
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Refund');
  I.wait(5);
  I.click('Go');
  I.wait(5);
  I.click('Submit');
  I.wait(10);


}

module.exports = { contestedRefund };