



const today = new Date();

function consentedNextStep(step) {
  const I = this;


  const stepArr = step.split('|');

  I.initiateNextStep(stepArr[0]);

  switch (stepArr[0]) {
  case 'Case Submission':
    break;
  case 'Manual Payment':
    I.waitForPage('#copyOfPaperFormA');
    I.click('Add new');
    I.waitForPage('#copyOfPaperFormA_0_typeOfDocument');
    I.selectOption('#copyOfPaperFormA_0_typeOfDocument', 'Copy of paper form A');
    I.attachFile('input[type="file"]', 'data/dummy.pdf');
    I.continueNext();
    fillAndSubmitEventDetails(I);
    break;
  case 'dueDate':
    I.waitForPage('#dueDate');
    I.fillField('#dueDate-day', today.getDate());
    I.fillField('#dueDate-month', today.getMonth() + 1);
    I.fillField('#dueDate-year', today.getFullYear());
    I.waitForContinueButtonEnabled();
    I.click('Continue');
    fillAndSubmitEventDetails(I);

    break;
  case 'Update Due Date':
    I.waitForPage('#fieldset-case-data');
    I.waitForContinueButtonEnabled();
    I.click('Continue');
    I.waitForContinueButtonEnabled();
    I.wait(1);
    I.click('Submit');

    break;
  case 'Upload document':
    I.waitForPage('#uploadDocuments');
    I.click('Add new');
    I.waitForPage('select[id=uploadDocuments_0_DocumentType]');

    I.selectOption('select[id=uploadDocuments_0_DocumentType]', 'Notice of Acting');
    I.fillField('#uploadDocuments_0_DocumentEmailContent', 'Uploading the document for testing');
    I.attachFile('input[type="file"]', 'data/dummy.pdf');
    I.wait(1);
    I.fillField('input[id="uploadDocuments_0_DocumentDateAdded-day"]', today.getDate());
    I.fillField('input[id="uploadDocuments_0_DocumentDateAdded-month"]', today.getMonth() + 1);
    I.fillField('input[id="uploadDocuments_0_DocumentDateAdded-year"]', today.getFullYear());
    I.waitForContinueButtonEnabled();
    I.click('Continue');
    fillAndSubmitEventDetails(I);

    break;
  case 'Update contact details':
    I.waitForPage('h1', 'Update contact details');
    I.fillField('input[id="solicitorAddress_AddressLine1"]', '26 Riverside Gardens');
    I.fillField('input[id="solicitorAddress_PostTown"]', 'Wembley');
    I.fillField('input[id="solicitorAddress_PostCode"]', 'HA0 1JF');
    I.waitForContinueButtonEnabled();
    I.click('Continue');
    I.waitForPage('.check-your-answers h2', 'Check your answers');
    I.click('Submit');
    break;

  case 'Amended Consent Order':
    I.waitForPage('#amendedConsentOrderCollection');
    I.click('Add new');
    I.waitForPage('input[type="file"]');
    I.attachFile('input[type="file"]', 'data/dummy.pdf');
    I.fillField('input[id="amendedConsentOrderCollection_0_amendedConsentOrderDate-day"]', today.getDate());
    I.fillField('input[id="amendedConsentOrderCollection_0_amendedConsentOrderDate-month"]', today.getMonth() + 1);
    I.fillField('input[id="amendedConsentOrderCollection_0_amendedConsentOrderDate-year"]', today.getFullYear());
    // I.wait(10);
    I.waitForContinueButtonEnabled();
    I.click('Continue');
    fillAndSubmitEventDetails(I);

    break;

  case 'Amend Case':
    I.waitForPage('#divorceCaseNumber');
    I.fillField('#divorceCaseNumber','LV18D84322');
    I.waitForContinueButtonEnabled();
    I.click('Continue');
    fillAndSubmitEventDetails(I);
    break;
  case 'Upload Consent Order':
    I.waitForPage('#uploadConsentOrderDocuments');
    I.click('Add new');
    I.waitForPage('#uploadConsentOrderDocuments_0_DocumentType');

    I.selectOption('#uploadConsentOrderDocuments_0_DocumentType','Other');
    I.fillField('#uploadConsentOrderDocuments_0_DocumentEmailContent','Email content');
    I.attachFile('#uploadConsentOrderDocuments_0_DocumentLink', 'data/dummy.pdf');

    I.fillField('#uploadConsentOrderDocuments_0_DocumentDateAdded-day', today.getDate());
    I.fillField('#uploadConsentOrderDocuments_0_DocumentDateAdded-month', today.getMonth() + 1);
    I.fillField('#uploadConsentOrderDocuments_0_DocumentDateAdded-year', today.getFullYear());

    I.fillField('#uploadConsentOrderDocuments_0_DocumentComment','test comment');
    I.fillField('#uploadConsentOrderDocuments_0_DocumentFileName', 'file name');
    I.waitForContinueButtonEnabled();
    I.click('Continue');
    fillAndSubmitEventDetails(I);
    break;

  case 'Assign To Judge':
    I.waitForPage('select#assignedToJudgeReason');
    I.selectOption('select#assignedToJudgeReason','Draft consent order');
    I.selectOption('select#assignedToJudge', 'Nasim FR Judge');

    I.fillField('#referToJudgeDateFromRespondToOrder-day', today.getDate());
    I.fillField('#referToJudgeDateFromRespondToOrder-month', today.getMonth() + 1);
    I.fillField('#referToJudgeDateFromRespondToOrder-year', today.getFullYear());

    I.fillField('#referToJudgeTextFromRespondToOrder', 'Test');
    I.waitForContinueButtonEnabled();
    I.click('Continue');
    fillAndSubmitEventDetails(I);
    break;

  case 'Upload Order':
    I.waitForPage('#uploadOrder');
    I.click('Add new');
    I.selectOption('#uploadOrder_0_DocumentType','General Order');
    I.fillField('#uploadOrder_0_DocumentEmailContent','Test email content from auto test');
    I.attachFile('#uploadOrder_0_DocumentLink', 'data/dummy.pdf');

    I.fillField('#uploadOrder_0_DocumentDateAdded-day', today.getDate());
    I.fillField('#uploadOrder_0_DocumentDateAdded-month', today.getMonth() + 1);
    I.fillField('#uploadOrder_0_DocumentDateAdded-year', today.getFullYear());

    I.fillField('#uploadOrder_0_DocumentComment', 'Test Comment');

    I.fillField('#uploadOrder_0_DocumentFileName', 'Test file name');
    I.waitForContinueButtonEnabled();
    I.click('Continue');
    fillAndSubmitEventDetails(I);
    break;

  case 'Approve Application':
    I.waitForPage('#orderDirectionAbsolute');
    I.click('#orderDirectionAbsolute-Yes');
    I.click('#servePensionProvider-No');
    I.selectOption('#orderDirectionJudge','District Judge');
    I.fillField('#orderDirectionJudgeName','Wise Test');

    I.fillField('#orderDirectionDate-day', today.getDate());
    I.fillField('#orderDirectionDate-month', today.getMonth() + 1);
    I.fillField('#orderDirectionDate-year', today.getFullYear());
    I.waitForContinueButtonEnabled();
    I.click('Continue');
    fillAndSubmitEventDetails(I);

    break;
  case 'Respond To Order':
    I.wait(2);
    I.click('Continue');
    I.waitForPage('#respondToOrderDocuments');
    I.click('Add new');
    I.waitForPage('//select[contains(@id,"respondToOrderDocuments_")]');
    I.selectOption('//select[contains(@id,"respondToOrderDocuments_")]','Other');
    I.attachFile('//input[contains(@id,"respondToOrderDocuments_")]', 'data/dummy.pdf');
    I.fillField('#respondToOrderDocuments_0_DocumentDateAdded-day',today.getDate());
    I.fillField('#respondToOrderDocuments_0_DocumentDateAdded-month',today.getMonth()+1);
    I.fillField('#respondToOrderDocuments_0_DocumentDateAdded-year',today.getFullYear());
    I.fillField('#respondToOrderDocuments_0_DocumentFileName','Test Other file');
    I.waitForContinueButtonEnabled();
    I.click('Continue');
    //I.waitForPage('#respondToOrderInfoText');
    //I.waitForContinueButtonEnabled();
    //I.click('Continue');
    I.waitForPage('//button[text()="Submit"]');
    I.click('Submit');
    break;
  case 'Application Not Approved':
    I.waitForPage('#orderRefusalCollectionNew');
    I.click('Add new');
    I.waitForPage('#orderRefusalCollectionNew_0_orderRefusalAfterText');
    I.fillField('#orderRefusalCollectionNew_0_orderRefusalAfterText', 'Test for And After text box');
    I.checkOption('fieldset > div:nth-of-type(1) input');
    I.checkOption('fieldset > div:nth-of-type(2) input');
    I.checkOption('fieldset > div:nth-of-type(3) input');
    I.checkOption('fieldset > div:nth-of-type(4) input');
    I.checkOption('fieldset > div:nth-of-type(5) input');
    I.checkOption('fieldset > div:nth-of-type(6) input');
    I.checkOption('fieldset > div:nth-of-type(7) input');
    I.checkOption('fieldset > div:nth-of-type(8) input');
    I.checkOption('fieldset > div:nth-of-type(9) input');
    I.checkOption('fieldset > div:nth-of-type(10) input');
    I.checkOption('fieldset > div:nth-of-type(11) input');
    I.checkOption('fieldset > div:nth-of-type(12) input');
    I.checkOption('fieldset > div:nth-of-type(13) input');
    I.checkOption('fieldset > div:nth-of-type(14) input');
    I.fillField('#orderRefusalCollectionNew_0_orderRefusalOther', 'Fill with black ink');
    I.selectOption('select[id="orderRefusalCollectionNew_0_orderRefusalJudge"]', 'District Judge');
    I.fillField('#orderRefusalCollectionNew_0_orderRefusalJudgeName', 'santha');
    I.fillField('input[id="orderRefusalCollectionNew_0_orderRefusalDate-day"]', '3');
    I.fillField('input[id="orderRefusalCollectionNew_0_orderRefusalDate-month"]', '4');
    I.fillField('input[id="orderRefusalCollectionNew_0_orderRefusalDate-year"]', '2019');
    I.fillField('#orderRefusalCollectionNew_0_orderRefusalAddComments', 'Please justify for FR');
    I.waitForContinueButtonEnabled();
    I.click('Continue');
    I.waitForPageWithText('Preview of Draft Order');
    I.waitForContinueButtonEnabled();
    I.click('Continue');
    fillAndSubmitEventDetails(I);

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

module.exports = { consentedNextStep };