
function hwfFastTrack() {
  const I = this;
  I.wait(5);
  I.checkOption('input[id="fastTrackDecision-No"]');
  I.wait(2);
  I.click('Continue');
  I.wait(5);

}

module.exports = { hwfFastTrack };