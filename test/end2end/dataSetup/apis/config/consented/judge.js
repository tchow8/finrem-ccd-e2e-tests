var submitNextStep = require('../../common/nextStepsUtil').default;
var nextStepsConfig = require('./consentedNextStepsConfig').default;

var getStepId = require('../../common/getStepId').default;
const log = require('../../common/logger').default;


async function judgeSubmitNextStep(caseId, step) {
    log('Judge -> ' + step);

    let stepConfig = nextStepsConfig.judge[step];
    switch (step) {
        default:
            stepConfig = nextStepsConfig.judge[step];
    }
    stepConfig.id = await getStepId(caseId, step); 

    return await submitNextStep(caseId, stepConfig);

}

exports.default = judgeSubmitNextStep;