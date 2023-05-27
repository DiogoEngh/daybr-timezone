const utils = require("./utils");
const date_operations = require("./modules/date_operations");
const interval = require('./modules/interval')
const compare = require('./modules/compare')

module.exports = {
  ...utils,
  ...date_operations,
  ...interval,
  ...compare
};
