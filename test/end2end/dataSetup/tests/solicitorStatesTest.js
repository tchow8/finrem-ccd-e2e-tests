
var assert = require('assert');
const dateUtil = require('../../helpers/dateUtil.js');


const {getContestedScenarioState,getConsentedScenarioState} = require('../scenarios/scenarioState');

describe('FR Cases Creation ', function () {

  it.only('Scenario Runner Test', async function () { 
    // await getContestedScenarioState('Awaiting Response', getSolRef());

    await getConsentedScenarioState('Awaiting Response', getSolRef());
  });

});


function getSolRef() {
  return 'AUTOSetup-' + dateUtil.createSolicitorReference();
}