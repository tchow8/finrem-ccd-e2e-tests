module.exports = {
  TestFrontendUrl: process.env.TEST_E2E_URL || 'https://www-ccd.aat.platform.hmcts.net/',
  TestSolicitorUserName: process.env.TEST_SOLS_USER_NAME || 'henry_fr_harper@yahoo.com',
  TestSolicitorPassword: process.env.TEST_SOLS_PASSWORD || 'Nagoya0102',
  TestCaseWorkerUserName: process.env.TEST_CASEWORKER_USER_NAME || 'vivek_fr_courtadmn@mailinator.com',
  TestCaseWorkerPassword: process.env.TEST_CASEWORKER_PASSWORD || 'London01',
  TestJudgeUserName: process.env.TEST_CASEWORKER_USER_NAME || 'vivek_fr_judge@mailinator.com',
  TestJudgePassword: process.env.TEST_CASEWORKER_PASSWORD || 'London01',
  links: {
    cookies: '',
    terms: '',
    survey: '',
    surveyEndOfApplication: ''
  }
};