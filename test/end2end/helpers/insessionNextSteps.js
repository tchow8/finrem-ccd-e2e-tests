
const today = new Date();
var { getFastTrackHearingDate, getStandardHearingDate } = require('./dateUtil');
function contestedNextStep(I,step) {


  const stepArr = step.split('|');
  let heardingDate = '';

  initiateNextStep(I,stepArr[0]);

  switch (stepArr[0]) {
  case 'Case Submission':
    caseSubmission(stepArr[1], I);
    break;

  case 'Manual Payment':
    I.waitForPage('#copyOfPaperFormA');
    I.click('Add new');
    I.waitForPage('#copyOfPaperFormA_0_typeOfDocument');
    I.selectOption('#copyOfPaperFormA_0_typeOfDocument', 'Copy of paper form A');
    I.continueNext();
    I.attachFile('input[type="file"]', 'data/dummy.pdf');
    fillAndSubmitEventDetails(I);
    break;

  case 'Upload Draft Order':
  case 'Issue Application':
    I.waitForPageWithText('Issue Date');
    I.enterDate('Issue Date', today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear());
    I.continueNext();
    fillAndSubmitEventDetails(I);
    break;
  case 'List for Hearing':
    // eslint-disable-next-line
    console.log('isfastTract DecisionValue passed : ***' + stepArr[1].trim() + '***');
    if (stepArr[1].trim() === 'Yes') {
      heardingDate = getFastTrackHearingDate();
    } else {
      heardingDate = getStandardHearingDate();
    }

    I.waitForPage('input#timeEstimate');
    I.enterText2('Time Estimate', '5 Hours');
    I.enterDate2('Hearing Date', heardingDate);
    I.enterText2('Hearing Time', '10:00');
    I.selectOption('#regionListSL', 'London');
    I.wait(2);
    I.selectOption('#londonFRCListSL', 'London FRC');
    I.wait(2);
    I.selectOption('#cfcCourtListSL', 'FR_s_CFCList_16');
    I.click('Continue');
    I.waitForPageWithText('Check your answers');
    I.click('Submit');
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
    I.waitForPage('h1', 'Submit Uploaded Case Files');
    I.click('Submit');
    break;
  case 'Assign To Judge':
  case 'Give Allocation Directions':
    I.waitForPage('#chooseCourtLabelGA');
    I.selectOption('#allocatedCourtListGA_region', 'London');
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
    I.waitForPage('h1', 'Upload Case Files');
    I.click('Add new');
    I.wait(1);
    I.attachFile('#uploadCaseDocument_0_caseDocuments', 'data/dummy.pdf');
    I.selectOption('#uploadCaseDocument_0_caseDocumentType', 'Other');
    I.waitForContinueButtonEnabled();
    I.click('Continue');
    I.waitForPageWithText('Check your answers');
    I.click('Submit');
    break;
  case 'Solicitor To Draft Order':
  case 'Judge To Draft Order':
  case 'General Order':
  case 'Application Not Approved':
  case 'Upload document':
  case 'Refund':
  case 'Update contact details':
  case 'Amend Case':
  case 'Close Case':
  case 'Add Note':
  case 'Consent Order (No Payment)':

    break;
  default:
    fillAndSubmitEventDetails(I);

  }
  I.validateStep(stepArr[0]);


}

function fillAndSubmitEventDetails(I) {
  I.waitForPage('#field-trigger-summary');
  I.click('Submit');
}

function caseSubmission(paymentType, I) {
  //   const I = this;
  I.waitForPage('#authorisationTitle');
  I.enterText('Solicitor Name', 'Test Solicitor');
  I.enterText('Solicitor Firm', 'Test SolFirm');
  I.enterText('Solicitor Position', 'Senior');
  I.enterDate('Date', today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear());
  I.continueNext();

  I.waitForPage('#payment');
  I.selectRadio('PAYMENT DETAILS', paymentType === 'HWF' ? 'Yes' : 'No');
  I.continueNext();

  if (paymentType === 'HWF') {
    I.waitForPage('#HWFNumber');
    I.enterText('Please enter your Help With Fees reference number', 'HWF22345');
    I.continueNext();
  }
  else {
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



function initiateNextStep(I,step) {
  I.waitForElement('select[id="next-step"]',60);


  I.selectOption('select[id="next-step"]', step);
  I.click('.event-trigger button[type = "submit"]');
}

module.exports = { contestedNextStep };