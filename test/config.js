module.exports = {
  TestFrontendUrl: process.env.TEST_E2E_URL || 'https://www.ccd.demo.platform.hmcts.net/',
  TestSolicitorUserName: process.env.TEST_SOLS_USER_NAME || 'vivekreddyfinremsol@mailinator.com',
  TestSolicitorPassword: process.env.TEST_SOLS_PASSWORD || 'Testing01',
  TestCaseWorkerUserName: process.env.TEST_CASEWORKER_USER_NAME || '',
  TestCaseWorkerPassword: process.env.TEST_CASEWORKER_PASSWORD || '',
  TestJudgeUserName: process.env.TEST_CASEWORKER_USER_NAME || '',
  TestJudgePassword: process.env.TEST_CASEWORKER_PASSWORD || '',
  links: {
    cookies: '',
    terms: '',
    survey: '',
    surveyEndOfApplication: ''
  }
};