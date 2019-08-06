function updateOrder(){
  const I = this;
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Update Order');
  I.wait(10);
  I.click('Go');
  I.wait(10);
  I.fillField('#uploadOrder_0_DocumentComment', 'This is Invalid Order');
  I.wait(10);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(10);
  I.click('Submit');
  I.wait(10);
}


module.exports = { updateOrder };