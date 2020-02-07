const { I } = inject();

const contestedTabValidationConfig = require('./contestedTabValidationsConfig').default;
const consentedTabValidationConfig = require('./consentedTabValidationsConfig').default;

module.exports = {
  historyDetailsContainer: '.EventLogDetails',
  async validateTabs(caseType){
    I.waitForPage('.tabs-list');
    const tabValidationConfig = caseType === 'contested' ? contestedTabValidationConfig : consentedTabValidationConfig;
    //   const endstateValueLocator = locate('td').inside(locate('.EventLogDetails tr').withText('End state'));
    let endState = await I.grabTextFrom('//*[@class = "EventLogDetails"]//tr/th//*[text() = "End state"]/../../td/span');

    let thisStateValidationsConfig = tabValidationConfig[endState];
    if (!thisStateValidationsConfig){
      thisStateValidationsConfig = {tabs:[]};
    }

    let tabsTovalidate = thisStateValidationsConfig.tabs.concat(tabValidationConfig['*'].tabs);
    //console.log('Validating tabs : '+JSON.stringify(tabsTovalidate));

    for (var tabCounter = 0; tabCounter < tabsTovalidate.length; tabCounter++ ){
      const tabLocator = '//*[@class = "tabs-list-item"]/a[text() = "' + tabsTovalidate[tabCounter].name + '"]';
      I.seeElement(tabLocator);
      I.click(tabLocator);
      I.waitForPage('//*[@class = "tabs-list-item"]/a[ contains(@class, "tabs-toggle-selected") and  text() = "' + tabsTovalidate[tabCounter].name + '"]');

      const textsTobePresent = tabsTovalidate[tabCounter].seeText;
      // console.log(tabsTovalidate[tabCounter].name+ '  : Validate text count : ' + textsTobePresent);
      for (var textValidationCounter = 0; textValidationCounter < textsTobePresent.length; textValidationCounter++) {
        I.see(textsTobePresent[textValidationCounter]);
      }

    }
    // console.log('End State : '+endState);

  }

};

