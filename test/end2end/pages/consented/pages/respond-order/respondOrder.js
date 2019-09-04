function respondOrder(){
  const I = this;
  // I.wait(10);
  I.waitForPage('.EventLogTable h2', 'History');
  I.selectOption('select[id="next-step"]', 'Respond To Order');
  I.wait(1);
  I.click('Go');
  // I.wait(10);
  I.waitForPage('.form-group h2:nth-of-type(1)', 'Respond To Order Documents');
  I.click('Add new');
  I.wait(2);
  I.selectOption('select[id=respondToOrderDocuments_0_DocumentType]', 'ApplicantLetterEmail');
  I.wait(1);
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  I.wait(1);
  I.fillField('input[id="respondToOrderDocuments_0_DocumentDateAdded-day"]', '12');
  // I.wait(2);
  I.fillField('input[id="respondToOrderDocuments_0_DocumentDateAdded-month"]', '2');
  // I.wait(2);
  I.fillField('input[id="respondToOrderDocuments_0_DocumentDateAdded-year"]', '2019');
  // I.wait(10);
  I.fillField('#respondToOrderDocuments_0_DocumentFileName', 'test file');
  // I.wait(2);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(10)
  I.waitForPage('.case-field h1', 'Sending your documents to the Court');
 
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(10);
  I.waitForElement('.check-your-answers',30);
  I.click('Submit');
  // I.wait(10);

}


module.exports = { respondOrder };