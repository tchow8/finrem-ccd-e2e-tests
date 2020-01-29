
function informationPage() {
  const I = this;
  I.waitForElement('//a[contains(@href,"mailto")]',60);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
}

module.exports = { informationPage };
