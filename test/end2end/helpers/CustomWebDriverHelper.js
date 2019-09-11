/* eslint-disable no-undef */
const Helper = codecept_helper;
let screenShotCtr = 1;

const fs = require('fs');
const reportDirPath = './functional-output/debugReport-' + new Date().getTime();

global.debugReportJson = {};
global.debugReportDir = '';
class CustomHelper extends Helper{



  async  _beforeStep(step) {
    if (step.name === 'click') {
      this.takeScreenShot();
    }
  }

  async takeScreenShot(){


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
    console.log('****************** ' + url);
    let screenShotUrlPath = urlArray[urlArray.length - 1] === '' ? 'home' : urlArray[urlArray.length - 1];
    screenShotUrlPath = screenShotUrlPath.split('?')[0];
    const screenShotName = screenShotCtr + '_' + screenShotUrlPath; 
    screenShotCtr = screenShotCtr + 1;
    // eslint-disable-next-line no-console
    console.log('****************** ' + screenShotName);


    debugReportJson[screenShotName] = {};

    debugReportJson[screenShotName]['url'] = url;
    debugReportJson[screenShotName]['image'] = './screenshots/' + screenShotName+'.png';

    browser.saveScreenshot(screenShotsPath + screenShotName+'.png' ); 
  }
}

module.exports = CustomHelper;