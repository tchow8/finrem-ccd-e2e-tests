/* eslint-disable no-undef */

async function  waitForPage(header,headerText) {
  const I = this;

  if (headerText === undefined){
    await I.waitForElement(header, 60 );
  } 
  else{
    await I.waitForText(headerText, 60, header);

  }

}

function log(message){
  const I = this;
  const logMessage = new Date() + ' : '+ message;
  // eslint-disable-next-line no-console
  console.log('C:  '+logMessage);

  I.say('I: '+logMessage);
}

async function getElementsCount(locator,count){
  const I = this;

  count =  await I.grabNumberOfVisibleElements(locator);
  // eslint-disable-next-line no-console
  console.log(locator+' Elements count : '+count);
  I.log(locator + ' say log =>  Elements count : ' + count);

  for (let checkBoxCtr = 1; checkBoxCtr <= count; checkBoxCtr++) {
    I.checkOption('#estimatedAssetsChecklist .multiple-choice:nth-of-type(' + checkBoxCtr + ') input');
  }

}

async function waitForContinueButtonEnabled(){
  const I = this;
  await I.waitForElement('button[type = "submit"]:not(:disabled)',30);
}


module.exports = { waitForPage, waitForContinueButtonEnabled, getElementsCount, log };