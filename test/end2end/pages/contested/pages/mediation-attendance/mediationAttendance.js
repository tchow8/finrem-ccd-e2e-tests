
function mediationAttendance() {
  const I = this;

  I.waitForPage('#MIAMPreviousAttendanceChecklist');
  I.checkOption('input[id="MIAMPreviousAttendanceChecklist-FR_ms_MIAMPreviousAttendanceChecklist_Value_1"]');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

}

module.exports = { mediationAttendance };