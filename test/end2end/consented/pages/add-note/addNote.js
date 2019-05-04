function addNote() {

  const I = this;
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Add Note');
  I.wait(10);
  I.click('Go');
  I.wait(10);
  I.click('Add new');
  I.wait(10);
  I.fillField('#caseNotesCollection_0_caseNoteAuthor', 'I am the author1');
  I.wait(10);
  I.fillField('input[id="caseNotesCollection_0_caseNoteDate-day"]', '2');
  I.fillField('input[id="caseNotesCollection_0_caseNoteDate-month"]', '2');
  I.fillField('input[id="caseNotesCollection_0_caseNoteDate-year"]', '2019');
  I.wait(10);
  I.fillField('#caseNotesCollection_0_caseNote', 'Notes for Judge to test');
  I.wait(10);
  I.click('Continue');
  I.wait(10);
  I.click('Submit');
  I.wait(10);


}

module.exports = { addNote };