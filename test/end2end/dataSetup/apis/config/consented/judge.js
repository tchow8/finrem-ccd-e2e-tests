var submitNextStep = require('../../common/nextStepsUtil').default;
var nextStepsConfig = require('./consentedNextStepsConfig').default;

var getStepId = require('../../common/getStepId').default;
const log = require('../../common/logger').default;

const http = require('../../httpAxios').default;

const { getEventToken } = require('../../common/common');

async function judgeSubmitNextStep(caseId, step) {
  log('Judge -> ' + step);

  let stepConfig = nextStepsConfig.judge[step];
  stepConfig.id = await getStepId(caseId, step, stepConfig.id); 

  switch (step) {

  case 'Application Not Approved':
    stepConfig.data = getOrderFefusalCollection(caseId,stepConfig.data,stepConfig.id);
    break;
    case 'Approve Application':
        stepConfig.data.orderDirectionDate = todaysDate(); 
    break;
  default:
    stepConfig = nextStepsConfig.judge[step];
  }

  return await submitNextStep(caseId, stepConfig);

}

function todaysDate() {
    var today = new Date();
    let date = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
    let month = (today.getMonth() + 1) < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;
    return today.getFullYear() + '-' + month + '-' + date;
}


async function getOrderFefusalCollection(caseId,data,stepId){
  orderFusalReasonsRequest.event.id = stepId;
  orderFusalReasonsRequest.data.orderRefusalCollectionNew = data.orderRefusalCollectionNew;   
  orderFusalReasonsRequest.event_data.orderRefusalCollectionNew = data.orderRefusalCollectionNew;
  orderFusalReasonsRequest.event_token = await getEventToken(caseId, stepId);
  orderFusalReasonsRequest.case_reference = caseId; 

  let res = await http({
    method: 'post',
    url: 'https://gateway-ccd.aat.platform.hmcts.net/data/case-types/FinancialRemedyMVP2/validate?pageId=FR_orderRefusalorderRefusalCollectionNew',
    data: orderFusalReasonsRequest,
    headers: { 'Content-Type': 'application/json' }
  });

  data.orderRefusalCollectionNew  = res.data.orderRefusalCollectionNew;
  data.orderRefusalPreviewDocument = res.data.orderRefusalPreviewDocument;
  return data;
}

var orderFusalReasonsRequest = {
  'data': {
    'orderRefusalCollectionNew': []
  },
  'event': {
    'id': 'FR_orderRefusal',
    'summary': '',
    'description': ''
  },
  'event_token': 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiaDhpZjB0NnFnYnFncXRuMnU3ZzBzZ2UwNSIsInN1YiI6Ijk2ODY2IiwiaWF0IjoxNTcwNjk3NTQwLCJjYXNlLWlkIjoiMTcwNjcyIiwiZXZlbnQtaWQiOiJGUl9vcmRlclJlZnVzYWwiLCJjYXNlLXR5cGUtaWQiOiJGaW5hbmNpYWxSZW1lZHlNVlAyIiwianVyaXNkaWN0aW9uLWlkIjoiRElWT1JDRSIsImNhc2Utc3RhdGUiOiJyZWZlcnJlZFRvSnVkZ2UiLCJjYXNlLXZlcnNpb24iOiI3MjQ2NDU3MDIzNDRjMjQ5NTljNGJiZmFlMWZkOWNlZDQ0ZDZhODAzIiwiZW50aXR5LXZlcnNpb24iOjF9.wA0hOUfsfmfgUVXsyKk61iGZyb6kXM4WHWrFgb5KJa0',
  'ignore_warning': false,
  'event_data': {
    'orderRefusalCollectionNew': []
  },
  'case_reference': '1533565207353927'
};




exports.default = judgeSubmitNextStep;

