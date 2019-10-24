
var http = require('./httpAxios').default;

var jsonPath  = require('jsonpath');

var consentedCaseRequest = require('./caseRequests/consentedRequest').default;
var contestedCaseRequest = require('./caseRequests/contestedRequest').default;

const log = require('./common/logger').default;


async function createContestedCase(solRef){
  log('Create  Contested Case ');
  try{
    return await createCase(solRef, 'FinancialRemedyContested', contestedCaseRequest);
  }
  catch(err){
    log(err);
    throw err;
  }

//   console.log('****************** Contested Case Created');

}

async function createConsentedCase(solRef) {
  log('Create  Consented Case ');

  try{
    var caseId =  await createCase(solRef, 'FinancialRemedyMVP2', consentedCaseRequest);
  }
  catch (err) {
    log(err);
    throw err;
  }
  return caseId;
}



async function createCase(solRef,caseType,requestData){
  let eventToken = await getEventToken(caseType);

  // await getCaseData(caseType, requestData.data);

  requestData.data.solicitorReference = solRef;
  requestData.event_token = eventToken;

  let res = await http({
    method: 'post',
    url: 'https://gateway-ccd.aat.platform.hmcts.net/data/caseworkers/:uid/jurisdictions/DIVORCE/case-types/' + caseType+'/cases?ignore-warning=false',
    data: requestData,
    headers : {'Content-Type' : 'application/json'}
  });
  log('*******   solref : ' + solRef);
  log('*******   CaseId : ' + res.data.id);

  return res.data.id;
}

async function getEventToken(caseType){
  let res = await http({
    method : 'get',
    url: 'https://gateway-ccd.aat.platform.hmcts.net/data/internal/case-types/' + caseType+'/event-triggers/FR_solicitorCreate?ignore-warning=false',
    headers : {experimental : true}
  });

  return res.data.event_token;

}


async function getCaseData(caseType,requestData){
  let res = await http({
    method: 'get',
    url: 'https://gateway-ccd.aat.platform.hmcts.net/data/internal/case-types/' + caseType + '/event-triggers/FR_solicitorCreate?ignore-warning=false',
    headers: { experimental: true }
  });

  console.log(jsonPath.query(res.data,'$..case_fields[?(@.field_type.type != "Label")].id'));

  var caseFields = jsonPath.query(res.data, '$..case_fields[?(@.field_type.type != "Label")].id');

  var caseData = {};
  
  for (var caseFieldCounter = 0; caseFieldCounter < caseFields.length; caseFieldCounter++ ){

    if (!requestData[caseFields[caseFieldCounter]]){
      console.log('No Request DAta available for . : ' + caseFields[caseFieldCounter]);
    }
    caseData[caseFields[caseFieldCounter]] = requestData[caseFields[caseFieldCounter]]; 
  }

  return res.data.event_token; 
}


module.exports = { createConsentedCase, createContestedCase};

