
function fastTrack() {
  const I = this;
  I.wait(5);
  I.checkOption('input[id="fastTrackDecision-Yes"]');
  I.wait(5);
  I.checkOption('input[id="fastTrackDecisionReason-reason_3"]');
  I.checkOption('input[id="fastTrackDecisionReason-reason_2"]');
  I.checkOption('input[id="fastTrackDecisionReason-reason_1"]');
  I.wait(5);
  I.click('Continue');
  I.wait(5);

}

module.exports = { fastTrack };
