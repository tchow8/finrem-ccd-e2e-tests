var extend = require('extend');


var defaultConfig = {
  tests: './**/**/*.js',
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

if (process.env.Journey_Type == 'test-e2e')
{  exports.config = defaultConfig }
else if (process.env.Journey_Type == 'e2eHwfJourney')
{var configOverrides = require('./package-Hwf') || {};
exports.config = extend(defaultConfig, configOverrides);
}
else if (process.env.Journey_Type == 'e2ePbaJourney')
{var configOverrides = require('./package-Pba') || {};
exports.config = extend(defaultConfig, configOverrides);
}