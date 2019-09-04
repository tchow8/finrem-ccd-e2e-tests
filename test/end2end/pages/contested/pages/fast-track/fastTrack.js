
function fastTrack() {
  const I = this;
  I.wait(5);
  I.waitForPage('#fastTrackDecision');
  I.checkOption('input[id="fastTrackDecision-Yes"]');

  I.wait(1); 
  I.checkOption('input[id="fastTrackDecisionReason-reason_3"]');
  I.checkOption('input[id="fastTrackDecisionReason-reason_2"]');
  I.checkOption('input[id="fastTrackDecisionReason-reason_1"]');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;

}

module.exports = { fastTrack };
