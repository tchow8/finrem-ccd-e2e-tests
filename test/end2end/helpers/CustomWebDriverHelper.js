const Helper = codecept_helper;
let screenShotCtr = 1;

const fs = require('fs');
const reportDirPath = './functional-output/debugReport-' + new Date().getTime();


class CustomHelper extends Helper{

  async _afterStep(){
    
  }
  async takeScreenShot(){

    const screenShotsPath = reportDirPath + '/screenshots/';

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
    const screenShotUrlPath = urlArray[urlArray.length - 1] === '' ? 'home' : urlArray[urlArray.length - 1];
    
    const screenShotName = screenShotCtr + '_' + screenShotUrlPath; 
    screenShotCtr = screenShotCtr + 1;
    // eslint-disable-next-line no-console
    console.log('****************** ' + screenShotName);

    browser.saveScreenshot(screenShotsPath + screenShotName + '.png'); 
  }
}

module.exports = CustomHelper;