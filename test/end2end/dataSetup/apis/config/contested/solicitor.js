var submitNextStep = require('../../common/nextStepsUtil').default;
var nextStepsConfig = require('./contestedNextStepsConfig').default; 

var {uploadFile} = require('../../common/common');
var path = require('path');
var getStepId = require('../../common/getStepId').default;


async function solicitorSubmitNextStep(caseId,step){
  console.log(new Date() + ' : Solicitor ->  ' + step);

  let stepConfig = {}; 
  switch (step){
  case 'Upload Draft Order':
    stepConfig = nextStepsConfig.solicitor[step];
    var documentDetails = await uploadFile(path.resolve('test/end2end/data/dummy.pdf'));
    stepConfig.data.uploadPostHearingDraftOrder[0].value.uploadDraftDocument = documentDetails;
    break;
  default:
    stepConfig = nextStepsConfig.solicitor[step]; 
  } 
  stepConfig.id = await getStepId(caseId, step); 

  return await submitNextStep(caseId, stepConfig);

}



exports.default = solicitorSubmitNextStep;