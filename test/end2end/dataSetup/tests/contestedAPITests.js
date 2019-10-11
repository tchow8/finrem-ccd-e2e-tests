
var assert = require('assert');
const dateUtil = require('../../helpers/dateUtil.js');


const { getContestedScenarioState } = require('../scenarios/scenarioState');

describe('FR Cases Creation ', function () {

  it.only('Application Drafted', async function () {
    await getContestedScenarioState('Application Drafted', getSolRef());
  });


  it('Prepare for Hearing', async function () {
    await getContestedScenarioState('Prepare for Hearing', getSolRef());
  });

  it('Solicitor Draft Order', async function () {
    await getContestedScenarioState('Solicitor Draft Order', getSolRef());
  });

  it('Application Submitted', async function () {
    await getContestedScenarioState('Application Submitted', getSolRef());
  });

  it('Awaiting HWF Decision', async function () {
    await getContestedScenarioState('Awaiting HWF Decision', getSolRef());
  });


  it('Awaiting Payment Response', async function () {
    await getContestedScenarioState('Awaiting Payment Response', getSolRef());
  });

  it('Application Issued', async function () {
    await getContestedScenarioState('Application Issued', getSolRef());
  });

  it('Scheduling and Hearing', async function () {
    await getContestedScenarioState('Scheduling and Hearing', getSolRef());
  });

  it('Draft Order Not Approved', async function () {
    await getContestedScenarioState('Draft Order Not Approved', getSolRef());
  });

  it('Schedule & Raise Directions Order', async function () {
    await getContestedScenarioState('Schedule & Raise Directions Order', getSolRef());
  });

  it('Order Drawn', async function () {
    await getContestedScenarioState('Order Drawn', getSolRef());
  });

  it('Order Sent', async function () {
    await getContestedScenarioState('Order Sent', getSolRef());
  });

  it('Consent Process', async function () {
    await getContestedScenarioState('Consent Process', getSolRef());
  });

  it('Consent Order Not Approved', async function () {
    await getContestedScenarioState('Consent Order Not Approved', getSolRef());
  });

  it('Gate Keeping & Allocation', async function () {
    await getContestedScenarioState('Gate Keeping & Allocation', getSolRef());
  });

  it('Ready for Hearing', async function () {
    await getContestedScenarioState('Ready for Hearing', getSolRef());
  });

  it('Review Order', async function () {
    await getContestedScenarioState('Review Order', getSolRef());
  });


  it('Judge Draft Order', async function () {
    await getContestedScenarioState('Judge Draft Order', getSolRef());
  });

  it('Awaiting Judiciary Response', async function () {
    await getContestedScenarioState('Awaiting Judiciary Response', getSolRef());
  });



});


function getSolRef() {
  return 'AUTOSetup-' + dateUtil.createSolicitorReference();
}