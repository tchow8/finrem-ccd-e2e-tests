function sendOrder(){
  const I = this;
  I.waitForPage('select[id="next-step"]');
  I.selectOption('select[id="next-step"]', 'Send Order');
  I.click('Go');
  I.waitForElement('#field-trigger-summary', 30);

  I.click('Submit');
  I.waitForPage('.tabs-list');

}


module.exports = { sendOrder };