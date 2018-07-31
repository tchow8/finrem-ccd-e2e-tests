const date = require('moment');

function createSolicitorReference() {

  return date().valueOf();
}

module.exports = { createSolicitorReference };