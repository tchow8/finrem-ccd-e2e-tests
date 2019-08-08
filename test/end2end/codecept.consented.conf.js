const testConfig = require('test/config.js');

exports.config = {

  tests: './**/consentedJourneys/consentedE2EHwfJourney.js',
  output: `${process.cwd()}/functional-output`,
  helpers: {
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
      timeouts:{
        script: 60000,
        'page load': 10000
      },
      args: [
        '--no-sandbox',
        '--proxy-server=proxyout.reform.hmcts.net:8080',
        '--disable-dev-shm-usage',
        '--headless'
      ],
        
      desiredCapabilities:{
        proxy:{
          proxyType: 'manual',
          httpProxy: 'proxyout.reform.hmcts.net:8080'
        }
        
      }
    }
    
  
  },
  include: { I: './consented/pages/steps.js' },
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
      // ,
      // seleniumInstallArgs: {
      //   version: '3.141.5',
      //   baseURL: 'https://selenium-release.storage.googleapis.com',
      //   drivers: {
      //     chrome: {
      //       version: '74.0.3729.6',
      //       arch: process.arch,
      //       baseURL: 'https://chromedriver.storage.googleapis.com'
      //     }
      //   }
      // }
    }
  },
  mocha: {
    reporterOptions: {
      // reportDir: process.env.E2E_OUTPUT_DIR || './functional-output',
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
          reportDir: './report1',
          reportFilename: 'report'
        }
      },
      'mocha-junit-reporter': {
        stdout: './functional-output/mocha-junit-reporter/console.log',
        options: {
          mochaFile: './report2/report2result.xml'
        },
        attachments: true //add screenshot for a failed test
      }
    }
  },
  name: 'Finrem Sol Tests'
};