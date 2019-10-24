
var assert = require('assert');
const dateUtil = require('../../helpers/dateUtil.js');


const {getContestedScenarioState,getConsentedScenarioState} = require('../scenarios/scenarioState');

describe('FR Consented Case states ', function () {

  it('Application Drafted', async function () { 
    await getConsentedScenarioState('Application Drafted', getSolRef());
  });

  it('Application Submitted', async function () {
    await getConsentedScenarioState('Application Submitted', getSolRef());
  });

  it('Awaiting Response', async function () {
    await getConsentedScenarioState('Awaiting Response', getSolRef());
  });

  it('Awaiting HWF Decision', async function () {
    await getConsentedScenarioState('Awaiting HWF Decision', getSolRef());
  });

  it('SAwaiting Payment Response', async function () {
    await getConsentedScenarioState('Awaiting Payment Response', getSolRef());
  });

  it('Application Issued', async function () {
    await getConsentedScenarioState('Application Issued', getSolRef());
  });

  it('Consent Order Not Approved', async function () {
    await getConsentedScenarioState('Consent Order Not Approved', getSolRef());
  });



  it('Consent Order Approved', async function () {
    await getConsentedScenarioState('Consent Order Approved', getSolRef());
  });



  it('Response Received', async function () {
    await getConsentedScenarioState('Response Received', getSolRef());
  });

  it('Awaiting Judicial Response', async function () {
    await getConsentedScenarioState('Awaiting Judicial Response', getSolRef());
  });






});


function getSolRef() {
  return 'AUTOSetup-' + dateUtil.createSolicitorReference();
}