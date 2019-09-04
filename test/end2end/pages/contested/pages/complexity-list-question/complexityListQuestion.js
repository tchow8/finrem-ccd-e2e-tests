
function complexityListQuestion() {
  const I = this;
  I.waitForPage('#addToComplexityListOfCourts');
  I.checkOption('input[id="addToComplexityListOfCourts-trueYes"]');
  I.waitForPage('#estimatedAssetsChecklist');


  I.checkOption('input[id="estimatedAssetsChecklist-estimatedAssetsChecklist_5"]');
  I.checkOption('input[id="estimatedAssetsChecklist-estimatedAssetsChecklist_4"]');
  I.checkOption('input[id="estimatedAssetsChecklist-estimatedAssetsChecklist_3"]');
  I.checkOption('input[id="estimatedAssetsChecklist-estimatedAssetsChecklist_2"]');
  I.checkOption('input[id="estimatedAssetsChecklist-estimatedAssetsChecklist_1"]');
  I.fillField('#netValueOfHome', '1000000');
  I.checkOption('input[id="potentialAllegationChecklist-notApplicable"]');
  I.checkOption('input[id="potentialAllegationChecklist-potentialAllegationChecklist_14"]');
  I.checkOption('input[id="potentialAllegationChecklist-potentialAllegationChecklist_13"]');
  I.checkOption('input[id="potentialAllegationChecklist-potentialAllegationChecklist_12"]');
  I.checkOption('input[id="potentialAllegationChecklist-potentialAllegationChecklist_11"]');
  I.checkOption('input[id="potentialAllegationChecklist-potentialAllegationChecklist_10"]');
  I.checkOption('input[id="potentialAllegationChecklist-potentialAllegationChecklist_9"]');
  I.checkOption('input[id="potentialAllegationChecklist-potentialAllegationChecklist_8"]');
  I.checkOption('input[id="potentialAllegationChecklist-potentialAllegationChecklist_7"]');
  I.checkOption('input[id="potentialAllegationChecklist-potentialAllegationChecklist_6"]');
  I.checkOption('input[id="potentialAllegationChecklist-potentialAllegationChecklist_5"]');
  I.checkOption('input[id="potentialAllegationChecklist-potentialAllegationChecklist_4"]');
  I.checkOption('input[id="potentialAllegationChecklist-potentialAllegationChecklist_3"]');
  I.checkOption('input[id="potentialAllegationChecklist-potentialAllegationChecklist_2"]');
  I.checkOption('input[id="potentialAllegationChecklist-potentialAllegationChecklist_1"]');
  I.fillField('input[id="detailPotentialAllegation"]', 'allegations testing purpose');
  I.checkOption('input[id="otherReasonForComplexity-Yes"]');
  I.fillField('#otherReasonForComplexityText', 'other reason for the list');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

}

module.exports = { complexityListQuestion };
