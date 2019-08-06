const testConfig = require('test/config.js');

exports.config = {

  tests: './**/consentedJourneys/*.js',
  output: `${process.cwd()}/functional-output`,
  helpers: {
    Puppeteer: {
      url: testConfig.TestFrontendUrl || 'https://www.ccd.demo.platform.hmcts.net/',
      waitForTimeout: 5000,
      // waitForAction: 2000,
      getPageTimeout: 30000,
      show: true,
      waitForNavigation: 'networkidle0',
      ignoreHTTPSErrors: true,
      headless: true,
      chrome: {
        ignoreHTTPSErrors: true,
        args: [
          '--no-sandbox',
          '--proxy-server=proxyout.reform.hmcts.net:8080'
        ],
        defaultViewport: {
          width:1280,
          height: 960 
        }
      }

    }
    // ,
    // commonHelpers: {
    //   require: './common/common.js' 
    // }
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  include: { I: './consented/pages/steps.js' },

  mocha: {
    reporterOptions: {
      // reportDir: process.env.E2E_OUTPUT_DIR || './functional-output',
      // reportName: 'FinremSolTests',
      // ,
      // inlineAssets: true
      'codeceptjs-cli-reporter': {
        stdout: '-',
        options: {
          verbose: false,
          steps: true
        }
      },
      mochawesome: {
        stdout: './report1/console.log',
        options: {
          reportDir: './report1',
          reportFilename: 'report'
        }
      }
      ,
      'mocha-junit-reporter': {
        stdout: './report2/console.log',
        options: {
          mochaFile: './report1/report2result.xml'
        },
        attachments: true //add screenshot for a failed test
      }
      
    }
    
  },
  name: 'Finrem Sol Tests'
};
