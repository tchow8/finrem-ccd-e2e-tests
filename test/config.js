module.exports = {
  TestFrontendUrl: process.env.TEST_E2E_URL || 'https://www-ccd.aat.platform.hmcts.net/',
  TestSolicitorUserName: process.env.USERNAME-SOLICITOR || 'mahesh_fr_sol@mailinator.com',
  TestSolicitorPassword: process.env.PASSWORD-SOLICITOR || 'London01',
  TestCaseWorkerUserName: process.env.USERNAME-CASEWORKER || 'mahesh_fr_courtadmn@mailinator.com',
  TestCaseWorkerPassword: process.env.PASSWORD-CASEWORKER || 'London01',
  TestJudgeUserName: process.env.USERNAME-JUDGE || 'mahesh_fr_judge@mailinator.com',
  TestJudgePassword: process.env.PASSWORD-JUDGE || 'London01',
  links: {
    cookies: '',
    terms: '',
    survey: '',
    surveyEndOfApplication: ''
  }
};
