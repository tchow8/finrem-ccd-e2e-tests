
var assert = require('assert');
const dateUtil = require('../../helpers/dateUtil.js');


const {getContestedScenarioState,getConsentedScenarioState} = require('../scenarios/scenarioState');

describe('FR Cases Creation ', function () {

  it.only('Scenario Runner Test', async function () { 
    await getConsentedScenarioState('Application Drafted', getSolRef());
  });

});


function getSolRef() {
  return 'AUTOSetup-' + dateUtil.createSolicitorReference();
}