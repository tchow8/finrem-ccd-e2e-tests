function sendOrder(){
  const I = this;
  // I.wait(10);
  I.waitForPage('.EventLogTable h2', 'History');
  I.selectOption('select[id="next-step"]', 'Send Order');
  I.wait(1);
  I.click('Go');
  // I.wait(5);
  I.waitForPage('h1', 'Send Order'); 
  I.click('Submit');
  // I.wait(10);
}


module.exports = { sendOrder };