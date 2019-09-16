/* eslint-disable no-console */
/* eslint-disable no-undef */
const Helper = codecept_helper;
let screenShotCtr = 1;

const fs = require('fs');
const reportDirPath = './functional-output/debugReport-' + new Date().getTime();


class CustomHelper extends Helper{


  _init(){
    global.debugReportJson = {};
    global.debugReportDir = '';
    global.testCtr = 1;

  }


  _before(test){
    global.currentScenario = testCtr + '_' + test.title;
    testCtr = testCtr + 1;
    debugReportJson[currentScenario] = {};
    debugReportJson[currentScenario]['steps'] = {};
    debugReportJson[currentScenario]['status'] = 'passed';
  }


  async _beforeStep(step) {
    if (step.name === 'click'){ 
      let stepDetails = {};
      stepDetails['method'] = step.helperMethod;

      stepDetails['methodArgs'] = JSON.stringify(step.args);
      stepDetails['stepLine'] = step.line(); 

      this.takeScreenShot(null, stepDetails);
    }
  }


  async _passed(test) {
    await this.takeScreenShot('testPassed');
    debugReportJson[currentScenario]['status'] = 'passed';

  }

  async  _failed(test) {
    await this.takeScreenShot('testFailed');
    debugReportJson[currentScenario]['status'] = 'failed';

    debugReportJson[currentScenario]['FailureReason']=test.err.stack;
  }

  async takeScreenShot(status,stepdetails){

    const screenShotsPath = reportDirPath + '/screenshots/';
    debugReportDir = reportDirPath; 

    if (!fs.existsSync(screenShotsPath)){
      fs.mkdirSync(reportDirPath);
      fs.mkdirSync(screenShotsPath); 
 
    }

    let browser = this.helpers['WebDriverIO'].browser;

    // eslint-disable-next-line indent
      let url = await browser.getUrl();
    // eslint-disable-next-line no-console
    let urlArray = url.split('/');
    // eslint-disable-next-line no-console
    let screenShotUrlPath = urlArray[urlArray.length - 1] === '' ? 'home' : urlArray[urlArray.length - 1];
    screenShotUrlPath = screenShotUrlPath.split('?')[0];
    screenShotUrlPath = screenShotUrlPath.replace('#','_');

    let failedIdentifier = status ? '_'+status + '_'  : '';  
    let screenShotName = screenShotCtr + '_' + failedIdentifier + screenShotUrlPath;
    screenShotCtr = screenShotCtr + 1;
    // eslint-disable-next-line no-console

    let scenarioSteps =  debugReportJson[currentScenario]['steps'];
    scenarioSteps[screenShotName] = {};

    scenarioSteps[screenShotName]['url'] = url;
    scenarioSteps[screenShotName]['image'] = './screenshots/' + screenShotName+'.png';

    if (stepdetails){
      scenarioSteps[screenShotName]['stepDetails'] = stepdetails; 
    }

    try{
      await browser.saveScreenshot(screenShotsPath + screenShotName + '.png'); 

    }
    catch(err){
      console.log('Test Failed screenshot error : ' + screenShotName);
    //   throw err;
    }
  }
}

module.exports = CustomHelper;