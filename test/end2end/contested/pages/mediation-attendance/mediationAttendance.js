
function mediationAttendance() {
  const I = this;
  I.wait(5);
  I.checkOption('input[id="MIAMPreviousAttendanceChecklist-FR_ms_MIAMPreviousAttendanceChecklist_Value_1"]');
  I.wait(3);
  I.click('Continue');
  I.wait(5);

}

module.exports = { mediationAttendance };