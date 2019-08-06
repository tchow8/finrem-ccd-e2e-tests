function paymentPage(pbaValue) {

  const I = this;
  // I.wait(5);
  I.waitForPage('h4', 'PAYMENT DETAILS');
  if(pbaValue===false){
    I.checkOption('input[id="helpWithFeesQuestion-Yes"]');
  }else{
    I.checkOption('input[id="helpWithFeesQuestion-No"]');
  }
  // I.wait(5);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(5);

}

module.exports = { paymentPage };
