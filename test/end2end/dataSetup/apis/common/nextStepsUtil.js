/* eslint-disable no-console */
var http = require('../httpAxios').default;

var eventDataRequest = {
  'data': {},
  'event': {
    'id': 'to be replaced with ',
    'summary': 'Event Summary',
    'description': 'Event Description'
  },
  'event_token': 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJsYmw0bnU1bjNyaXBuY2dnaWxpcHFucW9uYyIsInN1YiI6IjExNDUyNSIsImlhdCI6MTU2OTMyNjcwOCwiY2FzZS1pZCI6IjE3MDQ4MCIsImV2ZW50LWlkIjoiRlJfSFdGRGVjaXNpb25NYWRlRnJvbUF3YWl0aW5nUGF5bWVudCIsImNhc2UtdHlwZS1pZCI6IkZpbmFuY2lhbFJlbWVkeU1WUDIiLCJqdXJpc2RpY3Rpb24taWQiOiJESVZPUkNFIiwiY2FzZS1zdGF0ZSI6ImF3YWl0aW5nUGF5bWVudFJlc3BvbnNlIiwiY2FzZS12ZXJzaW9uIjoiNWQyMTIyYzNhYWFiNTE2YzQzYjU1ODE5ZDE0ZDc0ZTYyMWRmYTIwYiIsImVudGl0eS12ZXJzaW9uIjoyfQ.yCvj-ytMEAj21AwO4roBR_Gs0sQdhOzJAYQqT3LJUI8',
  'ignore_warning': false
};

async function submitNextStep(caseId, stepConfig) {
  try {
    return await httpSubmit(caseId,stepConfig); 
  } catch (err) {
    // eslint-disable-next-line no-console
    // console.log('Error occured Submiting  step is ' + stepConfig.id,err.response.data  );

    try{
      console.log(new Date()+' : Retry on faulure '+err);
      return await httpSubmit(caseId, stepConfig); 
    }
    catch(err1){
      console.error('Event Data : ', eventDataRequest);
      console.trace(err);
      throw err1;
    } 
  }
}


async function httpSubmit(caseId, stepConfig) {
  let eventToken = await getEventToken(caseId, stepConfig.id);
  eventDataRequest.event_token = eventToken;
  eventDataRequest.event.id = stepConfig.id;
  eventDataRequest.event.summary = stepConfig.id;
  eventDataRequest.event.description = new Date() + ' : Event Details : ' + JSON.stringify(stepConfig.data).replace(/[{}]/g, '').replace(/["']/g, '');
  eventDataRequest.data = stepConfig.data;

  let res = await http({
    method: 'post',
    url: 'https://gateway-ccd.aat.platform.hmcts.net/data/cases/' + caseId + '/events',
    data: eventDataRequest,
    headers: { 'Content-Type': 'application/json', experimental: true }
  });
  return res.data.id;
}






async function getEventToken(caseId, event) {
  try{
    let res = await http({
      method: 'get',
      url: 'https://gateway-ccd.aat.platform.hmcts.net/data/internal/cases/' + caseId + '/event-triggers/' + event + '?ignore-warning=false',
      headers: { experimental: true }
    });

    return res.data.event_token;
  }
  catch(err){
    console.log(err);
    throw err;
  }


}





exports.default = submitNextStep;
