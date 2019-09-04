
function hwfFastTrack() {
  const I = this;
  I.waitForPage('#fastTrackDecision');
  I.checkOption('input[id="fastTrackDecision-No"]');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

}

module.exports = { hwfFastTrack };