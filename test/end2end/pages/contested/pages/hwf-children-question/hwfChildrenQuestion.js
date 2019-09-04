
function hwfChildrenQuestion() {
  const I = this;
  I.waitForPage('#paymentForChildrenDecision input');
  I.checkOption('input[id="paymentForChildrenDecision-No"]');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

}

module.exports = { hwfChildrenQuestion };
