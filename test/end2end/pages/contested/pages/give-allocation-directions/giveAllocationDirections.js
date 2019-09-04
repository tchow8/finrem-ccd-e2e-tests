function giveAllocationDirections(){
  const I = this;

  I.waitForPage('.tabs-list');
  I.selectOption('select[id="next-step"]', 'Give Allocation Directions');
  I.click('Go');

  I.waitForPage('#chooseCourtLabelGA');
  I.selectOption('select[id=allocatedCourtListGA]', 'cfc');

  I.waitForPage('#cfcCourtListGA'); 
  I.selectOption('select[id=cfcCourtListGA]', 'FR_s_CFCList_8');

  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

  I.waitForPage('#applicationAllocatedToLabel'); 
  I.checkOption('input[id="applicationAllocatedTo-Yes"]');
  I.checkOption('input[id="caseAllocatedTo-Yes"]');
  I.checkOption('input[id="judgeAllocated-FR_judgeAllocatedList_2"]');
  I.checkOption('input[id="judgeTimeEstimate-standardTime"]');
  I.waitForContinueButtonEnabled();

  I.click('Continue') ;

  I.waitForPage('#field-trigger-summary');
  I.click('Submit');


  I.see('Give Allocation Directions');


}


module.exports = { giveAllocationDirections };