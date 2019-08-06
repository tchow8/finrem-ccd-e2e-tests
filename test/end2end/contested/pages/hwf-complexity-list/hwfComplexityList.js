
function hwfComplexityList() {
  const I = this;
  I.wait(5);
  I.checkOption('input[id="addToComplexityListOfCourts-falseNo"]');
  I.wait(2);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(5);

}

module.exports = { hwfComplexityList };
