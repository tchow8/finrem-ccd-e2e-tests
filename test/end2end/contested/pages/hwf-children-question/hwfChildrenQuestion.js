
function hwfChildrenQuestion() {
  const I = this;
  I.wait(5);
  I.checkOption('input[id="paymentForChildrenDecision-No"]');
  I.wait(5);
  I.click('Continue');
  I.wait(5);

}

module.exports = { hwfChildrenQuestion };
