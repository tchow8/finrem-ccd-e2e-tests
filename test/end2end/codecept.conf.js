const testConfig = require('test/config.js');

exports.config = {
  tests: './**/**/*.js',
  output: `${process.cwd()}/functional-output`,
  helpers: {
    Puppeteer: {
      url: testConfig.TestFrontendUrl || 'https://www.ccd.demo.platform.hmcts.net/',
      waitForTimeout: 5000,
      waitForAction: 7000,
      getPageTimeout: 60000,
      show: true,
      windowSize: '1152x864',
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
