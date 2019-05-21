function giveAllocationDirections(){
  const I = this;
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Give Allocation Directions');
  I.wait(10);
  I.click('Go');
  I.wait(10);
  I.selectOption('select[id=allocatedCourtListGA]', 'cfc');
  I.wait(5);
  I.selectOption('select[id=cfcCourtListGA]', 'FR_s_CFCList_8');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.checkOption('input[id="applicationAllocatedTo-Yes"]');
  I.wait(5);
  I.checkOption('input[id="caseAllocatedTo-Yes"]');
  I.wait(5);
  I.checkOption('input[id="judgeAllocated-FR_judgeAllocatedList_2"]');
  I.wait(5);
  I.checkOption('input[id="judgeTimeEstimate-standardTime"]');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.click('Submit');
  I.wait(5);
  I.see('Give Allocation Directions');
  I.wait(5);


}


module.exports = { giveAllocationDirections };