var { solicitorLogin, caseWorkerLogin, judgeLogin } = require('../apis/common/common');

var contestedStateConfig = require('../apis/config/contested/contestedStateProvider').default;
var contestedNextStepConfig = require('../apis/config/contested/contestedNextStepsConfig').default;
var contestedSolicitorSteps = require('../apis/config/contested/solicitor').default;
var contestedCaseWorkerSteps = require('../apis/config/contested/caseWorker').default;
var contestedJudgeSteps = require('../apis/config/contested/judge').default;



var consentedStateConfig = require('../apis/config/consented/consentedStateProvider').default;
var consentedNextStepConfig = require('../apis/config/consented/consentedNextStepsConfig').default;
var consentedSolicitorSteps = require('../apis/config/consented/solicitor').default;
var consentedCaseWorkerSteps = require('../apis/config/consented/caseWorker').default;
var consentedJudgeSteps = require('../apis/config/consented/judge').default;

const log = require('../apis/common/logger').default;

async function  getContestedScenarioState(state,solRef){
  const scenarioConfig = {
    solRef: solRef,
    state: state,
    stateConfig: contestedStateConfig,
    nextStepsConfig: contestedNextStepConfig,
    solicitorNextSteps: contestedSolicitorSteps,
    caseWorkerNextSteps: contestedCaseWorkerSteps,
    judgeNextSteps: contestedJudgeSteps
  };
 
  log('Case Data Setup started.');
  return await getScenarioState(scenarioConfig); 

}

async function getConsentedScenarioState(state, solRef) {
  const scenarioConfig = {
    solRef: solRef,
    state: state,
    stateConfig: consentedStateConfig,
    nextStepsConfig: consentedNextStepConfig,
    solicitorNextSteps: consentedSolicitorSteps,
    caseWorkerNextSteps: consentedCaseWorkerSteps,
    judgeNextSteps: consentedJudgeSteps
  };
  
  log('Case Data Setup started.'); 
  return await getScenarioState(scenarioConfig); 

}


async function getScenarioState(scenarioConfig){

  const state = scenarioConfig.state;
  const stateConfigProvider = scenarioConfig.stateConfig;
  const solRef = scenarioConfig.solRef;
  const nextStepsConfig = scenarioConfig.nextStepsConfig;
  const solicitorNextSteps = scenarioConfig.solicitorNextSteps;
  const caseWorkerNextSteps = scenarioConfig.caseWorkerNextSteps; 
  const judgeNextSteps = scenarioConfig.judgeNextSteps; 

  let caseId = '';
  const stateConfig = getStateConfig(state,stateConfigProvider);
  if (stateConfig.prevStates.length === 0){
    await solicitorLogin(); 
    return await stateConfig.method(solRef); 
  }else{
    let prevStateScenarioConfig = Object.assign({},scenarioConfig );
    prevStateScenarioConfig.state = stateConfig.prevStates[0]; 
    let caseid = await getScenarioState(prevStateScenarioConfig);
    const prevStateConfig = getStateConfig(stateConfig.prevStates[0], stateConfigProvider);
    const stepConfig = prevStateConfig.nextSteps.filter(nextStep => nextStep.endState === state);

    if (stepConfig.length === 0) {
      log('CONFIGURATION ERROR : '+stateConfig.prevStates[0] + ' State Configuration ' + JSON.stringify(prevStateConfig));
      throw Error('State Config error : ' + stateConfig.prevStates[0] + ' state has no nextStep to reach ' + state + '\n' + stateConfig.prevStates[0] + ' State Configuration ' + JSON.stringify(prevStateConfig));
    }

    const step = stepConfig[0].nextStep;
    const prevStateUser = getUserForState(stateConfig.prevStates[0], stateConfigProvider);


    await switchUserForAction(stateConfig.prevStates[0], stateConfigProvider);   
    if (!nextStepsConfig[prevStateUser][step]){
      throw Error('CONFIGURATION ERROR : '+step + ' not found in Next Step configuration for user ' + prevStateUser);
    }

    try{
      switch (prevStateUser) {
      case 'solicitor':
        return await solicitorNextSteps(caseid, step);
      case 'caseWorker':
        return await caseWorkerNextSteps(caseid, step);
      case 'judge':
        return await judgeNextSteps(caseid, step);
      default:

      } 
    }catch(err){
      err.message = prevStateUser + ' : Error executing step ' + step+' :'+err.message; 
      throw err;
    }
  
  }
}

async function switchUserForAction(state, stateConfigProvider){
  const stateConfig = getStateConfig(state, stateConfigProvider);

  if (stateConfig.prevStates.length === 0) {
    return;
  }
  const prevState = stateConfig.prevStates[0];

  const prevStateUser = getUserForState(prevState,stateConfigProvider);
  const currentStateUser = getUserForState(state,stateConfigProvider); 

  if (prevStateUser !== currentStateUser) {
    log(' ---------------------->');
    switch (currentStateUser) {
    case 'solicitor':
      await solicitorLogin();
      break;
    case 'caseWorker':
      await caseWorkerLogin();
      break;
    case 'judge':
      await judgeLogin();
      break;
    }
  }
  
}

function getUserForState(state, stateConfigProvider){
  // console.log('getUserForState : ' + state);

  if (stateConfigProvider.solicitor[state]) {
    return 'solicitor';
  }
  if (stateConfigProvider.caseWorker[state]) {
    return 'caseWorker';
  }
  if (stateConfigProvider.judge[state]) {
    return 'judge';
  }  
  throw Error('CONFIGURATION ERROR : '+state + ' : Not found in provided state Conig. Check config'); 
 
}

function getStateConfig(state, stateConfigProvider){
  // console.log('getStateConfig : ' + state);

  if (stateConfigProvider.solicitor[state]){
    return stateConfigProvider.solicitor[state]; 
  }
  if (stateConfigProvider.caseWorker[state]) {
    return stateConfigProvider.caseWorker[state];
  } 
  if (stateConfigProvider.judge[state]) {
    return stateConfigProvider.judge[state];
  }  
  throw Error('CONFIGURATION ERROR : '+state +' : Not found in provided state Conig. Check config'); 
}

module.exports = { getContestedScenarioState, getConsentedScenarioState}; 