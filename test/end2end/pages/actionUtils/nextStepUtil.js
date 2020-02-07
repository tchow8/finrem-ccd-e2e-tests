

function initiateNextStep(step){
  const I = this;
  I.waitForPage('select[id="next-step"]');


  I.selectOption('select[id="next-step"]', step);
  I.click('.event-trigger button[type = "submit"]');
}

function validateStep(step) {
  const I = this;
  I.waitForPage('.tabs-list');
  I.see(step);
}

function continueNext()
{
  const I = this;

  I.waitForContinueButtonEnabled();
  I.click('button[type="submit"]');
}

function waitForPageWithText(text){
  const I = this;
  I.waitForPage('//*[text() = "' + text+'"]');
}

module.exports = { initiateNextStep, validateStep, continueNext, waitForPageWithText};