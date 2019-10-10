var submitNextStep = require('../../common/nextStepsUtil').default;
var nextStepsConfig = require('./consentedNextStepsConfig').default; 

var {uploadFile} = require('../../common/common');
var path = require('path');
var getStepId = require('../../common/getStepId').default;

const log = require('../../common/logger').default;

async function solicitorSubmitNextStep(caseId,step){
  log('Solicitor ->  ' + step);

  let stepConfig = {}; 
  switch (step){
  case 'Upload Draft Order':
    stepConfig = nextStepsConfig.solicitor[step];
    var documentDetails = await uploadFile(path.resolve('test/end2end/data/dummy.pdf'));
    stepConfig.data.uploadPostHearingDraftOrder[0].value.uploadDraftDocument = documentDetails;
    break;

  case 'Respond To Order':
    stepConfig = nextStepsConfig.solicitor[step];
    var uploadDocs = await uploadFile(path.resolve('test/end2end/data/dummy.pdf'));
    stepConfig.data.respondToOrderDocuments[0].value.DocumentLink = uploadDocs;
    stepConfig.data.respondToOrderDocuments[0].value.DocumentDateAdded = todaysDate(); 
    break;
  default:
    stepConfig = nextStepsConfig.solicitor[step]; 
  } 
  stepConfig.id = await getStepId(caseId, step); 

  return await submitNextStep(caseId, stepConfig);

}

function todaysDate() {
  var today = new Date();
  let date = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
  let month = (today.getMonth() + 1) < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;
  return today.getFullYear() + '-' + month + '-' + date;
}

exports.default = solicitorSubmitNextStep;