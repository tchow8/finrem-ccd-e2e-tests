var http = require('../httpAxios').default;



async function getNextStepId(caseId,step){
  try {
    let res = await http({
      method: 'get',
      url: 'https://gateway-ccd.aat.platform.hmcts.net/data/internal/cases/'+caseId,
      headers: { experimental: true }
    });
    let stepName = step.split('|')[0];
      let matchingSteps = res.data.triggers.filter(trigger => trigger.name === stepName);

    if (matchingSteps.length === 0){
        throw Error(stepName + ' not found in next steps.Please check config. Current state is : ' + res.data.state.name);
    }
    return matchingSteps[0].id; 
  }
  catch (err) {
    console.log(err);
    throw err;
  }
}

exports.default = getNextStepId;