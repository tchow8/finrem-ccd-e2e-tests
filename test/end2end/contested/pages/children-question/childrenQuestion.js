
function childrenQuestion() {
  const I = this;
  I.wait(5);
  I.checkOption('input[id="paymentForChildrenDecision-Yes"]');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.checkOption('input[id="benefitForChildrenDecision-No"]');
  I.wait(5);
  I.checkOption('input[id="benefitPaymentChecklist-The child or the person with care of the child or the absent parent of the child is not habitually resident in the United Kingdom"]');
  I.checkOption('input[id="benefitPaymentChecklist-To meet expenses incurred by a child being in educated or training for work"]');
  I.checkOption('input[id="benefitPaymentChecklist-To meet expenses arising from a child’s disability"]');
  I.checkOption('input[id="benefitPaymentChecklist-In addition to child support maintenance already paid under a Child Support Agency assessment"]');
  I.checkOption('input[id="benefitPaymentChecklist-Step child or step children"]');
  I.wait(5);
  I.click('Continue');
  I.wait(5);

}

module.exports = { childrenQuestion };
