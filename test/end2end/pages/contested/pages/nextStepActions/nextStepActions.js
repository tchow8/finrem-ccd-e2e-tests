



const today = new Date();
var {getFastTrackHearingDate,getStandardHearingDate} = require('../../../../helpers/dateUtil');
function contestedNextStep(step) {
  const I = this;


  const stepArr = step.split('|');
  let heardingDate = '';

  I.initiateNextStep(stepArr[0]);
  I.say('********** Next Step : ' + step);
  switch (stepArr[0]) {
  case 'Case Submission':
    caseSubmission(stepArr[1],I);
    break;

  case 'Manual Payment':
    I.waitForPage('#copyOfPaperFormA');
    I.click('Add new');
    I.waitForPage('#copyOfPaperFormA_0_typeOfDocument');
    I.selectOption('#copyOfPaperFormA_0_typeOfDocument', 'Copy of paper form A');
    // I.continueNext();
    I.attachFile('input[type="file"]', 'data/dummy.pdf');
    I.continueNext();

    fillAndSubmitEventDetails(I);
    break;

    // eslint-disable-next-line no-case-declarations
  case 'Upload Draft Order':
    I.waitForPage('#draftDirectionOrderCollection');
    let solUserName =  I.grabTextFrom('span[id="user-name"]');
    I.click('Add new');
    I.waitForPage('#draftDirectionOrderCollection_0_purposeOfDocument');
    I.selectOption('#draftDirectionOrderCollection_0_purposeOfDocument','Draft order');
    I.attachFile('input[type="file"]', 'data/dummy.pdf');
    I.continueNext();
    I.wait(2);

    if(solUserName==='Mahesh Fr_judge') {
      I.click('Add new');
      I.waitForPage('#draftDirectionDetailsCollection_0_0');
      I.checkOption('input[id="draftDirectionDetailsCollection_0_isThisFinalYN-No"]');
      I.checkOption('input[id="draftDirectionDetailsCollection_0_isAnotherHearingYN-No"]');
      I.continueNext();
      I.wait(2);

    }
    I.click('button[type="submit"]');
    //I.waitForPage('.check-your-answers');
    //I.continueNext();
    break;

  case 'Judge To Draft Order':
    I.waitForPage('#attendingCourtWithAssistanceLabel');
    I.fillField('#attendingCourtWithAssistance','Assistance None required');
    I.fillField('#attendingCourtWithArrangement', 'Arrangement None required');
    I.continueNext();
    fillAndSubmitEventDetails(I);
    break;

  case 'Issue Application':
    I.waitForPageWithText('Issue Date');
    I.enterDate('Issue Date', today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear());
    I.continueNext();
    fillAndSubmitEventDetails(I);
    break;
  case 'List for Hearing':

    // console.log('isfastTract DecisionValue passed : ***' + stepArr[1].trim()+'***');
    //   if (stepArr[1] && stepArr[1].trim() === 'Yes'){
    //   heardingDate = getFastTrackHearingDate();
    // }else{
    //   heardingDate = getStandardHearingDate();
    // }

    heardingDate = getStandardHearingDate();


    I.waitForPage('input#timeEstimate');
    I.enterText2('Time Estimate','5 Hours');
    I.enterDate2('Hearing Date', heardingDate);
    I.enterText2('Hearing Time', '10:00');
    I.selectOption('#regionListSL','London');
    I.wait(2);
    I.selectOption('#londonFRCListSL','London FRC');
    I.wait(2);
    I.selectOption('#cfcCourtListSL', 'WILLESDEN COUNTY COURT AND FAMILY COURT');
    I.click('Continue');
    I.waitForPageWithText('Check your answers');
    // I.click('Submit');
    I.continueNext();
    I.waitForPageWithText('Ignore Warning and Go');
    I.click('Ignore Warning and Go');

    break;
  case 'Consent Order Payment':
    I.waitForPage('#uploadConsentedOrder');
    I.attachFile('input[type="file"]', 'data/dummy.pdf');
    I.waitForContinueButtonEnabled();
    I.click('Continue');
    fillAndSubmitEventDetails(I);
    break;
  case 'Submit Uploaded Case Files':
    I.waitForPage('h1','Submit Uploaded Case Files');
    I.click('Submit');
    break;
  case 'Give Allocation Directions':
    I.waitForPage('#chooseCourtLabelGA');
    I.selectOption('#allocatedCourtListGA_region','London');
    I.wait(1);
    I.selectOption('#allocatedCourtListGA_londonList', 'London FRC');
    I.wait(1);

    I.selectOption('#allocatedCourtListGA_cfcCourtList', 'CENTRAL FAMILY COURT');
    I.waitForContinueButtonEnabled();
    I.click('Continue');

    I.waitForPage('#applicationAllocatedTo-Yes');
    I.click('#applicationAllocatedTo-Yes');
    I.click('#caseAllocatedTo-Yes');
    I.click('#judgeAllocated-FR_judgeAllocatedList_3');
    I.click('#judgeTimeEstimate-standardTime');


    I.waitForContinueButtonEnabled();
    I.click('Continue');
    fillAndSubmitEventDetails(I);

    break;
  case 'Upload Case Files':
    I.waitForPage('h1','Upload Case Files');
    I.click('Add new');
    I.wait(1);
    I.attachFile('#uploadCaseDocument_0_caseDocuments', 'data/dummy.pdf');
    I.selectOption('#uploadCaseDocument_0_caseDocumentType','Other');
    I.waitForContinueButtonEnabled();
    I.click('Continue');
    I.waitForPageWithText('Check your answers');
    I.click('Submit');
    break;
  case 'Solicitor To Draft Order':
    I.waitForPage('#attendingCourtWithAssistance');
    I.fillField('#attendingCourtWithAssistance','Assistance None required');
    I.fillField('#attendingCourtWithArrangement', 'Arrangement None required');
    I.waitForContinueButtonEnabled();
    I.click('Continue');
    fillAndSubmitEventDetails(I);


    break;
  case 'Draft Order Approved':
    I.waitForPage('#draftDirectionDetailsCollection');
    I.click('Add new');
    I.waitForPage('#draftDirectionDetailsCollection_0_0');
    I.click('#draftDirectionDetailsCollection_0_isThisFinalYN-Yes');

    I.waitForPage('#draftDirectionDetailsCollection_0_isAnotherHearingYN-Yes');

    I.click('#draftDirectionDetailsCollection_0_isAnotherHearingYN-Yes');

    I.waitForPage('#draftDirectionDetailsCollection_0_typeOfHearing');
    I.selectOption('#draftDirectionDetailsCollection_0_typeOfHearing','Final Hearing (FH)');
    I.click('#draftDirectionDetailsCollection_0_timeEstimate-standardTime');
    I.selectOption('#draftDirectionDetailsCollection_0_localCourt_region','London');
    I.waitForPage('#draftDirectionDetailsCollection_0_localCourt_londonList');
    I.selectOption('#draftDirectionDetailsCollection_0_localCourt_londonList','London FRC');
    I.waitForPage('#draftDirectionDetailsCollection_0_localCourt_cfcCourtList');
    I.selectOption('#draftDirectionDetailsCollection_0_localCourt_cfcCourtList','CENTRAL FAMILY COURT');
    I.fillField('#draftDirectionDetailsCollection_0_listingInstructor','No other listing instrauction for . now. good luck');

    I.continueNext();
    fillAndSubmitEventDetails(I);
    break;

  case 'Upload Order':
    I.waitForPage('#uploadHearingOrder');
    I.click('Add new');
    I.attachFile('#uploadHearingOrder_0_uploadDraftDocument', 'data/dummy.pdf');


    I.continueNext();
    I.waitForPage('#directionDetailsCollection');
    I.click('Add new');

    I.waitForPage('#directionDetailsCollection_0_isAnotherHearingYN-Yes');
    I.click('#directionDetailsCollection_0_isAnotherHearingYN-Yes');

    I.waitForPage('#directionDetailsCollection_0_timeEstimate');

    I.fillField('#directionDetailsCollection_0_timeEstimate','10');
    I.fillField('#directionDetailsCollection_0_hearingTime','12:00');

    heardingDate = getStandardHearingDate().split('-');
    I.fillField('#directionDetailsCollection_0_dateOfHearing-day', heardingDate[0]);
    I.fillField('#directionDetailsCollection_0_dateOfHearing-month', heardingDate[1]);

    I.fillField('#directionDetailsCollection_0_dateOfHearing-year', heardingDate[2]);


    I.click('#directionDetailsCollection_0_isAnotherHearingYN-Yes');
    I.waitForPage('#directionDetailsCollection_0_localCourt_region');
    I.selectOption('#directionDetailsCollection_0_localCourt_region','London');
    I.waitForPage('#directionDetailsCollection_0_localCourt_londonList');
    I.selectOption('#directionDetailsCollection_0_localCourt_londonList','London FRC');
    I.waitForPage('#directionDetailsCollection_0_localCourt_cfcCourtList');
    I.selectOption('#directionDetailsCollection_0_localCourt_cfcCourtList','CENTRAL FAMILY COURT');
    I.selectOption('#directionDetailsCollection_0_typeOfHearing','Final Hearing (FH)');
    I.continueNext();
    fillAndSubmitEventDetails(I);
    break;

  default:
    fillAndSubmitEventDetails(I);

  }
  I.validateStep(stepArr[0]);


}

