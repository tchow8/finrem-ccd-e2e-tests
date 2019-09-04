
function contestedSearchCase(reference) {
  const I = this;
  I.wait(5);
  I.selectOption('select[id="wb-case-type"]', 'Contested Financial Remedy');
  I.wait(5);
  I.selectOption('select[id="wb-case-state"]', 'Any');
  I.wait(5);
  I.fillField('input[id="solicitorReference"]', 'AUTO-'+reference);
  I.wait(5);
  I.click('Apply');
  I.wait(20);
  I.click({ xpath: '//*[@id="search-result"]/ccd-search-result/table/tbody/tr/td[1]/a/ccd-field-read/ccd-field-read-label/ccd-read-number-field' });
  I.wait(10);

}

module.exports = { contestedSearchCase };