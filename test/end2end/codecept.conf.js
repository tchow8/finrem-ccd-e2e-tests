const testConfig = require('test/config.js');

exports.config = {

//    if (process.env.JourneyType == "test-e2e")
    tests: './**/**/*.js'
//    else if(process.env.JournetyType == "e2eHwfJourney"),
//     {tests: './**/**/e2eHwfJourney.js'}
//     else if(process.env.JournetyType == "e2ePbaJourney"),
//          {tests: './**/**/e2ePbaJourney.js'}
  output: `${process.cwd()}/functional-output`,
  helpers: {
    Puppeteer: {
      url: testConfig.TestFrontendUrl || 'https://www.ccd.demo.platform.hmcts.net/',
      waitForTimeout: 5000,
      waitForAction: 2000,
      getPageTimeout: 30000,
      show: false,
      waitForNavigation: 'networkidle0',
      ignoreHTTPSErrors: true,
      headless: true,
      chrome: {
        ignoreHTTPSErrors: true,
        args: [
          '--no-sandbox',
          '--proxy-server=proxyout.reform.hmcts.net:8080'
        ]
      }

    }
  },
  include: { I: './pages/steps.js' },
  mocha: {
    reporterOptions: {
      reportDir: process.env.E2E_OUTPUT_DIR || './functional-output',
      reportName: 'FinremSolTests',
      inlineAssets: true
    }
  },
  name: 'Finrem Sol Tests'
};
