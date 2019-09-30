
var assert = require('assert');
const dateUtil = require('../../helpers/dateUtil.js');


const {getContestedScenarioState} = require('../scenarios/scenarioState');

describe('FR Cases Creation ', function () {

  it.only('Scenario Runner Test', async function () { 
      await getContestedScenarioState('Review Order', getSolRef());
  });

});


function getSolRef() {
  return 'AUTOSetup-' + dateUtil.createSolicitorReference();
}