function consentOrderApproved() {
  const I = this;
  I.wait(2);
  I.selectOption('select[id="orderDirection"]', 'Decree Nisi');
  I.wait(2);
}

module.exports = { consentOrderApproved };