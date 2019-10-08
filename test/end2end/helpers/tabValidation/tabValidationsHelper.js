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

    const thisStateValidationsConfig = tabValidationConfig[endState];
    if (!thisStateValidationsConfig){
      throw Error('Tab validation Config error: missing ' + endState);
    }
    thisStateValidationsConfig.tabs.concat(tabValidationConfig['Any State']);

    for (var tabCounter = 0; tabCounter < thisStateValidationsConfig.tabs.length; tabCounter++ ){
      const tabLocator = '//*[@class = "tabs-list-item"]/a[text() = "' + thisStateValidationsConfig.tabs[tabCounter].name + '"]'; 
      I.seeElement(tabLocator);
      I.click(tabLocator);
     
      const textsTobePresent = thisStateValidationsConfig.tabs[tabCounter].seeText;
      console.log('Validate text coiunt : ' + textsTobePresent.length);
      for (var textValidationCounter = 0; textValidationCounter < textsTobePresent.length; textValidationCounter++){
        I.see(textsTobePresent[textValidationCounter]);
      }
    } 

    console.log('End State : '+endState);
 
  }



};
