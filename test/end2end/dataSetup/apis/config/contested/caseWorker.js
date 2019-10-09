var submitNextStep = require('../../common/nextStepsUtil').default;
var nextStepsConfig = require('./contestedNextStepsConfig').default;

var getStepId = require('../../common/getStepId').default;

var {isCaseFastTrack,uploadFile} = require('../../common/common');
const log = require('../../common/logger').default;



async function caseWorkerNextStep(caseId, step) {
    log(' Caseworker -> '+step);
  let stepConfig = nextStepsConfig.caseWorker[step];
  switch (step) {
  case 'Issue Application':
    stepConfig.data.issueDate = todaysDate();
    break;
      case 'List for Hearing':
    stepConfig.data.hearingDate = await getHearingDate(caseId);
    break;

    case 'Consent Order Payment':
      stepConfig.data.uploadConsentedOrder = await uploadFile('test/end2end/data/dummy.pdf');

    break;
  default:
    stepConfig = nextStepsConfig.caseWorker[step];
  }
    stepConfig.id = await getStepId(caseId, step); 
  return await submitNextStep(caseId, stepConfig);

}


function todaysDate (){
  var today = new Date();
  let date = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
  let month = (today.getMonth() + 1) < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;
  return today.getFullYear() + '-' + month + '-' + date;
}


async function getHearingDate(caseId){
  let caseFastTrackStatus = await isCaseFastTrack(caseId);
  let hearingDate = new Date();
  if (caseFastTrackStatus === 'Yes') {
    hearingDate.setTime(hearingDate.getTime() + (7 * 7) * 86400000);
  } else {
    hearingDate.setTime(hearingDate.getTime() + (13 * 7) * 86400000);
  }

  let date = hearingDate.getDate() < 10 ? '0' + hearingDate.getDate() : hearingDate.getDate();
  let month = (hearingDate.getMonth() + 1) < 10 ? '0' + (hearingDate.getMonth() + 1) : (hearingDate.getMonth() + 1);
  return hearingDate.getFullYear() + '-' + month + '-' + date;

}

exports.default = caseWorkerNextStep;