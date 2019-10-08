const date = require('moment');

function createSolicitorReference() {

  return date().valueOf();
}

function getFastTrackHearingDate() {

  return date().add(7*7,'d').format('DD-MM-YYYY');
}

function getStandardHearingDate() {

  return date().add(13 * 7, 'd').format('DD-MM-YYYY');
}


module.exports = { createSolicitorReference, getFastTrackHearingDate, getStandardHearingDate};
