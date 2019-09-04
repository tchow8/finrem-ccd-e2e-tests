function contestedAddNote() {

  const I = this;
  I.waitForPage('.tabs-list');
  I.selectOption('select[id="next-step"]', 'Add Note');
  I.click('Go');
  I.waitForPage('#caseNotesCollection');
  I.click('Add new');
  I.wait(2);
  I.fillField('#caseNotesCollection_0_caseNoteAuthor', 'I am the author1');
  I.fillField('input[id="caseNotesCollection_0_caseNoteDate-day"]', '2');
  I.fillField('input[id="caseNotesCollection_0_caseNoteDate-month"]', '2');
  I.fillField('input[id="caseNotesCollection_0_caseNoteDate-year"]', '2019');
  I.fillField('#caseNotesCollection_0_caseNote', 'Notes for Judge to test');
  I.waitForContinueButtonEnabled();

  I.click('button[type="submit"]') ;


  I.waitForPage('#field-trigger-summary');
  I.click('Submit');
}

module.exports = { contestedAddNote };