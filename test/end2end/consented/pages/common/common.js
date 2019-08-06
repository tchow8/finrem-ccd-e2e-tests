
async function  waitForPage(header,headerText) {
  const I = this;

  // try{
  await I.waitForText(headerText, 60, header);

  // }catch(err){
  //   I.see(headerText);
  // }
  // let isTextPresent = false;
  // let waitCounter = 0;
  // do{
  //   if (waitCounter> 0){
  //     I.wait(2);
  //   }
  //   waitCounter = waitCounter + 1;
  //   isTextPresent = true;

  //   await I.see(headerText).catch(err => {
  //     isTextPresent = false;
  //     I.say(isTextPresent + '/' + waitCounter + ' I see text failed : ' + headerText + ' err: ' + err);

  //   });
  

  
     
  // } while (!isTextPresent && waitCounter < 30);
  // await I.see(headerText); 
}

async function waitForContinueButtonEnabled(){
  const I = this;
  I.waitForElement('button[type = "submit"]:not(:disabled)',30);
}



module.exports = { waitForPage, waitForContinueButtonEnabled };