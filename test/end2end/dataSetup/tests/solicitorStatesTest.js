
var assert = require('assert');
const dateUtil = require('../../helpers/dateUtil.js');


const {getContestedScenarioState,getConsentedScenarioState} = require('../scenarios/scenarioState');

describe('FR Cases Creation ', function () {

  it.only('Scenario Runner Test', async function () { 
    await getContestedScenarioState('Application Drafted', getSolRef());

    // await getConsentedScenarioState('Consent Order Approved', getSolRef());
  });

});


function getSolRef() {
  return 'AUTOSetup-' + dateUtil.createSolicitorReference();
}