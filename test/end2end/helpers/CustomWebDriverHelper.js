/* eslint-disable no-console */
/* eslint-disable no-undef */
const axios = require('axios');

const Helper = codecept_helper;
let screenShotCtr = 1;
const fs = require('fs');
const reportDirPath = './functional-output/debugReport-' + new Date().getTime();

var {createConsentedCase,createContestedCase} = require('../dataSetup/apis/createConsentedCase');

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
    // console.log(step.name);
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

    var httpResponse = test.err.response ? test.err.response.data: '';
    debugReportJson[currentScenario]['FailureReason'] = test.err.stack + ' \n\n ' + JSON.stringify(httpResponse, null, 4) + ' \n\n ' + JSON.stringify(test.err, null, 4);
  }

  async takeScreenShot(status,stepdetails){
    const screenShotsPath = reportDirPath + '/screenshots/';
    debugReportDir = reportDirPath; 

    if (!fs.existsSync(screenShotsPath)){
      fs.mkdirSync(reportDirPath);
      fs.mkdirSync(screenShotsPath); 
 
    }

    let browser = this.getBrowser();

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


  async getBrowserCookies(){
    let browser = this.getBrowser();
    let cookies = await browser.getCookies();

    let cookiesObj = {};
    for (let cookieCtr = 0; cookieCtr < cookies.length; cookieCtr++){
      cookiesObj[cookies[cookieCtr]['name']] = cookies[cookieCtr]['value']; 
    }

    let res = null;

    try{
         res = await axios.get('https://idam-web-public.aat.platform.hmcts.net/login?response_type=code&client_id=ccd_gateway&redirect_uri=https%3A%2F%2Fwww-ccd.aat.platform.hmcts.net%2Foauth2redirect');

    }catch(err){
      console.log(err);
    }
    console.log(res);

    console.log(JSON.stringify(cookies));
  }

  getBrowser(){
    return   this.helpers['WebDriverIO'].browser;

  }

  async getContestedCaseWithState(state,solRef){
    return await createContestedCase(state, solRef);
  }

  async getConsentedCaseWithState(state, solRef) {
    return await createConsentedCase(state, solRef);
  }


}

module.exports = CustomHelper;