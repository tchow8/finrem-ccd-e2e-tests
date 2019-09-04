// const testConfig = require('test/config.js');

function contestedDivorceDetails() {
  const I = this;
  I.waitForPage('#divorceDetailsLabel h2','Divorce Details'); 
  I.fillField('input[id="divorceCaseNumber"]', 'EM18D54321');
  I.fillField('input[id="dateOfMarriage-day"]', '1');
  I.fillField('input[id="dateOfMarriage-month"]', '2');
  I.fillField('input[id="dateOfMarriage-year"]', '2000');
  I.fillField('input[id="dateOfSepration-day"]', '2');
  I.fillField('input[id="dateOfSepration-month"]', '3');
  I.fillField('input[id="dateOfSepration-year"]', '2010');
  I.fillField('input[id="divorcePetitionIssuedDate-day"]', '3');
  I.fillField('input[id="divorcePetitionIssuedDate-month"]', '4');
  I.fillField('input[id="divorcePetitionIssuedDate-year"]', '2018');
  I.fillField('#nameOfCourtDivorceCentre', 'Brentford Court');
  I.selectOption('select[id="divorceStageReached"]', 'Decree Nisi');
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  I.fillField('input[id="divorceDecreeNisiDate-day"]', '1');
  I.fillField('input[id="divorceDecreeNisiDate-month"]', '2');
  I.fillField('input[id="divorceDecreeNisiDate-year"]', '2019');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
}

module.exports = { contestedDivorceDetails };