function fillAndSubmitEventDetails(I){
  I.waitForPage('#field-trigger-summary');
  I.click('Submit');
}

function caseSubmission(paymentType,I) {
//   const I = this;
  I.waitForPage('#authorisationTitle');
  I.enterText('Solicitor Name', 'Test Solicitor');
  I.enterText('Solicitor Firm', 'Test SolFirm');
  I.enterText('Solicitor Position', 'Senior');
  I.enterDate('Date', today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear());
  I.continueNext();

  I.waitForPage('#payment');
  I.selectRadio('PAYMENT DETAILS', paymentType === 'HWF'? 'Yes': 'No');
  I.continueNext();

  if (paymentType === 'HWF'){
    I.waitForPage('#HWFNumber');
    I.enterText('Please enter your Help With Fees reference number', 'HWF22345');
    I.continueNext();
  }
  else{
    I.waitForPageWithText('Amount to pay');
    I.enterText('Enter your account number', 'PBA0066906');

    I.enterText('Enter your reference', 'Test PBA Account');
    I.continueNext();
  }

  I.waitForPageWithText('Order Summary');
  I.continueNext();

  I.waitForPageWithText('Sending your application to the Court');
  I.continueNext();

  I.waitForPageWithText('Check your answers');
  I.continueNext();
  I.waitForPageWithText('Application Complete');
  I.click('Close and Return to case details');
  I.validateStep('Case Submission');
}

module.exports= {contestedNextStep};