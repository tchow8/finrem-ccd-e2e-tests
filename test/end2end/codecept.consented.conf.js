const testConfig = require('test/config.js');
const debugReporter = require('./helpers/debugReporter.js');
// const {testNameSetter} = require('./helpers/customHooks.js');


const journeyType = process.env.JOURNEYTYPE;
const journey = process.env.JOURNEY;

function getTests() {
  let tests = './**/';

  if (journeyType === 'all'){
    tests = tests + '*Journeys/*.js';
    return tests;
  }
  else{
    tests = tests + journeyType + 'Journeys/';
  }

  if(journey === 'all'){
    tests = tests + journeyType+'E2E*.js';
  }else{
    tests = tests + journeyType + 'E2E'+journey+'Journey.js'; 
  }
  // eslint-disable-next-line no-console
  console.log('tests : ' + tests);
  return tests;
}

exports.config = {
  // bootstrap : function(){
  //   testNameSetter();
  // },
  teardown: function (done) {
    debugReporter(done);
  },
  tests: getTests(),
  // tests: './**/contestedJourneys/*.js',

  // tests: './**/consentedJourneys/*.js',
  output: `${process.cwd()}/functional-output`,
  multiple: {
    parallel : {
      chunks: 2,
      browser: ['chrome']
    }
  },
  helpers: {
    // 'Mochawesome': {
    //   uniqueScreenshotNames: true
    // },
    // Puppeteer: {
    //   url: testConfig.TestFrontendUrl || 'https://www-ccd.aat.platform.hmcts.net/',
    //   waitForTimeout: 5000,
    //   // waitForAction: 2000,
    //   getPageTimeout: 30000,
    //   show: true,
    //   waitForNavigation: 'networkidle0',
    //   ignoreHTTPSErrors: true,
    //   headless: false,
    //   chrome: {
    //     ignoreHTTPSErrors: true,
    //     args: [
    //       '--no-sandbox',
    //       '--proxy-server=proxyout.reform.hmcts.net:8080',
    //       '--disable-dev-shm-usage'
    //     ]
    //   }

    // }
    // ,
    WebDriverIO:{
      url: testConfig.TestFrontendUrl || 'https://www-ccd.aat.platform.hmcts.net/',
      smartWait:5000,
      browser: 'chrome',
      restart: true,
      // windowSize:'maximize',
      ignoreHTTPSErrors: true,
      remoteFileUpload:false,
      fullPageScreenshots:true,
      timeouts:{
        script: 60000,
        'page load': 10000
      }, 
      desiredCapabilities:{
        chromeOptions: {
          args: [
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--proxy-server=proxyout.reform.hmcts.net:8080',
            '--headless'
          ]
        }
  
      }
    },
    CustomHelpers: {
      require : './helpers/CustomWebDriverHelper.js'
    }
    
  
  },
  include: { I: './pages/steps.js',TabsPage: './helpers/tabValidation/tabValidationsHelper.js' },
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  mocha: {
    reporterEnabled: 'mocha-junit-reporters, mochawesome,codeceptjs-cli-reporter',

    reporterOptions: {

      // reportDir:  './functional-output',
      // reportName: 'FinremSolTests',
      // inlineAssets: true,
      'codeceptjs-cli-reporter': {
        stdout: '-',
        options: {
          verbose: false,
          steps: true
        }
      },
      mochawesome: {
        stdout: './functional-output/mochawesome/console.log',
        options: {
          includeScreenshots: true,
          reportDir: './functional-output/mochawesome',
          reportFilename: 'FineRem-E2E',
          inline: true,
          html:true,
          json: true

        }
      },
      'mocha-junit-reporter': {
        
        stdout: './functional-output/mocha-junit-reporter/console.log',
        options: {
          mochaFile: './functional-output/mocha-junit-reporter/report2result.xml'
        }
      }
    }
  },
  name: 'Finrem E2E Tests'
};

