
var http = require('./httpAxios').default;

var consentedCaseRequest = require('./caseRequests/consentedRequest').default;
var contestedCaseRequest = require('./caseRequests/contestedRequest').default;




async function createContestedCase(solRef){
  console.log(new Date()+' : Create  Contested Case ');
  try{
    return await createCase(solRef, 'FinancialRemedyContested', contestedCaseRequest);

  }
  catch(err){
    console.error(err);
    throw err;
  }

//   console.log('****************** Contested Case Created');

}

async function createConsentedCase(solRef) {
  console.log(new Date() + ' : Create  Sonsented Case ');

  var caseId =  await createCase(solRef, 'FinancialRemedyMVP2', consentedCaseRequest);
  return caseId;
}



async function createCase(solRef,caseType,requestData){
  let eventToken = await getEventToken(caseType);
  requestData.data.solicitorReference = solRef;
  requestData.event_token = eventToken;

  let res = await http({
    method: 'post',
    url: 'https://gateway-ccd.aat.platform.hmcts.net/data/caseworkers/:uid/jurisdictions/DIVORCE/case-types/' + caseType+'/cases?ignore-warning=false',
    data: requestData,
    headers : {'Content-Type' : 'application/json'}
  });
  console.log('*******   solref : ' + solRef);
  console.log('*******   CaseId : ' + res.data.id);

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


module.exports = { createConsentedCase, createContestedCase};

