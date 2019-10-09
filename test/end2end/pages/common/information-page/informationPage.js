
function informationPage() {
  const I = this;
  // I.wait(5);
  I.waitForElement('//a[contains(@href,"mailto")]',60);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(5);
}

module.exports = { informationPage };
