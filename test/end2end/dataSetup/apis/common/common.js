/* eslint-disable no-console */

var http = require('../httpAxios').default;

var { loginWithCredentials } = require('./login');
const config = require('../../../../config');

const fs = require('fs');
const FormData = require('form-data');

const log = require('./logger').default;

async function solicitorLogin(){
  log('Solicitor Login');
  await loginWithCredentials(config.TestSolicitorUserName,config.TestSolicitorPassword);
}

async function caseWorkerLogin(){
  // console.log(new Date() + ' : Case worker Login');
  log('Case worker Login');
  await loginWithCredentials(config.TestCaseWorkerUserName,config.TestCaseWorkerPassword);

}

async function judgeLogin(){
  // console.log(new Date() + ' : Judge Login');
  log('Judge login');
  await loginWithCredentials(config.TestJudgeUserName,config.TestJudgePassword);

}

async function getCaseDetails(caseId) {

  var res = await http({
    method: 'get',
    url: 'https://gateway-ccd.aat.platform.hmcts.net/data/internal/cases/' + caseId,
    headers: { experimental: true }
  });

  return res;
}

async function isCaseFastTrack(caseId) {
  let hiddenTab = await getCaseTabWithLabel(caseId,'Hidden Tab');
  let isFastTract = getFieldWithId(hiddenTab[0].fields,'fastTrackDecision');
  return isFastTract[0].value;
}

function getFieldWithId(array, value){
  return array.filter(function (field) {
    return field.id === value;
  });
}

async function getCaseTabWithLabel(caseId,tabLabel) {
  var res = await getCaseDetails(caseId);
  const tabs = res.data.tabs;
  return tabs.filter(function(tab){
    return tab.label === tabLabel;
  });
}


async function uploadFile(filePath){
  let uploadDetails = {};
  let formData = new FormData();
  var newFile = await fs.createReadStream(filePath);

  formData.append('files', newFile);
  formData.append('classification','PUBLIC');

  try{
    let uploadres = await http({
      method: 'post',
      url: 'https://gateway-ccd.aat.platform.hmcts.net/documents',
      data: formData,
      headers: formData.getHeaders()
    });
    uploadDetails.document_url = uploadres.data._embedded.documents[0]._links.self.href;
    uploadDetails.document_binary_url = uploadres.data._embedded.documents[0]._links.self.href+'/binary';
    uploadDetails.document_filename = uploadres.data._embedded.documents[0].originalDocumentName;


    return uploadDetails;
  }catch(err){
    log(err);
    console.log(err);
  }
}


async function getEventToken(caseId, event) {
  try {
    let res = await http({
      method: 'get',
      url: 'https://gateway-ccd.aat.platform.hmcts.net/data/internal/cases/' + caseId + '/event-triggers/' + event + '?ignore-warning=false',
      headers: { experimental: true }
    });

    return res.data.event_token;
  }
  catch (err) {
    console.log(err);
    throw err;
  }

}

module.exports = { isCaseFastTrack, solicitorLogin, caseWorkerLogin, judgeLogin, uploadFile, getEventToken };