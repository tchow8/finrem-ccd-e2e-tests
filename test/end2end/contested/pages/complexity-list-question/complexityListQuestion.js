
function complexityListQuestion() {
  const I = this;
  I.wait(5);
  I.checkOption('input[id="addToComplexityListOfCourts-trueYes"]');
  I.wait(5);
  I.checkOption('input[id="estimatedAssetsChecklist-estimatedAssetsChecklist_5"]');
  I.checkOption('input[id="estimatedAssetsChecklist-estimatedAssetsChecklist_4"]');
  I.checkOption('input[id="estimatedAssetsChecklist-estimatedAssetsChecklist_3"]');
  I.checkOption('input[id="estimatedAssetsChecklist-estimatedAssetsChecklist_2"]');
  I.checkOption('input[id="estimatedAssetsChecklist-estimatedAssetsChecklist_1"]');
  I.wait(5);
  I.fillField('#netValueOfHome', '1000000');
  I.wait(5);
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
  I.wait(5);
  I.fillField('input[id="detailPotentialAllegation"]', 'allegations testing purpose');
  I.wait(5);
  I.checkOption('input[id="otherReasonForComplexity-Yes"]');
  I.wait(2);
  I.fillField('#otherReasonForComplexityText', 'other reason for the list');
  I.wait(5);
  I.click('Continue');
  I.wait(5);

}

module.exports = { complexityListQuestion };
