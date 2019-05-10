module.exports = {
  TestFrontendUrl: process.env.TEST_E2E_URL || 'https://www-ccd.aat.platform.hmcts.net/',
  TestSolicitorUserName: process.env.TEST_SOLS_USER_NAME || 'mahesh_fr_sol@mailinator.com',
  TestSolicitorPassword: process.env.TEST_SOLS_PASSWORD || 'London01',
  TestCaseWorkerUserName: process.env.TEST_CASEWORKER_USER_NAME || 'mahesh_fr_courtadmn@mailinator.com',
  TestCaseWorkerPassword: process.env.TEST_CASEWORKER_PASSWORD || 'London01',
  TestJudgeUserName: process.env.TEST_JUDGE_USER_NAME || 'mahesh_fr_judge@mailinator.com',
  TestJudgePassword: process.env.TEST_JUDGE_PASSWORD || 'London01',
  links: {
    cookies: '',
    terms: '',
    survey: '',
    surveyEndOfApplication: ''
  }
};