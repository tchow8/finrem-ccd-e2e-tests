function contestedPayment(pbaValue) {

  const I = this;
  I.waitForPage('#helpWithFeesQuestion');
  if(pbaValue===false){
    I.checkOption('input[id="helpWithFeesQuestion-Yes"]');
  }else{
    I.checkOption('input[id="helpWithFeesQuestion-No"]');
  }
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

}

module.exports = { contestedPayment };
