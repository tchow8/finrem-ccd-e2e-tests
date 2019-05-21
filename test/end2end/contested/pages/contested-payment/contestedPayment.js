function contestedPayment(pbaValue) {

  const I = this;
  if(pbaValue===false){
    I.checkOption('input[id="helpWithFeesQuestion-Yes"]');
  }else{
    I.checkOption('input[id="helpWithFeesQuestion-No"]');
  }
  I.wait(5);
  I.click('Continue');
  I.wait(5);

}

module.exports = { contestedPayment };
